import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK Income Tax Calculator 2024/25 | AG Accounting",
    description: "Estimate your take-home pay and tax liability for the 2024/25 tax year with our free UK Income Tax Calculator. Guidance only.",
    alternates: {
        canonical: '/resources/tax-calculator',
    },
};

export default function TaxCalculatorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
