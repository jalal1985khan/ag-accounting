"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, ArrowRight, TrendingUp } from "lucide-react"

export default function HomeHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#fafafa]">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Certified Chartered Accountants</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-secondary leading-tight">
                        Expert Accounting <br />
                        <span className="text-primary italic">Designed for Growth.</span>
                    </h1>
                    <p className="text-lg text-secondary/70 max-w-lg leading-relaxed">
                        We provide professional accounting and tax consultancy services tailored to your unique business needs. Let us handle the numbers so you can focus on building your legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/services/tax-returns" className="bg-white text-secondary border-2 border-border px-10 py-5 rounded-full font-bold text-lg hover:border-primary transition-all flex items-center justify-center">
                            Our Services
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
                            alt="Accounting Dashboard"
                            width={1000}
                            height={667}
                            priority
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-secondary/50 font-bold uppercase">Accuracy</p>
                                <p className="text-xl font-bold text-secondary">99.9% Verified</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        </section>
    )
}
