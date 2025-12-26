import { Metadata } from "next"
import {
    CheckCircle2,
    ArrowRight,
    Building2,
    CalendarCheck
} from "lucide-react"
import Link from "next/link"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
    title: "Company Accounting Services | AG Accounting Solutions",
    description: "Professional company accounting services including annual accounts, corporation tax returns, and confirmation statements. Focus on your business while we handle the paperwork.",
    alternates: {
        canonical: '/services/company-accounting',
    },
}

export default function CompanyAccountingPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Company Accounting"
                description="We help you to concentrate more on managing your business rather trying to do all by yourself. Let us take all worry off your shoulders."
                icon={<Building2 className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            {/* Annual Accounts */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-secondary font-outfit">Annual Company Accounts</h2>
                                <p className="text-secondary/70 leading-relaxed">
                                    All company directors are required to prepare and submit Annual accounts with Companies House. We can help you and your staff by relieving you with the burden of looking after your bookkeeping and accounting needs which includes preparation of annual company accounts.
                                </p>
                                <div className="pl-6 border-l-4 border-primary/20 space-y-4">
                                    <p className="text-secondary/70 italic">
                                        Firstly, we gain a full understanding of the nature of your business by consulting the management and then tailor our services according to the need of your business. Our expert and professional staff prepare year-end financial statements as per accounting standards meeting all regulatory & statutory requirements.
                                    </p>
                                </div>
                                <div className="p-4 bg-red-50 text-red-800 rounded-xl text-sm font-medium">
                                    Failure to submit annual accounts on time will incur late filing penalties.
                                </div>
                                <p className="text-secondary/70">
                                    We use HMRC Approved Software to prepare the Annual Company Accounts.
                                </p>
                            </div>

                            {/* Annual Return */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Annual Return or Confirmation Statement</h3>
                                <p className="text-secondary/70 leading-relaxed">
                                    All companies are required to submit an annual return or confirmation statement regardless of their trading status. This is to ensure that the information held on Companies House about your company is up-to-date.
                                </p>
                                <p className="text-secondary/70 leading-relaxed">
                                    We can help you with the filing of annual return and report any changes about the company (e.g. change of address, Director details etc.) to Companies House. <span className="font-bold text-red-600">A failure to complete the annual return may result in company struck off and/or a hefty fine.</span>
                                </p>
                            </div>

                            {/* Corporation Tax */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Corporation Tax</h3>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-secondary/80 font-medium">
                                        All companies must complete a Company Tax Return as per the profits declared in the the Annual Company Accounts. We can help in preparing the corporation tax return and submit to HMRC on your behalf.
                                    </p>
                                    <div className="mt-4">
                                        <Link href="/services/tax-returns" className="text-primary font-bold hover:underline flex items-center">
                                            More information on corporation tax <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border space-y-6">
                                <h3 className="text-2xl font-bold text-secondary font-outfit">Who We Serve</h3>
                                <p className="text-secondary/60">We provide accounts preparation services to:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Individuals",
                                        "Sole traders",
                                        "Partnerships",
                                        "Limited companies of varying sizes"
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
                                    <CalendarCheck className="w-6 h-6 mr-2 text-primary" />
                                    Never Miss a Deadline
                                </h4>
                                <p className="text-white/70 text-sm">
                                    We stay on top of all your statutory deadlines so you don't have to worry about penalties or fines.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact" className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                        Schedule a Chat
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
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">We are here to help you with your <br /> day-to-day paperwork</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Contact Us Now
                    </Link>
                </div>
            </section>
        </div>
    )
}
