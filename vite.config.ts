import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      // Si NO tienes esos assets, no los declares.
      // Si quieres, deja solo los que existen.
      includeAssets: ['data/*'],

      manifest: {
        name: 'TARJETERO',
        short_name: 'TARJETERO',
        description: 'Visualizador de documentos locales (PDF) en modo offline',
        theme_color: '#2563eb',
        background_color: '#f8fafc',
        display: 'standalone',

        // Importante para GH Pages + base "./"
        start_url: './',
        scope: './',

        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,pdf,jpg,jpeg,webmanifest}'],
        runtimeCaching: [
          {
            // Para que funcione en localhost y en /tarjetero/ de GH Pages
            urlPattern: ({ url }) => url.pathname.includes('/data/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'local-data-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
});
