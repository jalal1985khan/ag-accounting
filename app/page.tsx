import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
} from "lucide-react"
import LatestBlogs from "@/components/LatestBlogs"
import companyInfo from "@/data/company-info.json"
import HomeHero from "@/components/HomeHero"
import HomeServices from "@/components/HomeServices"

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Accuracy Rate", value: "99.9%" },
  { label: "Expert Advisors", value: "12" },
]

export const metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />

      {/* Stats Section */}
      <section className="bg-secondary relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl lg:text-5xl font-bold font-outfit text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</p>
                <p className="text-blue-200/50 text-sm font-semibold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeServices />

      {/* Trust Section */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Team"
              width={1000}
              height={667}
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-3xl text-white shadow-2xl z-20 hidden sm:block">
              <p className="text-4xl font-bold font-outfit mb-2">15+</p>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years of Dedicated <br /> Service Excellence</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-outfit">Why Strategic Leaders <br /><span className="text-primary italic">Choose AG Accounting.</span></h2>
            <p className="text-lg text-secondary/70 leading-relaxed">
              Managing finances shouldn't be a burden. We provide the expertise and tools necessary to maintain full control over your business growth while staying fully compliant with the latest regulations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Fixed Fee Guarantee",
                "Unlimited Support",
                "MTD Ready Software",
                "Personal Tax Advisor",
                "Proactive Planning",
                "Swift Response"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-bold text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/about" className="text-secondary font-bold border-b-2 border-primary pb-2 hover:text-primary transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <LatestBlogs />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-secondary p-12 lg:p-24 rounded-[40px] text-center relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white font-outfit tracking-tight">Ready to transform your <br /> financial future?</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">Join hundreds of successful businesses who trust us with their numbers. Get a free consultation today.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
                <Link href="/contact" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-secondary transition-all shadow-2xl flex items-center justify-center">
                  Book a Consultation
                </Link>
                <a href={`tel:${companyInfo.tel.replace(/\s+/g, '')}`} className="text-white border-2 border-white/20 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">
                  Call {companyInfo.tel}
                </a>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

