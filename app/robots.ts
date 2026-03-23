// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*', // Esto le habla a todos los buscadores (Google, Bing, etc.)
            allow: '/',     // Les das permiso de leer toda tu landing
        },
        sitemap: 'https://deviaty.com/sitemap.xml', // Les indicas dónde está el mapa
    }
}