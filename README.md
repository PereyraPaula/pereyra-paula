# Portfolio - Paula Pereyra

Portfolio personal que muestra mis habilidades, proyectos y experiencia profesional. Está diseñado para ser rápido, accesible y fácil de mantener gracias a las ventajas de Astro.

## 🚀 Características
- **Rápido y ligero**: Astro genera páginas estáticas por defecto, optimizando el rendimiento.
- **SEO-friendly**: Estructura semántica y optimización para motores de búsqueda.
- **Diseño responsive**: Adaptado para móviles, tablets y escritorio.

## 🛠 Tecnologías utilizadas
- **Astro**: Framework principal para la construcción del sitio.
  - **Astro SEO**: Componente de Astro que facilita la adición de etiquetas relevantes para la optimización de motores de búsqueda (SEO) a tus páginas.
- **Tailwind CSS**: Para estilos rápidos y personalizables.
- **Bun**: Entorno de ejecución de Javascript, diseñado para ser una alternativa más rápida a Node.js y Deno.

## 📦 Instalación y ejecución local

### Versiones usadas:
* Node: v24.11.0
* Bun: v1.3.4
* Tailwind: v4.2.1

### Pasos:

1. **Clona el repositorio**:
```bash
git clone https://github.com/PereyraPaula/pereyra-paula.git
cd pereyra-paula
```

2. Instala las dependencias:
```bash
bun install
```

3. Ejecuta el servidor de desarrollo:
```bash
bun dev
```

Abre http://localhost:4321 en tu navegador.

4. Construye para producción:
```bash
bun run build
```

5. Visualiza el código para producción (opcional):
```bash
bun run preview
```
Abre http://localhost:4321 en tu navegador.

## Estructura del proyecto

```bash
pereyra-paula
├── astro.config.mjs # Configuración de Astro
├── package.json
├── public # Archivos estáticos (imágenes, etc.)
├── src
│   ├── components # Componentes reutilizables
│   ├── layouts # Layouts principales
│   ├── pages  # Páginas del sitio
│   │   ├── index.astro
│   │   └── posts
│   └── styles # Estilos globales y Tailwind
└── tsconfig.json
```
