"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from "lucide-react"
import companyInfo from "@/data/company-info.json"

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-secondary py-24 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit mb-8">Get In <span className="text-primary italic">Touch.</span></h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Whether you have a question about tax returns, business strategy, or our pricing, our team is ready to help you navigate your financial journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-secondary font-outfit mb-8">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-secondary/50 font-bold uppercase tracking-widest">Call Us</p>
                                            <p className="text-lg font-bold text-secondary">{companyInfo.tel}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-secondary/50 font-bold uppercase tracking-widest">Email Us</p>
                                            <p className="text-lg font-bold text-secondary">{companyInfo.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-secondary/50 font-bold uppercase tracking-widest">Visit Us</p>
                                            <p className="text-lg font-bold text-secondary leading-tight">{companyInfo.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted p-8 rounded-3xl border border-border">
                                <h4 className="text-lg font-bold text-secondary mb-4 flex items-center">
                                    <Clock className="w-5 h-5 mr-3 text-primary" />
                                    Business Hours
                                </h4>
                                <div className="space-y-2 text-sm text-secondary/70">
                                    <div className="flex justify-between">
                                        <span>Monday — Friday</span>
                                        <span className="font-bold">9:00 AM — 5:30 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-bold">By Appointment</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-bold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 lg:p-12 rounded-[40px] border border-border shadow-2xl shadow-secondary/5">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-secondary">Message Sent!</h3>
                                        <p className="text-secondary/60 max-w-sm mx-auto">Thank you for reaching out. One of our experts will get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-primary font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest px-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full bg-muted border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest px-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full bg-muted border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest px-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+44 0000 000000"
                                                    className="w-full bg-muted border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest px-1">Subject</label>
                                                <select className="w-full bg-muted border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                                    <option>Tax Return Inquiry</option>
                                                    <option>Company Accounting</option>
                                                    <option>Bookkeeping Services</option>
                                                    <option>Other / General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest px-1">Your Message</label>
                                            <textarea
                                                rows={5}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full bg-muted border border-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center shadow-lg shadow-primary/20"
                                        >
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-muted relative">
                <iframe
                    src={companyInfo.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AG Accounting Location"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                />
            </section>
        </div>
    )
}
