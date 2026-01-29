# 🎨 Vue 3D Experience Skill

A comprehensive learning roadmap for mastering **3D Creative Development** using Vue 3, Nuxt 3, and TresJS. Transform from a Frontend Developer into a Creative Developer capable of building immersive, high-performance WebGL experiences.

## 🚀 Core Stack

- **Vue 3** - Composition API for reactive 3D experiences
- **Nuxt 3** - Full-stack framework with SSR capabilities
- **Three.js** - Industry-standard 3D rendering engine
- **TresJS** - Declarative Three.js renderer for Vue
- **Cientos** - Ready-to-use 3D components and helpers
- **Pinia** - State management for complex 3D scenes

## 📋 Prerequisites

- Node.js 18+ or 20+
- Basic understanding of Vue 3 Composition API
- Familiarity with TypeScript (recommended)
- Understanding of 3D concepts (helpful but not required)

## 🛠️ Setup

### Installation

```bash
# Clone the repository
git clone https://github.com/lorenzoarellano/vue-3d-experience-skill.git
cd vue-3d-experience-skill

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## 📚 Learning Path

### Level 1: Fundamentals
- Understanding 3D space (X, Y, Z coordinates)
- Basic geometries and meshes
- Materials and textures
- Lighting techniques
- Camera positioning and controls

### Level 2: Intermediate
- Custom geometries and shapes
- Loading 3D models (GLTF, FBX, OBJ)
- Animations and transitions
- User interactions and raycasting
- Performance optimization

### Level 3: Advanced
- Custom shaders (GLSL)
- Post-processing effects
- Physics integration
- Particle systems
- Advanced lighting and shadows

### Level 4: Creative Development
- Building immersive experiences
- Storytelling with 3D
- Sound and music integration
- Responsive 3D design
- Production-ready deployment

## 🎯 Key Features

### Declarative 3D with TresJS
TresJS brings the power of Three.js to Vue with a declarative, component-based approach:

```vue
<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[3, 3, 3]" />
    <OrbitControls />
    
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshStandardMaterial color="#4f46e5" />
    </TresMesh>
    
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[5, 5, 5]" />
  </TresCanvas>
</template>
```

### Reactive 3D Experiences
Leverage Vue's reactivity system for dynamic 3D scenes:

```typescript
const state = reactive({
  rotation: 0,
  scale: 1,
  color: '#4f46e5'
})

// Automatically updates the 3D scene
watch(() => state.color, (newColor) => {
  // Scene updates reactively
})
```

### Pre-built Components with Cientos
Use ready-to-use 3D components from Cientos:

- Camera controls (OrbitControls, FlyControls, etc.)
- Environment maps and HDRIs
- Post-processing effects
- Helper utilities
- Performance monitors

## 🎓 Examples & Tutorials

The repository includes progressive examples:

1. **Basic Scene** - Your first 3D scene with a rotating cube
2. **Lighting** - Understanding different light types
3. **Materials** - Exploring material properties
4. **Models** - Loading and displaying 3D models
5. **Interactions** - User input and raycasting
6. **Animations** - Creating smooth animations
7. **Effects** - Post-processing and shaders

## 🏗️ Project Structure

```
vue-3d-experience-skill/
├── app/
│   ├── pages/          # Nuxt pages
│   ├── components/     # Vue components
│   ├── composables/    # Reusable composition functions
│   └── stores/         # Pinia stores
├── assets/
│   └── css/           # Global styles
├── public/            # Static assets
├── nuxt.config.ts     # Nuxt configuration
└── package.json       # Dependencies
```

## 🎨 Best Practices

1. **Performance First**
   - Use `InstancedMesh` for repeated objects
   - Implement level of detail (LOD)
   - Optimize geometries and textures
   - Use `requestAnimationFrame` efficiently

2. **Code Organization**
   - Separate 3D logic into composables
   - Use Pinia for complex scene state
   - Keep components focused and reusable

3. **User Experience**
   - Show loading states for 3D assets
   - Implement progressive enhancement
   - Ensure responsive design
   - Add fallbacks for unsupported devices

## 🔧 Configuration

### Nuxt Config
The project is configured with optimal settings for 3D rendering:

```typescript
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  vite: {
    optimizeDeps: {
      include: ['three']
    }
  }
})
```

## 📖 Resources

### Official Documentation
- [TresJS Documentation](https://tresjs.org/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Nuxt 3 Documentation](https://nuxt.com/)
- [Vue 3 Documentation](https://vuejs.org/)

### Learning Resources
- [Three.js Journey](https://threejs-journey.com/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [The Book of Shaders](https://thebookofshaders.com/)

### Community
- [TresJS Discord](https://discord.gg/UCr96AQmWn)
- [Three.js Forum](https://discourse.threejs.org/)
- [Vue Discord](https://discord.com/invite/vue)

## 🤝 Contributing

Contributions are welcome! Whether it's:
- Adding new examples
- Improving documentation
- Fixing bugs
- Suggesting new features

Please feel free to open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this project for learning and building amazing 3D experiences!

## 🌟 Acknowledgments

- [TresJS Team](https://github.com/Tresjs) for the amazing Vue Three.js renderer
- [Three.js Team](https://github.com/mrdoob/three.js/) for the powerful 3D engine
- [Nuxt Team](https://github.com/nuxt) for the excellent framework
- [Vue Team](https://github.com/vuejs) for the reactive framework

---

**Ready to start your 3D creative development journey?** 🚀

Run `npm run dev` and open `http://localhost:3000` to see your first 3D scene!
