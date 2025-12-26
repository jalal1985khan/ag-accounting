"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Info, CheckCircle2, RefreshCw, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function TaxCalculator() {
    const [income, setIncome] = useState<number>(0)
    const [personalAllowance] = useState<number>(12570)

    // Basic UK Tax bands (2024/25 placeholder)
    const calculateTax = () => {
        let taxable = Math.max(0, income - personalAllowance)
        let tax = 0

        if (taxable > 0) {
            if (taxable <= 37700) {
                tax = taxable * 0.2
            } else if (taxable <= 125140) {
                tax = (37700 * 0.2) + ((taxable - 37700) * 0.4)
            } else {
                tax = (37700 * 0.2) + ((125140 - 37700) * 0.4) + ((taxable - 125140) * 0.45)
            }
        }

        return {
            tax: Math.round(tax),
            takeHome: Math.round(income - tax),
            allowance: personalAllowance
        }
    }

    const result = calculateTax()

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-muted py-24 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-3xl mb-8 shadow-xl shadow-primary/20">
                        <Calculator className="w-10 h-10" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-secondary mb-6">Income Tax <span className="text-primary italic">Calculator.</span></h1>
                    <p className="text-xl text-secondary/60 max-w-3xl mx-auto leading-relaxed">
                        Get an instant estimation of your take-home pay for the current tax year. Please note this is for guidance only.
                    </p>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Inputs */}
                        <div className="space-y-8 bg-muted p-10 rounded-[40px] border border-border">
                            <h3 className="text-2xl font-bold text-secondary font-outfit mb-4">Estimate Your Tax</h3>
                            <div className="space-y-4">
                                <label className="text-sm font-bold text-secondary/60 uppercase tracking-widest">Annual Gross Income (£)</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-secondary/30">£</span>
                                    <input
                                        type="number"
                                        value={income || ""}
                                        onChange={(e) => setIncome(Number(e.target.value))}
                                        placeholder="0"
                                        className="w-full bg-white border-2 border-border rounded-2xl pl-12 pr-6 py-6 text-2xl font-bold text-secondary focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-white rounded-2xl border border-border">
                                <div className="flex items-start space-x-4">
                                    <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div className="text-sm text-secondary/60">
                                        <p className="font-bold text-secondary mb-1">Standard Personal Allowance</p>
                                        <p>The standard Personal Allowance for the 2024/25 tax year is £12,570. This is the amount of income you do not have to pay tax on.</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIncome(0)}
                                className="flex items-center text-secondary/50 font-bold hover:text-secondary transition-colors"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" /> Reset Values
                            </button>
                        </div>

                        {/* Results */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-secondary font-outfit">Your Breakdown</h3>

                            <div className="grid gap-4">
                                <div className="bg-secondary p-8 rounded-3xl text-white relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Estimated Take Home (Annual)</p>
                                        <p className="text-6xl font-bold font-outfit text-primary">£{result.takeHome.toLocaleString()}</p>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-3xl border border-border">
                                        <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest mb-1">Tax To Pay</p>
                                        <p className="text-2xl font-bold text-secondary font-outfit">£{result.tax.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl border border-border">
                                        <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest mb-1">Tax-Free Allowance</p>
                                        <p className="text-2xl font-bold text-secondary font-outfit">£{result.allowance.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-secondary">Why accurate tax planning matters?</h4>
                                <div className="space-y-4">
                                    {[
                                        "Avoid unexpected HMRC penalties",
                                        "Identify dividend vs salary optimizations",
                                        "Manage cash flow more effectively",
                                        "Maximize legitimate business expenses"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-secondary/70 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Link href="/contact" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all inline-block">
                                        Book a Detailed Tax Review
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Official Calculators Section */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-secondary font-outfit mb-6">Official HMRC Calculators</h2>
                        <p className="text-secondary/60 text-lg">
                            For more specific and complex tax calculations, use these official government tools to ensure complete accuracy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Company Car Tax",
                                href: "http://cccfcalculator.hmrc.gov.uk/CCF0.aspx",
                                desc: "Calculate tax on employees' company cars."
                            },
                            {
                                title: "PAYE Tax Calculator",
                                href: "http://payecalculator.hmrc.gov.uk/PAYE0.aspx",
                                desc: "Check your payroll calculations."
                            },
                            {
                                title: "Stamp Duty Land Tax",
                                href: "https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro",
                                desc: "Calculate SDLT on property purchases."
                            },
                            {
                                title: "National Insurance",
                                href: "http://nicecalculator.hmrc.gov.uk/Class1NICs1.aspx",
                                desc: "Work out National Insurance contributions."
                            },
                            {
                                title: "Maternity & Paternity Pay",
                                href: "https://www.gov.uk/maternity-paternity-calculator",
                                desc: "Calculate statutory leave and pay for parents."
                            },
                            {
                                title: "Statutory Sick Pay",
                                href: "https://www.gov.uk/calculate-statutory-sick-pay",
                                desc: "Calculate employee Statutory Sick Pay."
                            },
                            {
                                title: "Tax Credits",
                                href: "https://www.gov.uk/tax-credits-calculator",
                                desc: "Estimate your potential benefit entitlements."
                            }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-8 rounded-3xl border border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-secondary/30 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-secondary/60 text-sm leading-relaxed">{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
