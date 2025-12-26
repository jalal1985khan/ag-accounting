import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import companyInfo from "@/data/company-info.json"
import servicesData from "@/data/services.json"
import locationsData from "@/data/locations.json"

const footerLinks = [
    {
        title: "Services",
        links: servicesData.map(service => ({
            name: service.title,
            href: service.href
        })),
    },
    {
        title: "Quick Links",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Blogs", href: "/blogs" },
            { name: "Online Tax Calculator", href: "/resources/tax-calculator" },
            { name: "Useful Links", href: "/resources/useful-links" },
            { name: "Contact Us", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy-policy" },
        ],
    },
    {
        title: "Locations",
        links: locationsData
    }
]

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src={companyInfo.logo} alt="AG Accounting" width={50} height={50} className="object-contain" />
                            <div className="flex flex-col text-white">
                                <span className="font-bold text-lg leading-none uppercase">Accounting</span>
                                <span className="text-primary text-[10px] font-semibold tracking-widest uppercase">Solutions Ltd</span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Premium accounting and tax consultancy services for individuals and small businesses. We specialize in providing tailored financial solutions that drive growth and compliance.
                        </p>
                        <div className="flex space-x-4">
                            {companyInfo.social.facebook && (
                                <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            )}
                            {companyInfo.social.twitter && (
                                <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {companyInfo.social.instagram && (
                                <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            )}
                            {/* @ts-ignore - linkedin might not exist in type yet but works at runtime */}
                            {companyInfo.social.linkedin && (
                                <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xl font-bold mb-8 relative inline-block">
                                {section.title}
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary"></span>
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-white/60 hover:text-primary hover:translate-x-1 inline-block transition-all">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary"></span>
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">Visit Us At:</p>
                                    <p className="text-sm font-medium">{companyInfo.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">Call Us:</p>
                                    <p className="text-sm font-medium">{companyInfo.tel}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">Email Us:</p>
                                    <p className="text-sm font-medium">{companyInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
                    <p>© {new Date().getFullYear()} AG Accounting Solutions Ltd. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}
