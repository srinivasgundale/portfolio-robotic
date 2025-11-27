import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://my-portfolio-kr9hch9vb-srinivas-projects-2913b213.vercel.app/sitemap.xml',
    }
}
