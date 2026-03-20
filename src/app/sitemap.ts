import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nicolamason.co.uk'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/weddings`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/enquiry`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Keyword-optimized pages
    {
      url: `${baseUrl}/wedding-singer-glasgow`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-singer-scotland`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-singer-edinburgh`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-ceremony-singer`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
