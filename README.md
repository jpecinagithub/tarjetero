
# LocalDoc Explorer PWA

Una aplicación web progresiva (PWA) de alto rendimiento diseñada para visualizar catálogos de archivos locales (PDFs e imágenes) alojados en la carpeta `public/data`.

## Características
- **PWA**: Instalable en escritorio y móvil. Funciona offline.
- **Visualizador Nativo**: Soporte optimizado para PDFs en iOS/Android.
- **Búsqueda y Filtros**: Búsqueda instantánea y filtrado por tipo.
- **GitHub Pages Ready**: Configurado para desplegarse mediante GitHub Actions.
- **UI Moderna**: Desarrollado con Tailwind CSS.

## Estructura de Datos
Para añadir nuevos archivos:
1. Sube el archivo (PDF, JPG, PNG) a `public/data/`.
2. Actualiza el catálogo en `public/data/index.json`.

```json
{
  "id": "unique-id",
  "title": "Título del archivo",
  "filename": "archivo.pdf",
  "type": "pdf",
  "tags": ["etiqueta1"]
}
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Despliegue en GitHub Pages
1. Sube este repositorio a tu cuenta de GitHub.
2. Ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
4. Al hacer push a `main`, la web se desplegará automáticamente.

**Nota**: El archivo `vite.config.ts` utiliza `base: './'`, lo que permite que la App funcione independientemente del nombre del repositorio en GitHub Pages.

## Requisitos Técnicos
- Node.js 18+
- Los PDFs deben ser servidos desde el mismo dominio para evitar problemas de CORS/seguridad en el visualizador.
