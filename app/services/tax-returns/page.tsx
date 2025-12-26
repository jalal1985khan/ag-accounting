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
    Briefcase
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Expert Tax Return Services | AG Accounting",
    description: "Professional tax return preparation and submission services for individuals, partnerships, and corporations in Slough.",
    alternates: {
        canonical: '/services/tax-returns',
    },
}

export default function TaxReturnsPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Tax Returns"
                description="We help our clients to prepare and submit tax returns and meet all deadlines especially in regards to statutory requirements."
                icon={<FileText className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Individual & Partnership */}
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Individual & Partnership Tax Returns</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    As a self-employed person or a director or sole trader, you are required to complete a Self-Assessment Tax Returns (SA100) and send to HMRC as per their submission guidelines. Failure to submit it on time will incur penalties and interest payments.
                                </p>
                                <p className="text-secondary/70 leading-relaxed">
                                    Partnerships are required to submit Self Assessment: Partnership Tax Return (SA800).
                                </p>
                            </div>

                            {/* Corporation Tax */}
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Corporation Tax Returns</h2>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-secondary/80 italic font-medium">
                                        Directors of Limited Companies are required to submit an Annual Return to the Registrar of Companies every year. Late filings penalties would be payable if these are not submitted on time.
                                    </p>
                                </div>
                                <p className="text-secondary/70 leading-relaxed">
                                    Companies are required to complete a Corporation Tax Returns (CT600). Corporation tax is the liability of corporations/companies on the profits made during the one-year period typically.
                                </p>
                            </div>
                        </div>

                        {/* Features & Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Why Choose AG Accounting?</h3>
                                <p className="text-secondary/60">We offer our clients a fully compliant service tailored according to their business needs which includes:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Effective tax planning for both individuals and companies",
                                        "Tax compliance and liaison with HMRC on your behalf",
                                        "Optimum utilisation of tax reliefs for individuals and companies"
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
                                    <HelpCircle className="w-6 h-6 mr-2 text-primary" />
                                    Areas We Serve
                                </h4>
                                <p className="text-white/70 text-sm">
                                    We offer services to all local businesses covering areas such as:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Slough", "Windsor", "Maidenhead", "Reading", "Greater London"].map((area, i) => (
                                        <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">{area}</span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <Link href="/contact" className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                        Book Consultation
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to simplify your Tax Returns?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Let's Get Started
                    </Link>
                </div>
            </section>
        </div>
    )
}
