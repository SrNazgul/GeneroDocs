import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Genero Docs',
      defaultLocale: 'es', // Idioma predeterminado
      locales: {
        es: { label: 'Español', lang: 'es' }, // Español
        en: { label: 'Inglés', lang: 'en' }, // Inglés
        fr: { label: 'Français', lang: 'fr' }, // Francés
        ja: { label: '日本語', lang: 'ja' }, // Japonés
      },
    }),
  ],
});
