import { Metadata } from "next"
import {
    CheckCircle2,
    ArrowRight,
    HelpCircle,
    FileText,
    Calculator,
    Briefcase
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData: Record<string, any> = {
    "tax-returns": {
        title: "Tax Returns",
        icon: FileText,
        desc: "Navigate the complexities of personal and business taxation with ease. Our experts ensure accurate filings and strategic planning to optimize your tax position.",
        features: [
            "Annual Tax Return Preparation",
            "Corporate Tax Compliance",
            "Strategic Tax Planning",
            "Capital Gains Tax Advice",
            "Inheritance Tax Guidance",
            "HMRC Correspondence Management"
        ],
        detailed: "Filing tax returns can be a daunting task, filled with complex regulations and strict deadlines. AG Accounting provides a comprehensive service that takes the stress out of your annual filings. We don't just fill in forms; we analyze your financial situation to identify legitimate tax-saving opportunities and ensuring you never pay more than necessary."
    },
    "self-assessment": {
        title: "Self Assessment",
        icon: Calculator,
        desc: "Professional support for self-employed individuals, freelancers, and directors. We handle the paperwork so you can focus on your craft.",
        features: [
            "Registration with HMRC",
            "Calculation of Tax Liabilities",
            "Filing of Returns",
            "Advice on Record Keeping",
            "Payment Reminders",
            "National Insurance Guidance"
        ],
        detailed: "If you're self-employed, a partner in a business, or a company director, the Self Assessment regime applies to you. Deadlines are strict and penalties for errors or late filings can be significant. Our team provides proactive management of your self-assessment, ensuring everything is submitted accurately and on time, while advising on potential deductions you might be missing."
    },
    "company-accounting": {
        title: "Company Accounting",
        icon: Briefcase,
        desc: "Robust financial reporting and compliance for limited companies. We provide the structural integrity your business needs to grow.",
        features: [
            "Statutory Annual Accounts",
            "Abbreviated Accounts for Companies House",
            "Corporation Tax Returns (CT600)",
            "Director Loan Account Management",
            "Dividend Planning",
            "Company Secretarial Services"
        ],
        detailed: "Limited companies face rigorous reporting requirements. At AG Accounting, we provide more than just compliance. We view your annual accounts as a vital tool for assessing your company's performance and planning for future expansion. Our experts ensure your accounts are prepared to the highest standards, providing confidence to stakeholders and regulators alike."
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = serviceData[slug]

    if (!service) {
        return {
            title: "Service Not Found | AG Accounting Solutions",
        }
    }

    return {
        title: `${service.title} | AG Accounting Solutions`,
        description: service.desc,
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = serviceData[slug]

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-muted py-24 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-3xl mb-8 shadow-xl shadow-primary/20">
                        <service.icon className="w-10 h-10" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-secondary mb-6">{service.title}</h1>
                    <p className="text-xl text-secondary/60 max-w-3xl mx-auto leading-relaxed">
                        {service.desc}
                    </p>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">What's Included</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start space-x-3 bg-muted p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="font-semibold text-secondary text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-secondary p-8 rounded-3xl text-white space-y-4">
                                <h4 className="text-xl font-bold flex items-center">
                                    <HelpCircle className="w-6 h-6 mr-2 text-primary" />
                                    Professional Consultation
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Not sure where to start? Our experts are here to guide you through every step of the process.
                                </p>
                                <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-secondary transition-all">
                                    Talk To An Expert
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">Transparent & Reliable Service</h2>
                            <div className="prose prose-lg text-secondary/70">
                                <p>{service.detailed}</p>
                                <p className="mt-4 font-medium text-secondary">
                                    Our commitment is to provide a seamless experience that allows you to focus on your core business activities while we manage your financial compliance.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl border-2 border-dashed border-primary/20 bg-primary/5">
                                <h4 className="font-bold text-secondary mb-2">Why wait for the deadline?</h4>
                                <p className="text-sm text-secondary/60 mb-6">Early preparation reduces stress and gives you more time to plan your cash flow according to your tax liabilities.</p>
                                <Link href="/contact" className="text-primary font-bold flex items-center hover:translate-x-2 transition-transform">
                                    Get Your Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-secondary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white font-outfit mb-8">Ready to simplify your {service.title}?</h2>
                    <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
                        Let's Get Started
                    </Link>
                </div>
            </section>
        </div>
    )
}
