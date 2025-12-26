import { Metadata } from "next"
import {
    CheckCircle2,
    HelpCircle,
    ShieldCheck
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import companyInfo from "@/data/company-info.json"

export const metadata: Metadata = {
    title: "VAT Accounting Services | AG Accounting Solutions",
    description: "Comprehensive VAT accounting services including registration, returns, and advice on schemes like Flat Rate and Cash Accounting.",
    alternates: {
        canonical: '/services/vat-accounting',
    },
}

export default function VatAccountingPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="VAT Accounting"
                description="Navigate the complexities of Value Added Tax with confidence. We ensure full compliance and help you choose the right schemes for your business."
                icon={<ShieldCheck className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* What is VAT */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">What is VAT?</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    Also known as Value Added Tax, it is a type of consumption tax which is added to the purchases of goods or services and other “taxable supplies”.
                                </p>
                                <p className="text-secondary/70 leading-relaxed">
                                    As a VAT registered business, you are required to add 20% to the selling price of your goods or services. However, VAT rates varies depending on the type of business e.g food items are zero-rated and no VAT is charged on food items.
                                </p>
                            </div>

                            {/* When to Register */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">When do I need to register for VAT?</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    A business must register for VAT, if the turnover has reached £85,000 (2019-20) in last 12 month period or business is expecting the turnover to reach £85,000 in next 30 days period.
                                </p>

                                {/* Thresholds Table */}
                                <div className="border border-border rounded-xl overflow-hidden mt-6">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-muted text-secondary font-bold">
                                            <tr>
                                                <th className="px-6 py-4">Circumstance</th>
                                                <th className="px-6 py-4">Threshold</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-secondary/80">VAT registration</td>
                                                <td className="px-6 py-4 text-secondary font-semibold">More than £85,000</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-secondary/80">Registration for distance selling into the UK</td>
                                                <td className="px-6 py-4 text-secondary font-semibold">More than £70,000</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-secondary/80">Registration for bringing goods into the UK from the EU</td>
                                                <td className="px-6 py-4 text-secondary font-semibold">More than £85,000</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-secondary/80">De-registration threshold</td>
                                                <td className="px-6 py-4 text-secondary font-semibold">Less than £83,000</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-secondary/80">Completing simplified EC Sales List</td>
                                                <td className="px-6 py-4 text-secondary font-semibold">£106,500 or less and supplies to EU countries of £11,000 or less</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Who needs to register & Schemes */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Who needs to register for VAT?</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    Any business (Sole Trader or Limited Company) that exceeds the threshold for VAT must register for a VAT Accounting Scheme. However, you may register for VAT even if you do not reach the threshold.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                                        <a href="https://www.gov.uk/vat-annual-accounting-scheme" target="_blank" rel="noopener noreferrer" className="block h-full hover:opacity-80 transition-opacity">
                                            <h4 className="font-bold text-secondary mb-1">Annual Accounting Scheme</h4>
                                        </a>
                                    </div>
                                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                        <a href="https://www.gov.uk/vat-cash-accounting-scheme" target="_blank" rel="noopener noreferrer" className="block h-full hover:opacity-80 transition-opacity">
                                            <h4 className="font-bold text-secondary mb-1">Cash Accounting Scheme</h4>
                                        </a>
                                    </div>
                                    <div className="p-4 rounded-xl bg-green-50 border border-green-100 sm:col-span-2">
                                        <a href="https://www.gov.uk/vat-flat-rate-scheme" target="_blank" rel="noopener noreferrer" className="block h-full hover:opacity-80 transition-opacity">
                                            <h4 className="font-bold text-secondary mb-1">Flat Rate Scheme</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">How We Help</h3>
                                <p className="text-secondary/60">We help our clients to register and prepare & submit VAT Returns as well as we advise them in the rule and regulations relating to the VAT.</p>
                                <ul className="space-y-4">
                                    {[
                                        "VAT Registration",
                                        "VAT Bookkeeping",
                                        "Appropriate VAT Accounting Scheme",
                                        "Prepare & Submit Quarterly VAT Returns",
                                        "VAT Planning & Advice",
                                        "Dealing with HMRC for any matters",
                                        "Use of best Making Tax Digital (MTD) Software"
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
                                    Have Questions?
                                </h4>
                                <p className="text-white/70 text-sm">
                                    For more information on VAT Accounting, please contact us.
                                </p>
                                <div className="space-y-3 pt-4">
                                    <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="flex items-center justify-center w-full bg-white text-secondary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">
                                        Call {companyInfo.tel}
                                    </a>
                                    <Link href="/contact" className="flex items-center justify-center w-full border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
                                        Use Contact Form
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to streamline your VAT?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    )
}
