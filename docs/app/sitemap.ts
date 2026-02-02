import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://inferia.ai'
  
  // Get all MDX files from the content directory
  const contentDir = path.join(process.cwd(), 'content/docs')
  const files: string[] = []
  
  function getAllFiles(dir: string, relativePath: string = ''): void {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        getAllFiles(fullPath, `${relativePath}/${item}`)
      } else if (item.endsWith('.mdx') && item !== 'index.mdx') {
        files.push(`${relativePath}/${item.replace('.mdx', '')}`)
      }
    }
  }
  
  if (fs.existsSync(contentDir)) {
    getAllFiles(contentDir)
  }
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]
  
  // Documentation pages
  const docsPages = files.map(file => ({
    url: `${baseUrl}/docs${file}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...docsPages]
}