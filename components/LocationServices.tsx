import React from "react"
import { Banknote, FileText, Lightbulb, UserCheck, Percent, Building2 } from "lucide-react"

const services = [
    {
        title: "Payroll Management",
        description: "We have expert colleagues to assist our clients with all payroll matters including Employer PAYE registration. AG Accounting Solutions help you manage your payroll efficiently.",
        icon: Banknote
    },
    {
        title: "Tax Return",
        description: "We help our clients to prepare Tax Returns as well as we advise them in the rule and regulations and ensure full compliance with HMRC requirements.",
        icon: FileText
    },
    {
        title: "Tax Advice",
        description: "We are here to help you with your day-to-day paperwork. Let us take the worry off your shoulders with expert tax advice tailored to your situation.",
        icon: Lightbulb
    },
    {
        title: "Self Assessment",
        description: "Annual Return, Self-assessment and Personal Tax. We help our clients to meet all deadlines especially in regards to statutory requirements and avoid penalties.",
        icon: UserCheck
    },
    {
        title: "VAT Accounting",
        description: "We help our clients to prepare VAT Returns as well as we advise them in the rule and regulations and ensure your business remains compliant.",
        icon: Percent
    },
    {
        title: "Company Accounting",
        description: "We work with you to comprehend your business and then tailor our best possible quality approach to meet your needs and support your business growth.",
        icon: Building2
    }
]

export default function LocationServices() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-secondary font-outfit text-center mb-12">Services Offered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <service.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                        <p className="text-secondary/70 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
