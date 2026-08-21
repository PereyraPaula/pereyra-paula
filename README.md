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
- **Pnpm**: gestor de paquetes para proyectos de Node.js que ofrece ventajas de velocidad y espacio en comparación con NPM o Yarn.

## 📦 Instalación y ejecución local

### Versiones usadas:
* Node: v24.11.0
* Pnpm: v11.22.0
* Tailwind: v4.2.1

### Pasos:

1. **Clona el repositorio**:
```bash
git clone https://github.com/PereyraPaula/pereyra-paula.git
cd pereyra-paula
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
```

Abre http://localhost:4321 en tu navegador.

4. Construye para producción:
```bash
pnpm run build
```

5. Visualiza el código para producción (opcional):
```bash
pnpm run preview
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
│   │   └── desarrollo # Detalle de cada desarrollo hecho
│   └── styles # Estilos globales y Tailwind
└── tsconfig.json
```
