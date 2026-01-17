import { NextRequest, NextResponse } from 'next/server';

const MEDIUM_FEEDS = [
  'https://medium.com/feed/tag/artificial-intelligence',
  'https://medium.com/feed/tag/machine-learning',
  'https://medium.com/feed/tag/generative-ai',
  'https://medium.com/feed/towards-data-science',
  'https://medium.com/feed/towards-ai'
];

// Fixes the &#x... error
function cleanText(html: string) {
  if (!html) return '';
  
  let text = html
    // Remove all HTML tags first
    .replace(/<[^>]*>/g, '')
    // FIX: Specific Hex Entities found in your screenshot
    .replace(/&#x2019;/g, "'")   // Smart Apostrophe -> '
    .replace(/&#x2018;/g, "'")   // Left Smart Quote -> '
    .replace(/&#x201C;/g, '"')   // Left Double Quote -> "
    .replace(/&#x201D;/g, '"')   // Right Double Quote -> "
    .replace(/&#x2014;/g, '—')   // Em Dash -> —
    .replace(/&#x2013;/g, '-')   // En Dash -> -
    .replace(/&#x200A;/g, ' ')   // Hair Space -> Space
    .replace(/&#xA0;/g, ' ')     // Non-breaking space
    // Standard Entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Remove Medium Footer Garbage
    .replace(/Continue reading on.*$/i, '')
    .replace(/Read more.*/i, '')
    // Collapse multiple spaces into one
    .replace(/\s+/g, ' ')
    .trim();

  // Clean Truncate
  if (text.length > 180) {
    text = text.substring(0, 180).trim() + '...';
  }
  return text;
}

// image extractor
function extractImage(content: string) {
  // Priority 1: Look for Medium's CDN image (usually high res)
  const cdnMatch = content.match(/src="(https:\/\/cdn-images-1\.medium\.com\/[^"]+)"/);
  if (cdnMatch) return cdnMatch[1];

  // Priority 2: Look for any standard image tag
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch) return imgMatch[1];

  // Priority 3: Look for image in <figure> tags (common in Medium)
  const figureMatch = content.match(/<figure>.*?<img.*?src="(.*?)".*?<\/figure>/);
  if (figureMatch) return figureMatch[1];

  return null;
}

// No "Copied" Images
// Generates a consistent "random" image based on the title's letters.
function getFallbackImage(title: string) {
  const images = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', // Robot Hand
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', // AI Brain
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80', // Data Stream
    'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80', // Abstract Nodes
    'https://images.unsplash.com/photo-1535378437268-27696130a8f5?w=800&q=80', // Circuit Board
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Chip
  ];
  // Sum char codes to get a pseudo-random index that stays constant for the same title
  const sum = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return images[sum % images.length];
}

async function fetchMediumNews() {
  const allArticles: any[] = [];

  await Promise.all(MEDIUM_FEEDS.map(async (url) => {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) return;
      const text = await res.text();
      
      // Split by <item> to isolate articles
      const items = text.split('<item>');
      
      for (let i = 1; i < items.length; i++) {
        const item = items[i];
        
        // Extract Fields
        const titleMatch = item.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/);
        const title = titleMatch ? titleMatch[1] : 'Untitled';

        const linkMatch = item.match(/<link>(.*?)<\/link>/);
        const link = linkMatch ? linkMatch[1] : '';

        const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
        const pubDate = dateMatch ? dateMatch[1] : new Date().toISOString();

        // Medium puts the full content in <content:encoded>
        const contentMatch = item.match(/<content:encoded>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/);
        const rawContent = contentMatch ? contentMatch[1] : '';

        // Fallback to description if content is missing
        const descMatch = item.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
        const rawDesc = descMatch ? descMatch[1] : '';

        // 1. Get Image (Try Content first, then Description, then Fallback)
        const fullHtml = rawContent || rawDesc; 
        const image = extractImage(fullHtml) || getFallbackImage(title);

        // 2. Get Text (Prefer Description for summary, but clean it)
        const description = cleanText(rawDesc || rawContent);

        if (title !== 'Untitled' && link) {
          allArticles.push({
            title: cleanText(title), // Clean title too just in case
            url: link,
            coverImage: image,
            description,
            createdAt: new Date(pubDate).toISOString(),
            source: 'Medium'
          });
        }
      }
    } catch (e) {
      console.error(`Error fetching ${url}`, e);
    }
  }));

  // Deduplication Logic (Title Fingerprint)
  const seenTitles = new Set();
  const uniqueArticles = [];

  // Sort newest first
  allArticles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  for (const article of allArticles) {
    const fingerprint = article.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seenTitles.has(fingerprint)) {
      seenTitles.add(fingerprint);
      uniqueArticles.push({
        ...article,
        id: `news-${fingerprint.substring(0, 10)}`
      });
    }
  }

  return uniqueArticles.slice(0, 9);
}

export async function GET(req: NextRequest) {
  try {
    const news = await fetchMediumNews();
    return NextResponse.json({ news });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}