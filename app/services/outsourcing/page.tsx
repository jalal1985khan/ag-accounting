import { Metadata } from "next"
import {
    ArrowRight,
    Globe
} from "lucide-react"
import Link from "next/link"
import companyInfo from "@/data/company-info.json"

import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
    title: "Financial Outsourcing Services | AG Accounting Solutions",
    description: "Streamline your business operations with our financial outsourcing solutions. We handle payroll, bookkeeping, and management accounts to reduce your overheads.",
    alternates: {
        canonical: '/services/outsourcing',
    },
}

export default function OutsourcingPage() {
    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Outsourcing"
                description="Streamline your operations with our financial outsourcing solutions."
                icon={<Globe className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2940"
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">Efficient & Cost-Effective</h2>
                            <p className="text-secondary/70 leading-relaxed text-lg">
                                outsourcing your finance function can significantly reduce overheads and improve efficiency. We handle everything from payroll and bookkeeping to management accounts.
                            </p>
                            <p className="text-secondary/70 leading-relaxed">
                                Detailed service packages will be listed here soon. Contact us to discuss your specific outsourcing requirements.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform text-lg">
                                Discuss Your Needs <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="bg-muted p-12 rounded-[40px] text-center">
                            <h3 className="text-2xl font-bold text-secondary font-outfit mb-4">Reduce Your Overheads</h3>
                            <p className="text-secondary/60 mb-8">Let us handle the numbers while you grow the business.</p>
                            <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl">
                                Call {companyInfo.tel}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
