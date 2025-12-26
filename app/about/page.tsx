import React from "react"
import { Users, Target, Award, Heart, Shield, CheckCircle } from "lucide-react"
import companyInfo from "@/data/company-info.json"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | AG Accounting Solutions",
    description: "Learn about AG Accounting Solutions, a team of expert chartered accountants in Slough with over 15 years of experience helping businesses grow.",
    alternates: {
        canonical: '/about',
    },
}

const values = [
    {
        title: "Client-Centric",
        desc: "Your success is our priority. We tailor every solution to fit your specific needs.",
        icon: Users
    },
    {
        title: "Expertise",
        desc: "Our team consists of highly qualified chartered accountants with years of industry experience.",
        icon: Award
    },
    {
        title: "Integrity",
        desc: "We maintain the highest professional standards of ethics and transparency.",
        icon: Shield
    },
    {
        title: "Innovation",
        desc: "We leverage the latest financial technologies to provide efficient and accurate results.",
        icon: Target
    }
]

export default function About() {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="bg-secondary py-24 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit mb-8">About <span className="text-primary italic">AG Accounting.</span></h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Serving our clients with excellence for over 15 years, we have built a reputation as one of the most trusted accounting firms in the region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm">About Us</h2>
                        <h3 className="text-4xl font-bold text-secondary font-outfit">Quality Accountants & Business Advisors</h3>
                        <p className="text-lg text-secondary/70 leading-relaxed">
                            We are a team of qualified accountants and business advisors and we ensure that our clients’ organisation profits are maximised while meeting all regulatory and statutory obligations.
                        </p>
                        <p className="text-lg text-secondary/70 leading-relaxed">
                            Our team of practitioners have come from diverse backgrounds and have many years of experience working in the industry while maintaining knowledge and experience of latest rules, regulations and relevant standards.
                        </p>
                        <p className="text-lg text-secondary/70 leading-relaxed">
                            Our team work hard to deliver cost-effective, safe and practical solutions for the client’s business needs. Our objective is to establish long-standing trusted relationships and it can be further strengthened by thoroughly understanding client’s organisation. Our partnership will empower client’s organisation to move forward with confidence and realise its full potential.
                        </p>
                        <div className="space-y-4">
                            {[
                                "99% Client Retention Rate",
                                "Transparent Communication",
                                "Growing on Client Referrals",
                                "Expert Business Advisory"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-secondary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                            alt="Our Team"
                            width={1000}
                            height={667}
                            className="rounded-3xl shadow-2xl"
                        />
                        <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-border">
                            <p className="text-primary font-bold text-4xl mb-1">99%</p>
                            <p className="text-secondary/60 text-xs font-bold uppercase">Retention Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey & Communication */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-secondary font-outfit">Our Journey</h3>
                            <p className="text-secondary/70 leading-relaxed">
                                We started our journey with handful of clients but we take pride in our client-focused approach and friendly service that our business is now growing on client referrals. We believe that existing client’s recommendations to new potential clients reflects our commitment towards our clients. As a result, it reflects in our 99% client retention rate.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-secondary font-outfit">Our Philosophy</h3>
                            <p className="text-secondary/70 leading-relaxed">
                                We believe in having a transparent communication with all our clients. It is very important to us that we advise our clients honestly and make them aware of any situation in timely manner and offer suitable solutions. We encourage regular meetings & discussions to all our clients. Meetings and discussions create an environment which allows us to identify opportunities for client’s business growth, profit and efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Regions */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <h2 className="text-4xl font-bold text-secondary font-outfit">Local Expertise, Professional Reach</h2>
                        <p className="text-xl text-secondary/70">
                            We offer services to all local businesses covering areas such as Slough, Windsor, Maidenhead, Reading and Greater London.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-secondary p-12 rounded-[40px] text-white space-y-6 shadow-2xl">
                            <h4 className="text-2xl font-bold">Sectors We Serve</h4>
                            <p className="text-white/70">
                                We offer quality services to limited companies, sole traders, partnerships and self-employed individuals in various different sectors including:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Transport", "Property", "Construction", "Retail", "Medical", "Service Sectors"].map((sector, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="font-medium">{sector}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary p-12 rounded-[40px] text-white space-y-6 shadow-2xl">
                            <h4 className="text-2xl font-bold">Our Promise</h4>
                            <p className="text-white/90 leading-relaxed">
                                We provide free initial consultation where potential clients are empowered to choose the right level of service based on the needs of their organisation in their own time. We always deliver on our promise; first and every time and we can guarantee that you will find great satisfaction in our friendly, flexible, professional and a simple approach.
                            </p>
                            <p className="font-bold text-lg pt-4 border-t border-white/20">
                                Competitive fees with no hidden charges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-12 lg:p-20 rounded-[40px] shadow-sm border border-border">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-secondary font-outfit mb-6">{companyInfo.name}</h3>
                                <div className="space-y-4">
                                    <p className="flex items-start space-x-4">
                                        <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-secondary/70">{companyInfo.address}</span>
                                    </p>

                                    <p className="flex items-center space-x-4">
                                        <Target className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-secondary/70">Tel: {companyInfo.tel}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <Heart className="w-16 h-16 text-primary mb-6 ml-auto" />
                                <h4 className="text-2xl font-bold text-secondary font-outfit">Empowering Your Growth</h4>
                                <p className="text-secondary/60 mt-2">Trusted by hundreds of local businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
