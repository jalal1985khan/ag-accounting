"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getFeaturedImage, WPPost, WP_API_URL } from "@/lib/wordpress"

import Image from "next/image"

export default function LatestBlogs() {
    const [posts, setPosts] = useState<WPPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // We use the full URL here or could expose a client-friendly way. 
        // Re-using the constant from lib avoids hardcoding.
        fetch(`${WP_API_URL}/posts?_embed&per_page=3`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching blogs:", err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="py-24 bg-[#fafafa]">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded w-64 mb-12"></div>
                        <div className="grid md:grid-cols-3 gap-8 w-full">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-96 bg-gray-200 rounded-3xl"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (posts.length === 0) return null

    return (
        <section className="py-32 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Latest Insights</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-secondary font-outfit leading-tight">Expert Financial <span className="text-primary italic">Updates & Advice.</span></h3>
                    </div>
                    <Link href="/blogs" className="inline-flex items-center bg-white border border-border px-8 py-4 rounded-full font-bold text-secondary hover:border-primary hover:text-primary transition-all shadow-sm">
                        View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, i) => {
                        const featuredImage = getFeaturedImage(post)
                        const date = new Date(post.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })

                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-[32px] overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={featuredImage}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                                            Resource
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-4 text-xs text-secondary/40 mb-4">
                                        <div className="flex items-center italic">
                                            {date}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                                        <div className="flex items-center">
                                            5 min read
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-secondary mb-4 line-clamp-2 group-hover:text-primary transition-colors font-outfit h-14" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    <Link href={`/blogs/${post.slug}`} className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                                        Read Story <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
