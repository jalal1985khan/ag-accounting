import React from "react"
import { Shield, ExternalLink, FileText, AlertCircle, History, Calculator } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Useful Tax Links & Resources | AG Accounting",
    description: "Curated list of official HMRC tax calculators, rates, and guidance for businesses and individuals.",
    alternates: {
        canonical: '/resources/useful-links',
    },
}

const links = [
    {
        title: "Tax Rate & Allowances for current tax year",
        href: "https://www.gov.uk/income-tax-rates",
        icon: <Calculator className="w-6 h-6" />,
        description: "Check current Income Tax rates and Personal Allowances."
    },
    {
        title: "Tax Rate & Allowances for previous tax years",
        href: "https://www.gov.uk/income-tax-rates/previous-tax-years",
        icon: <History className="w-6 h-6" />,
        description: "View historical tax rates and allowances."
    },
    {
        title: "Rates and Allowances: National Insurance Contributions",
        href: "https://www.gov.uk/government/publications/rates-and-allowances-national-insurance-contributions",
        icon: <Shield className="w-6 h-6" />,
        description: "Details on National Insurance contribution rates and thresholds."
    },
    {
        title: "Information on Tax Codes",
        href: "https://www.gov.uk/tax-codes",
        icon: <FileText className="w-6 h-6" />,
        description: "Understand what your tax code means and how it's calculated."
    },
    {
        title: "Claim a tax refund",
        href: "https://www.gov.uk/claim-tax-refund",
        icon: <ExternalLink className="w-6 h-6" />,
        description: "Find out how to claim a refund if you've paid too much tax."
    },
    {
        title: "If you cannot pay your tax bill on time",
        href: "https://www.gov.uk/difficult-to-pay-your-tax-bill",
        icon: <AlertCircle className="w-6 h-6" />,
        description: "Guidance and support if you're having trouble paying your tax bill."
    }
]

export default function UsefulLinksPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-muted py-20 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6 shadow-xl shadow-primary/20">
                        <ExternalLink className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-secondary mb-4">Useful Links</h1>
                    <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
                        A curated list of important government resources to help you stay informed about taxes and HMRC regulations.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-8 rounded-3xl border border-border bg-muted/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="p-4 bg-white rounded-2xl border border-border group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors mb-6 text-primary">
                                    {link.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors flex items-center">
                                    {link.title}
                                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-secondary/60 leading-relaxed">
                                    {link.description}
                                </p>
                            </a>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-16 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
                        <p className="text-yellow-800 text-sm">
                            <strong>Note:</strong> These links direct you to official GOV.UK websites. AG Accounting Solutions is not responsible for the content of external sites.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
