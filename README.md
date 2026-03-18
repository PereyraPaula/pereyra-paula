# Portfolio - Paula Pereyra

Este proyecto es un portfolio personal que muestra mis habilidades, proyectos y experiencia profesional. Está diseñado para ser rápido, accesible y fácil de mantener gracias a las ventajas de Astro.

## 🚀 Características
- **Rápido y ligero**: Astro genera páginas estáticas por defecto, optimizando el rendimiento.
- **SEO-friendly**: Estructura semántica y optimización para motores de búsqueda.
- **Diseño responsive**: Adaptado para móviles, tablets y escritorio.

## 🛠 Tecnologías utilizadas
- **Astro**: Framework principal para la construcción del sitio.
- **Tailwind CSS**: Para estilos rápidos y personalizables.
- **Bun**: Entorno de ejecución de Javascript, diseñado para ser una alternativa más rápida a Node.js y Deno.

## 📦 Instalación y ejecución local

1. **Clona el repositorio**:
```bash
git clone https://github.com/tu-usuario/mi-portfolio-astro.git
cd mi-portfolio-astro
```

2. Instala las dependencias:
```bash
bun install
```

3. Ejecuta el servidor de desarrollo:
```bash
bun dev
```

Abre http://localhost:3000 en tu navegador.

4. Construye para producción:
```bash
bun run build
```

## Estructura del proyecto

```
pereyra-paula/
├── public/          # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── layouts/      # Layouts principales
│   ├── pages/        # Páginas del sitio (ruteo basado en archivos)
│   ├── styles/       # Estilos globales y Tailwind
├── astro.config.mjs # Configuración de Astro
└── package.json
```
