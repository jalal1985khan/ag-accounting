import { Metadata } from "next"
import {
    ArrowRight,
    Search
} from "lucide-react"
import Link from "next/link"
import companyInfo from "@/data/company-info.json"

import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
    title: "Tax Investigations Advice | AG Accounting Solutions",
    description: "Expert tax investigation advice and representation. Don't face HMRC alone—our specialists are here to help you get the best outcome.",
    alternates: {
        canonical: '/services/tax-investigations-advice',
    },
}

export default function TaxInvestigationsPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Tax Investigations"
                description="Professional representation and advice for HMRC enquiries."
                icon={<Search className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">Don't Face HMRC Alone</h2>
                            <p className="text-secondary/70 leading-relaxed text-lg">
                                Tax investigations can be stressful and complex. We offer expert advice and representation to help you navigate the process and achieve the best possible outcome.
                            </p>
                            <p className="text-secondary/70 leading-relaxed">
                                Full details of our tax investigation service will be available here shortly. In the meantime, please contact us immediately if you have received an enquiry letter.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform text-lg">
                                Contact Our Team <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="bg-secondary p-12 rounded-[40px] text-center text-white">
                            <h3 className="text-2xl font-bold font-outfit mb-4">Urgent Advice Needed?</h3>
                            <p className="text-white/60 mb-8">Speak to one of our tax experts today.</p>
                            <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="inline-block bg-white text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-xl">
                                Call {companyInfo.tel}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
