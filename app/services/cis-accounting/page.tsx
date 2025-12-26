import { Metadata } from "next"
import {
    CheckCircle2,
    Users,
    Hammer,
    FileSpreadsheet,
    ShieldAlert,
    Briefcase,
    HelpCircle
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import companyInfo from "@/data/company-info.json"

export const metadata: Metadata = {
    title: "CIS Accounting Services | AG Accounting Solutions",
    description: "Expert CIS accounting services for contractors and subcontractors. We handle verification, monthly returns, and statements to keep you compliant with HMRC.",
    alternates: {
        canonical: '/services/cis-accounting',
    },
}

export default function CisAccountingPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="CIS Accounting"
                description="We provide an Immediate Construction Industry Scheme (CIS) tax return service, ensuring you pay the correct amount of tax in a timely manner."
                icon={<Hammer className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">

                            {/* Intro Services */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Comprehensive CIS Support</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    Whether you are the contractor or the sub-contractor, AG Accounting Solutions can help you keep your CIS affairs in order. We provide the following services:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Register you with HMRC as a contractor and/or subcontractor",
                                        "Verify your subcontractor(s) details with HMRC",
                                        "Ensure you pay your subcontractors correctly within the scheme",
                                        "Supply deduction statements to the subcontractors",
                                        "Keep your records in good order and supply HMRC with monthly returns"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <span className="text-secondary font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contractors */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit flex items-center">
                                    <Users className="w-6 h-6 mr-2 text-primary" />
                                    For Contractors
                                </h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    As a contractor, you are required to meet specific obligations under the scheme. We ensure you are up-to-date with any changes in CIS regulations. Your obligations include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-secondary/70 ml-2">
                                    <li>Registering with HM Revenue and Customs (HMRC)</li>
                                    <li>Checking whether your subcontractors are registered with HMRC</li>
                                    <li>Paying subcontractors, deducting tax and submitting monthly statements</li>
                                </ul>
                            </div>

                            {/* Subcontractors */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit flex items-center">
                                    <Hammer className="w-6 h-6 mr-2 text-primary" />
                                    For Subcontractors
                                </h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    If you are a subcontractor, your main obligation is to register with HMRC and keep them informed of any business changes (address, name, partners, etc).
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <h4 className="font-bold text-secondary mb-3">Understanding Your Status</h4>
                                    <p className="text-secondary/70 text-sm leading-relaxed mb-3">
                                        Any contractor that you work for must determine whether you are employed or Self-employed. If employed, PAYE applies.
                                    </p>
                                    <p className="text-secondary/70 text-sm leading-relaxed">
                                        If self-employed under CIS, contractors must deduct tax at <span className="font-bold text-secondary">20%</span> (or <span className="font-bold text-secondary">30%</span> for unverified subcontractors) from the labour element of your invoices.
                                    </p>
                                </div>
                            </div>

                            {/* Subcontractor Services */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Our Subcontractor Services</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl border border-border bg-white">
                                        <h4 className="font-bold text-secondary text-sm mb-1">Status Determination</h4>
                                        <p className="text-xs text-secondary/60">Determine status & register with HMRC.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-border bg-white">
                                        <h4 className="font-bold text-secondary text-sm mb-1">HMRC Verification</h4>
                                        <p className="text-xs text-secondary/60">Verify you on behalf of your contractor.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-border bg-white">
                                        <h4 className="font-bold text-secondary text-sm mb-1">Record Management</h4>
                                        <p className="text-xs text-secondary/60">Manage and organise your business records.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-border bg-white">
                                        <h4 className="font-bold text-secondary text-sm mb-1">Tax Liability/Refund</h4>
                                        <p className="text-xs text-secondary/60">Prepare year-end self-assessment returns.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">CIS Returns Service</h3>
                                <p className="text-secondary/60">We provide an Immediate CIS tax return service.</p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <FileSpreadsheet className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <p className="text-secondary font-medium text-sm">We complete your CIS tax return</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <p className="text-secondary font-medium text-sm">Inform you of tax owed or refunds due</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <ShieldAlert className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <p className="text-secondary font-medium text-sm">Ensure timely payment to avoid penalties</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 space-y-4">
                                <h4 className="text-xl font-bold flex items-center text-amber-900">
                                    <Briefcase className="w-6 h-6 mr-2 text-amber-600" />
                                    Expense Claims
                                </h4>
                                <p className="text-amber-800/80 text-sm">
                                    We educate you to understand which expenses can be claimed as a contractor working through a limited company.
                                </p>
                                <div className="bg-white/50 p-4 rounded-xl">
                                    <p className="text-amber-900 font-bold text-xs uppercase mb-1">Important Note!</p>
                                    <p className="text-amber-800/80 text-xs italic">
                                        You must keep your evidence for the expenses if in case HM Revenue and Customs ever ask you; this is usually achieved by keeping receipts.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-secondary p-8 rounded-3xl text-white space-y-4">
                                <h4 className="text-xl font-bold flex items-center">
                                    <HelpCircle className="w-6 h-6 mr-2 text-primary" />
                                    Need CIS Advice?
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Whether you need to register or file returns, our team is here to help.
                                </p>
                                <div className="space-y-3 pt-4">
                                    <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="flex items-center justify-center w-full bg-white text-secondary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">
                                        Call {companyInfo.tel}
                                    </a>
                                    <Link href="/contact" className="flex items-center justify-center w-full border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
                                        Contact Us
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Stay Compliant with CIS</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Speak to an Expert
                    </Link>
                </div>
            </section>
        </div>
    )
}
