import { MetadataRoute } from 'next';
import locations from '@/data/locations.json';

const BASE_URL = 'https://www.ag-accounting.co.uk';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy-policy',
        '/services/bookkeeping',
        '/services/cis-accounting',
        '/services/company-accounting',
        '/services/management-consultancy',
        '/services/outsourcing',
        '/services/payroll-services',
        '/services/self-assessment',
        '/services/start-up-business',
        '/services/tax-investigations-advice',
        '/services/tax-returns',
        '/services/vat-accounting',
        '/resources/tax-calculator',
        '/resources/useful-links',
        '/blogs',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const locationUrls = locations.map((location) => ({
        url: `${BASE_URL}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Fetch blogs for sitemap - using the existing lib function logic simplified
    // Assuming a direct fetch here to avoid circular dep or heavy content logic
    let blogUrls: MetadataRoute.Sitemap = [];
    try {
        const res = await fetch('https://www.ag-accounting.co.uk/wp-json/wp/v2/posts?per_page=100');
        if (res.ok) {
            const posts = await res.json();
            blogUrls = posts.map((post: any) => ({
                url: `${BASE_URL}/blogs/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            }));
        }
    } catch (error) {
        console.error('Failed to fetch blog posts for sitemap', error);
    }

    return [...routes, ...locationUrls, ...blogUrls];
}
