"use client"

import React from "react"
import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface ServiceHeroProps {
    title: string
    description: string
    icon?: React.ReactNode
    backgroundImage: string
}

export default function ServiceHero({ title, description, icon, backgroundImage }: ServiceHeroProps) {
    return (
        <section className="relative py-32 border-b border-border overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/90 z-10"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {icon && (
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 backdrop-blur-sm text-white rounded-3xl mb-8 border border-white/10 shadow-2xl">
                        {icon}
                    </div>
                )}
                <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-white mb-6 drop-shadow-lg">{title}</h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
                    {description}
                </p>
            </div>
        </section>
    )
}
