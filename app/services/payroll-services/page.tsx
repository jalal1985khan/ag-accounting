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
    Users,
    Banknote
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Payroll Services & Management | AG Accounting",
    description: "Comprehensive payroll management services in Slough. PAYE registration, payslips, year-end filing, and compliance support.",
    alternates: {
        canonical: '/services/payroll-services',
    },
}

export default function PayrollServicesPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Payroll Services"
                description="We have expert colleagues to assist our clients with all payroll matters, ensuring your employees are paid correctly and on time."
                icon={<Users className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Intro */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Comprehensive Payroll Management</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    AG Accounting Solutions help you to calculating and distributing wages, salaries, and withholdings to employees and certain agencies.
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-secondary/80 font-medium">
                                        We have expert colleagues to assist our clients with all payroll matters including Employer PAYE registration, running of weekly/monthly payroll including tax and national insurance calculations and production of payslips, P45, P60 together with all year end filing requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Payroll Accounting */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Payroll Accounting</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    Payroll Accounting is the function of calculating and distributing wages, salaries, and withholdings to employees and certain agencies. It is generally done through different documents such as time sheets, paychecks, and a payroll ledger.
                                </p>
                                <p className="text-secondary/70 leading-relaxed">
                                    Payroll Accounting also involves the process of issuing reports to upper management, so that they are able to make informed decisions about the company’s labor-cost data.
                                </p>
                            </div>

                            {/* Payroll Accounts */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Payroll Accounts</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    We manage the various payroll basic accounts that are used in association with accounting payroll entries, ensuring accurate tracking of all labor-related expenses and liabilities.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">What We Include</h3>
                                <p className="text-secondary/60">Our comprehensive payroll service covers:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Employer PAYE registration",
                                        "Weekly/Monthly payroll runs",
                                        "Tax and National Insurance calculations",
                                        "Production of Payslips",
                                        "P45 & P60 generation",
                                        "Year-end filing requirements"
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
                                    <Banknote className="w-6 h-6 mr-2 text-primary" />
                                    Streamline Your Pay Run
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Avoid the stress of RTI submissions and compliance. Let our experts handle your entire payroll process.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact" className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                        Get a Quote
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to simplify your Payroll?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    )
}
