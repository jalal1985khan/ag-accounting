"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    FileText,
    Calculator,
    Users,
    ShieldCheck,
    TrendingUp,
    Clock,
    Rocket,
    HardHat,
    Search,
    Globe,
    BarChart2,
    ArrowRight
} from "lucide-react"
import servicesData from "@/data/services.json"

const iconMap: { [key: string]: any } = {
    FileText,
    Calculator,
    TrendingUp,
    Users,
    ShieldCheck,
    Clock,
    Rocket,
    HardHat,
    Search,
    Globe,
    BarChart2
}

const services = servicesData.map(service => ({
    ...service,
    icon: iconMap[service.icon]
}))

export default function HomeServices() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-secondary font-outfit">Financial Solutions Tailored To Your Success</h3>
                    <p className="text-secondary/60 text-lg">We offer a wide range of accounting services designed to provide clarity, ensure compliance, and maximize your financial potential.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl border border-border bg-white hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-secondary mb-4">{service.title}</h4>
                            <p className="text-secondary/60 mb-8 leading-relaxed">{service.desc}</p>
                            <Link href={service.href} className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
