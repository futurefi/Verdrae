import type { MetadataRoute } from 'next';
import { siteConfig, systemPages } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${siteConfig.url}/lifecycle`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/downloads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ];

  const systemRoutes: MetadataRoute.Sitemap = systemPages
    .filter((page) => page.slug !== 'lifecycle')
    .map((page) => ({
      url: `${siteConfig.url}/system/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }));

  return [...staticRoutes, ...systemRoutes];
}
