import React from "react"
import {
    CheckCircle2,
    ArrowRight,
    HelpCircle,
    FileText,
    Calculator,
    ShieldCheck,
    TrendingUp,
    Clock,
    Briefcase,
    Smartphone,
    PieChart,
    CloudCog
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Professional Bookkeeping Services | AG Accounting",
    description: "Focus on your business while we handle your books. Expert bookkeeping services in Slough with cloud solutions and compliance support.",
    alternates: {
        canonical: '/services/bookkeeping',
    },
}

export default function BookkeepingPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Bookkeeping"
                description="If you are looking to save time & cost and give more time to grow your business further then we can help you achieve that."
                icon={<Clock className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Focus on Core Business */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Focus on your business, not the books</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    We can relieve you and your staff with the burden of bookkeeping so that you can concentrate on the core areas of your business. We will take care of all the bookkeeping and accounting needs of your business.
                                </p>
                            </div>

                            {/* Cloud Solutions */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Modern Cloud Solutions</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    As a part of the service, we will look to improve the efficiency of you business by introducing the cloud based software and apps which will help you avoid any manual errors and improves sustainability.
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start space-x-4">
                                    <CloudCog className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-secondary/80 font-medium">
                                        We will setup your business on a secure cloud system which can assist you manage your business more efficiently with real-time data.
                                    </p>
                                </div>
                            </div>

                            {/* Expert Support */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Expert Compliance</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    Our well trained and qualified bookkeepers will liaise with you regularly and flag any issues in timely manner. They will provide you with the advice to mitigate any risk and solutions to the issues to avoid any fines or penalties.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Key Benefits</h3>
                                <p className="text-secondary/60">Switching to our bookkeeping service provides:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Mobile access at any time",
                                        "Reduce manual paperwork",
                                        "Better control on the financial processes",
                                        "Provides valuable insight of your business",
                                        "Improved decision making",
                                        "Improved accuracy"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <span className="text-secondary font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-secondary p-8 rounded-3xl text-white space-y-4">
                                <h4 className="text-xl font-bold flex items-center">
                                    <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                                    Growth Focused
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Real-time data means better decisions. Start growing your business with accurate financial insights today.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact" className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                        Get Your Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-secondary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to automate your bookkeeping?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    )
}
