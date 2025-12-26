import React from "react"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Printer, ChevronRight } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

async function getPost(slug: string) {
    const res = await fetch(`https://www.ag-accounting.co.uk/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
        next: { revalidate: 3600 }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch post")
    }

    const posts = await res.json()
    return posts[0] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: "Post Not Found | AG Accounting"
        }
    }

    return {
        title: `${post.title.rendered} | AG Accounting Solutions`,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160), // Strip HTML from excerpt
        openGraph: {
            title: post.title.rendered,
            description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
            images: [post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/api/placeholder/1200/800"]
        },
        alternates: {
            canonical: `/blogs/${slug}`,
        }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blogs" className="text-primary hover:underline">Back to Blog</Link>
                </div>
            </div>
        )
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/api/placeholder/1200/800"
    const author = post._embedded?.['author']?.[0]?.name || "AG Accounting Team"
    const date = new Date(post.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <article className="min-h-screen">
            {/* Breadcrumbs & Simple Header */}
            <div className="bg-muted pt-32 pb-12">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center space-x-2 text-sm text-secondary/40 mb-8">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/blogs" className="hover:text-primary transition-colors">Blog</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary/60 line-clamp-1 truncate max-w-[200px]" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </nav>

                    <div className="max-w-4xl">
                        <h1
                            className="text-4xl lg:text-6xl font-bold font-outfit text-secondary mb-8 leading-tight"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <div className="flex flex-wrap items-center gap-6 text-secondary/60">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-semibold">{author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-primary/40" />
                                {date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                        {/* Sidebar / Tools */}
                        <div className="lg:w-16 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-32 flex lg:flex-col gap-4">
                                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Printer className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-grow order-1 lg:order-2">
                            <div
                                className="blog-content prose prose-lg prose-primary max-w-none text-secondary/80 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                            />

                            <div className="mt-20 pt-12 border-t border-border">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center text-secondary font-bold hover:text-primary transition-all group"
                                >
                                    <ArrowLeft className="mr-2 w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
                                    Back to Insights
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for WP Content styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .blog-content h2 { font-family: var(--font-outfit); font-weight: 700; color: var(--secondary); margin-top: 2rem; margin-bottom: 1rem; font-size: 2.25rem; }
                .blog-content h3 { font-family: var(--font-outfit); font-weight: 700; color: var(--secondary); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.5rem; }
                .blog-content p { margin-bottom: 1.5rem; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
                .blog-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
                .blog-content li { margin-bottom: 0.5rem; }
                .blog-content a { color: var(--primary); font-weight: 600; text-decoration: underline; }
                .blog-content blockquote { border-left: 4px solid var(--primary); padding-left: 1.5rem; font-style: italic; background: #f9f9f9; padding: 1.5rem; border-radius: 0 1rem 1rem 0; }
                .blog-content img { border-radius: 1.5rem; margin: 2rem 0; }
            `}} />
        </article>
    )
}
