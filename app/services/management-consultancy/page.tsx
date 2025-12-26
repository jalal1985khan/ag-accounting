import { Metadata } from "next"
import {
    ArrowRight,
    BarChart2
} from "lucide-react"
import Link from "next/link"
import companyInfo from "@/data/company-info.json"

import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
    title: "Management Consultancy | AG Accounting Solutions",
    description: "Strategic business advice and data-driven insights to help you make informed decisions and improve your business performance.",
    alternates: {
        canonical: '/services/management-consultancy',
    },
}

export default function ManagementConsultancyPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Management Consultancy"
                description="Data-driven insights to drive your business forward."
                icon={<BarChart2 className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">Strategic Business Advice</h2>
                            <p className="text-secondary/70 leading-relaxed text-lg">
                                Our management consultancy services provide you with the strategic advice and analysis you need to make informed decisions and improve business performance.
                            </p>
                            <p className="text-secondary/70 leading-relaxed">
                                We are finalizing the details of our consultancy packages. Please reach out to arrange a confidential discussion about your business goals.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform text-lg">
                                Schedule a Meeting <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="bg-secondary p-12 rounded-[40px] text-center text-white">
                            <h3 className="text-2xl font-bold font-outfit mb-4">Unlock Your Potential</h3>
                            <p className="text-white/60 mb-8">Expert advice is just a phone call away.</p>
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
