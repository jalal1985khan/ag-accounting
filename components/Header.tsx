"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import companyInfo from "@/data/company-info.json"

import servicesData from "@/data/services.json"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        href: "#",
        dropdown: servicesData.map(service => ({
            name: service.title,
            href: service.href
        })),
    },
    { name: "Tax Calculator", href: "/resources/tax-calculator" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Top Bar */}
            <div className={cn(
                "bg-secondary text-secondary-foreground py-2 transition-all duration-300",
                isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
            )}>
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="flex items-center hover:text-primary transition-colors">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>{companyInfo.tel}</span>
                        </a>
                        <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center hover:text-primary transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>{companyInfo.email}</span>
                        </a>
                    </div>
                    <div className="hidden md:block italic">
                        Certified Chartered Accountants
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className={cn(
                "transition-all duration-300 relative z-50",
                isScrolled ? "glass py-3" : "bg-white py-5 shadow-sm"
            )}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={companyInfo.logo} alt="Logo" width={40} height={40} />
                        {/* <div className="bg-primary text-white font-bold text-2xl p-2 rounded">AG</div> */}
                        <div className="flex flex-col">
                            <span className="text-secondary font-bold text-lg leading-none uppercase">Accounting</span>
                            <span className="text-primary text-[10px] font-semibold tracking-widest uppercase">Solutions Ltd</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-secondary font-medium hover:text-primary transition-colors flex items-center",
                                        activeDropdown === item.name && "text-primary"
                                    )}
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                                </Link>

                                {item.dropdown && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 pt-2 w-56 animate-in fade-in slide-in-from-top-2">
                                        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-border">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-6 py-3 text-sm text-secondary hover:bg-muted hover:text-primary transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-secondary transition-all transform hover:scale-105"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-secondary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto animate-in slide-in-from-right">
                    <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <Link
                                    href={item.href}
                                    className="text-xl font-bold text-secondary flex justify-between items-center"
                                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="w-5 h-5" />}
                                </Link>
                                {item.dropdown && (
                                    <div className="mt-4 ml-4 flex flex-col space-y-4 border-l-2 border-primary/20 pl-4">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="text-secondary/70 hover:text-primary transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
