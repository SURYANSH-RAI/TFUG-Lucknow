import { NextRequest, NextResponse } from 'next/server';

// This assumes you have MEDIUM_API_KEY and MEDIUM_USER_ID in your .env file
const MEDIUM_API_KEY = process.env.MEDIUM_API_KEY;
const MEDIUM_USER_ID = process.env.MEDIUM_USER_ID;

const MEDIUM_API_URL = `https://api.medium.com/v1/users/${MEDIUM_USER_ID}/publications`;

// Helper to fetch and filter news
async function fetchAINews() {
  if (!MEDIUM_API_KEY || !MEDIUM_USER_ID) {
    throw new Error('Medium API key or user ID not set in environment variables.');
  }

  // Fetch publications
  const res = await fetch(MEDIUM_API_URL, {
    headers: {
      Authorization: `Bearer ${MEDIUM_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch Medium publications');
  const data = await res.json();

  // Flatten all posts from all publications
  const allPosts = (data.data || []).flatMap((pub: any) => pub.posts || []);

  // Filter for AI/ML news (by tags or title)
  const aiNews = allPosts.filter((post: any) => {
    const tags = post.tags?.map((t: string) => t.toLowerCase()) || [];
    const title = post.title?.toLowerCase() || '';
    return (
      tags.includes('ai') ||
      tags.includes('artificial intelligence') ||
      tags.includes('machine learning') ||
      title.includes('ai') ||
      title.includes('artificial intelligence') ||
      title.includes('machine learning')
    );
  });

  // Sort by latest
  aiNews.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Limit to top 10
  return aiNews.slice(0, 10).map((post: any) => ({
    id: post.id,
    title: post.title,
    url: post.url,
    coverImage: post.virtuals?.previewImage?.imageId
      ? `https://miro.medium.com/v2/resize:fit:800/${post.virtuals.previewImage.imageId}`
      : null,
    createdAt: post.createdAt,
    tags: post.tags,
  }));
}

export async function GET(req: NextRequest) {
  try {
    const news = await fetchAINews();
    return NextResponse.json({ news });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
