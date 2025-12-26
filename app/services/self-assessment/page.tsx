import { Metadata } from "next"
import {
    CheckCircle2,
    HelpCircle,
    Calculator,
    ExternalLink
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
    title: "Self Assessment Tax Return Services | AG Accounting",
    description: "Expert help with Self Assessment tax returns for sole traders, directors, and self-employed individuals. Ensure compliance and correct tax calculation.",
    alternates: {
        canonical: '/services/self-assessment',
    },
}

export default function SelfAssessmentPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Self Assessment"
                description="We help all our clients who are sole traders, directors or self-employed to complete a Self Assessment Tax Return meeting all regulatory and statutory requirements."
                icon={<Calculator className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Intro & Link */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Who needs to submit self assessment?</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    Self Assessment is a system HM Revenue and Customs (HMRC) uses to collect Income Tax. Tax is usually deducted automatically from wages, pensions and savings. People and businesses with other income must report it in a tax return.
                                </p>
                                <a
                                    href="https://www.gov.uk/check-if-you-need-tax-return"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary font-bold hover:underline"
                                >
                                    Check if you need to send a tax return <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>

                            {/* Registration & Software */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">HMRC Registration & Returns</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    We can help you to register with HMRC for Self Assessment to acquire a Unique Tax Reference (UTR) number.
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-secondary/80 font-medium">
                                        We only use HMRC Approved software to complete and file your tax return online and calculate the tax liability after claiming all available tax reliefs. We will liaise with you on the amounts to be paid when they are due.
                                    </p>
                                </div>
                            </div>

                            {/* Analysis & Compliance */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Comprehensive Analysis</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    As a part of the service, we will analyse your business’ income and expenses to establish any tax savings that can be made prior to submitting the tax returns. Also, we will perform a compliance check on the data in your tax return before submission to remove any errors or anomalies.
                                </p>
                            </div>
                        </div>

                        {/* Features & Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Compliance & Advisory</h3>
                                <p className="text-secondary/60">We also provide compliance and advisory services to the following areas:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Inheritance tax",
                                        "Capital Gains tax",
                                        "Property Business profits",
                                        "Self-employment and benefits in kind",
                                        "Employment income and national insurance contributions"
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
                                    Need Assistance?
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Unsure about your Self Assessment obligations? Our expert team is here to help you navigate through the process.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact" className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                        Contact Us Today
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Let us handle your Self Assessment</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}
