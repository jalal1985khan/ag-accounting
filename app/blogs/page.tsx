import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { getPosts, getFeaturedImage, WPPost } from "@/lib/wordpress"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Financial Insights & Blog | AG Accounting Solutions",
    description: "Read our latest articles on tax, accounting, and business growth. Expert advice from Chartered Accountants in Slough.",
    alternates: {
        canonical: '/blogs',
    },
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-secondary pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-bold font-outfit mb-6">Financial Insights</h1>
                    <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                        Expert advice, tax updates, and business growth strategies from the AG Accounting team.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post: WPPost) => {
                            const featuredImage = getFeaturedImage(post)
                            const date = new Date(post.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })

                            return (
                                <article key={post.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={featuredImage}
                                            alt={post.title.rendered}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                                                Update
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center space-x-4 text-sm text-secondary/40 mb-4">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-2" />
                                                5 min read
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold font-outfit text-secondary mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                                            <Link href={`/blogs/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                        </h2>

                                        <div
                                            className="text-secondary/60 text-sm mb-6 line-clamp-3 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />

                                        <div className="mt-auto">
                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors group/link"
                                            >
                                                Read Full Article
                                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    {/* Newsletter or CTA */}
                    <div className="mt-24 p-12 bg-muted rounded-[40px] text-center border border-border relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-secondary font-outfit mb-4">Stay Informed</h3>
                            <p className="text-secondary/60 max-w-xl mx-auto mb-8">
                                Subscribe to our monthly newsletter for the latest tax updates and business tips delivered straight to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-6 py-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                                />
                                <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
