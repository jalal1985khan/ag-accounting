import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | AG Accounting Solutions",
    description: "Get in touch with our team in Slough. We are ready to assist with your accounting, tax, and business advisory needs. Call us or visit our office.",
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
