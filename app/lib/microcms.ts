import { Post } from "../types/post";

interface MicroCMSResponse {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
}

export async function fetchBlogPosts(): Promise<MicroCMSResponse> {
  const endpoint = process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT!;
  const headers = {
    'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
  };

  try {
    const res = await fetch(endpoint, { headers });
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch data from microCMS');
    }
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
