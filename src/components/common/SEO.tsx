import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = "Lucy James Abagi - Social Impact Leader & Justice Reform Advocate",
  description = "Explore the professional portfolio of Lucy James Abagi, a distinguished leader in social impact, justice reform, and advocacy across Africa. Discover her transformative work in transparency, accountability, and community empowerment.",
  keywords = "Lucy James Abagi, social impact, justice reform, advocacy, transparency, accountability, Africa, leadership, governance, community empowerment, social justice, human rights, policy reform",
  image = "https://lucyjamesabagi.com/images/LucysGallery(11).jpg",
  url = "https://lucyjamesabagi.com",
  type = "website",
  author = "Lucy James Abagi",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes("Lucy James Abagi") ? title : `${title} | Lucy James Abagi`;
  const fullUrl = url.startsWith("http") ? url : `https://lucyjamesabagi.com${url}`;
  const fullImage = image.startsWith("http") ? image : `https://lucyjamesabagi.com${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Primary Meta Tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Lucy James Abagi Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', fullUrl, true);
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', fullImage, true);
    updateMetaTag('twitter:creator', '@lucydavis2012', true);
    updateMetaTag('twitter:site', '@lucydavis2012', true);

    // Article specific meta tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (author) updateMetaTag('article:author', author, true);
      if (section) updateMetaTag('article:section', section, true);
      
      // Remove existing article tags
      const existingTags = document.querySelectorAll('meta[property="article:tag"]');
      existingTags.forEach(tag => tag.remove());
      
      // Add new article tags
      tags.forEach(tag => {
        updateMetaTag('article:tag', tag, true);
      });
    }

    // Canonical URL
    updateLinkTag('canonical', fullUrl);

  }, [fullTitle, description, keywords, fullUrl, fullImage, type, author, publishedTime, modifiedTime, section, tags]);

  return null; // This component doesn't render anything
};

export default SEO;
