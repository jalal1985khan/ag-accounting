export const WP_API_URL = "https://www.ag-accounting.co.uk/wp-json/wp/v2";

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media: number;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text?: string;
        }>;
    };
}

export async function getPosts(perPage: number = 9): Promise<WPPost[]> {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${perPage}`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

export async function getMedia(id: number) {
    const res = await fetch(`${WP_API_URL}/media/${id}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch media");
    }

    return res.json();
}

/**
 * Helper to get the featured image URL from a post object.
 * Looks in _embedded first, then falls back to a placeholder.
 * 
 * Note: If we really needed to fetch by ID when _embedded is missing,
 * we would need this to be async and call getMedia(post.featured_media).
 * For now, we rely on _embed as it's efficient for lists.
 */
export function getFeaturedImage(post: WPPost): string {
    if (
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"].length > 0
    ) {
        return post._embedded["wp:featuredmedia"][0].source_url;
    }
    return "/api/placeholder/800/600"; // Or a default image
}
