import { Metadata } from "next"
import {
    CheckCircle2,
    Rocket,
    Building2,
    Briefcase,
    Lightbulb,
    Mail,
    CreditCard
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"
import companyInfo from "@/data/company-info.json"

export const metadata: Metadata = {
    title: "Start-up Business Services | AG Accounting Solutions",
    description: "Launch your business with confidence. We offer company formation, business plans, and strategic advice for start-ups in Slough and beyond.",
    alternates: {
        canonical: '/services/start-up-business',
    },
}

export default function StartupBusinessPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Start-up Business"
                description="If you are thinking to start-up a new business then we can be of great help. Our team of experienced and professional staff will guide you every step of the way."
                icon={<Rocket className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Launch Your Business with Confidence</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    We advise our clients the best possible route to start with; either as a limited company or sole trader or partnership. Making the right structural decision early on can save significant time and money in the future.
                                </p>
                            </div>

                            {/* Start-up Business Plans */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Start-up Business Plans</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    We can help you prepare business plans which will be tailored to your business needs and will help you secure the funding to start or grow your business.
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-secondary/80 font-medium mb-4">
                                        Strategic Growth & Control
                                    </p>
                                    <p className="text-secondary/70 leading-relaxed text-sm">
                                        We can help you design a organisational structure which will help you control your business and its finances more efficiently whilst minimising the costs. We can also provide you and your business with different marketing tools which will increase the presence of your business in wider areas around UK.
                                    </p>
                                </div>
                            </div>

                            {/* Additional Services Grid */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Comprehensive Start-up Support</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-xl">
                                        <Building2 className="w-5 h-5 text-primary mt-1" />
                                        <span className="text-sm font-medium text-secondary">Company Formation & Incorporation</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-xl">
                                        <Briefcase className="w-5 h-5 text-primary mt-1" />
                                        <span className="text-sm font-medium text-secondary">Registration for Self-Employment/Partnership</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-xl">
                                        <CreditCard className="w-5 h-5 text-primary mt-1" />
                                        <span className="text-sm font-medium text-secondary">Business Bank Account Setup</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-xl">
                                        <Mail className="w-5 h-5 text-primary mt-1" />
                                        <span className="text-sm font-medium text-secondary">Company Emails & Business Cards</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">What We Include</h3>
                                <p className="text-secondary/60">Our start-up services cover everything you need:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Company Formation & Incorporation",
                                        "Self-Employment/Partnership Registration",
                                        "Business Bank Account assistance",
                                        "Payroll procedures setup",
                                        "Business cards & Company emails",
                                        "Flyers & advertising material",
                                        "Day to day support",
                                        "Search for new markets",
                                        "Reach diverse UK communities"
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
                                    <Lightbulb className="w-6 h-6 mr-2 text-primary" />
                                    Turn Your Idea Into Reality
                                </h4>
                                <p className="text-white/70 text-sm">
                                    From funding to marketing, we provide the tools to build a successful business foundation.
                                </p>
                                <div className="space-y-3 pt-4">
                                    <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="flex items-center justify-center w-full bg-white text-secondary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">
                                        Call {companyInfo.tel}
                                    </a>
                                    <Link href="/contact" className="flex items-center justify-center w-full border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to start your journey?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Get Started Today
                    </Link>
                </div>
            </section>
        </div>
    )
}
