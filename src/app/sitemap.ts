import { MetadataRoute } from 'next';
import { detailedCourses } from '@/data/courses';
import { migrationServices, studyServices, otherServices } from '@/data/services';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eevsgroup.com';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/migration',
    '/abroad-study',
    '/other-services',
    '/courses',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Course Pages
  const coursePages = detailedCourses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // We use query parameters for services (?service=id) on the main category pages, 
  // so we should technically index the parent category pages with the query params 
  // or rely on the parent page indexing. Since Google can index URLs with query params, 
  // it's good practice to include the direct links to specific services.
  
  const migrationServiceUrls = migrationServices.map((service) => ({
    url: `${baseUrl}/migration?service=${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const studyServiceUrls = studyServices.map((service) => ({
    url: `${baseUrl}/abroad-study?service=${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const otherServiceUrls = otherServices.map((service) => ({
    url: `${baseUrl}/other-services?service=${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Blog Posts
  const blogPostUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...coursePages,
    ...migrationServiceUrls,
    ...studyServiceUrls,
    ...otherServiceUrls,
    ...blogPostUrls,
  ];
}
