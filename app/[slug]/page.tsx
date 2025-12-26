import React from "react"
import ServiceHero from "@/components/ServiceHero"
import LocationServices from "@/components/LocationServices"
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import locationsData from "@/data/locations.json"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// Type definition for the location data
interface LocationData {
    slug: string;
    name: string;
    href: string;
    title: string;
    description: string;
}

// Generate static params for all locations
export async function generateStaticParams() {
    return locationsData.map((location) => ({
        slug: location.slug,
    }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const location = locationsData.find((loc) => loc.slug === slug)

    if (!location) {
        return {
            title: "Location Not Found | AG Accounting",
        }
    }

    return {
        title: `${location.title} | AG Accounting Solutions`,
        description: location.description,
        alternates: {
            canonical: `/${slug}`,
        },
    }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const location = locationsData.find((loc) => loc.slug === slug)

    if (!location) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            <ServiceHero
                title={location.title}
                description={location.description}
                icon={<MapPin className="w-10 h-10" />}
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl font-bold text-secondary font-outfit">
                                Premium Accounting Services in <span className="text-primary">{location.name.replace("Accountants in ", "")}</span>
                            </h2>
                            <p className="text-lg text-secondary/70 leading-relaxed">
                                At AG Accounting Solutions, we understand the local business landscape. Whether you are a small business owner, a contractor, or a limited company in {location.name.replace("Accountants in ", "")}, we are here to provide you with expert financial guidance and support.
                            </p>
                        </div>

                        <LocationServices />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-muted p-8 rounded-3xl border border-border">
                                <h3 className="text-2xl font-bold text-secondary mb-6">Why Choose Us?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Local Market Knowledge",
                                        "Tax Efficiency Strategies",
                                        "Cloud Accounting Experts",
                                        "Dedicated Personal Support"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-secondary/80 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-secondary p-8 rounded-3xl text-white flex flex-col justify-center space-y-6">
                                <h3 className="text-2xl font-bold">Ready to Grow?</h3>
                                <p className="text-white/80">
                                    Book a free consultation with our team today and let's discuss how we can help your business thrive.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-secondary transition-all"
                                >
                                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="text-center pt-12 border-t border-border">
                            <p className="text-secondary/60">
                                Serving clients across {location.name.replace("Accountants in ", "")} and surrounding areas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
