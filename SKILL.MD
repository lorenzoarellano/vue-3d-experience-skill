# SKILL: 3D Web Experience (Vue & Nuxt Edition)

> **Description:** Mastery of immersive web experiences using WebGL within the Vue ecosystem. Ability to create reactive, performant, and aesthetically stunning 3D scenes integrated into modern Nuxt applications.

## 🎯 Goal
Transform Frontend Developers into **Creative Developers** capable of integrating high-performance 3D graphics into Vue/Nuxt applications using declarative rendering and composables.

## 🛠 Tech Stack & Tools

| Category | Tool / Library |
| :--- | :--- |
| **Framework** | **Nuxt 3 / Vue 3 (Composition API)** |
| **3D Core** | **Three.js** |
| **Renderer** | **TresJS** (Custom Vue Renderer) |
| **Abstractions** | **@tresjs/cientos** |
| **Physics** | **@tresjs/cannon** (or Rapier) |
| **Animation** | **GSAP** or **@vueuse/motion** |
| **State** | **Pinia** |

---

## 🗺️ Learning Path

### Level 1: Fundamentals & Setup
Understand how Vue handles the DOM lifecycle and how TresJS injects itself as a custom renderer to bridge Vue and WebGL.

* [ ] **Three.js Core Concepts:** Scenes, Cameras, Renderers, Geometries, Materials, and Lights.
* [ ] **Nuxt 3 Setup:**
    * Installation of `@tresjs/nuxt`.
    * Usage of `<ClientOnly>` (Crucial for WebGL in SSR environments).
    * Transpilation configuration in `nuxt.config.ts`.
* [ ] **Declarative Syntax:** Transitioning from imperative Vanilla JS to declarative Vue components (`<TresCanvas>`, `<TresMesh>`).
* [ ] **Props & Reactivity:** Passing Vue `refs` to 3D properties (e.g., `:position="[x, y, z]"`).

### Level 2: The "Cientos" Ecosystem
Master the **@tresjs/cientos** library to accelerate development with pre-built abstractions.

* [ ] **Camera Controls:** `OrbitControls`, `CameraShake`, `ScrollControls`.
* [ ] **Staging & Environment:** Usage of `Environment`, `Stage`, `Stars`, and HDRI management.
* [ ] **Loaders:** Loading GLTF/GLB models using `useGLTF` (composable) and handling loading states with `<Suspense>`.
* [ ] **3D Text:** Implementing `Text3D` with custom typefaces and fonts.

### Level 3: Interactivity & State
Connecting the 2D UI world with the 3D Canvas world.

* [ ] **Pointer Events:** Handling `@click`, `@pointerover`, and `@pointermove` directly on 3D meshes.
* [ ] **Global State Management:** Using **Pinia** to control the 3D scene from external UI components (e.g., changing the color of a 3D car from an HTML button).
* [ ] **Render Hooks:** Using `useRenderLoop` for frame-by-frame animations and logic updates.

### Level 4: Shaders, Physics & Performance
Taking the experience to a production level.

* [ ] **Shaders in Vue:** Creating custom materials with `ShaderMaterial` and injecting reactive uniforms via Vue props.
* [ ] **Physics:** Implementing gravity, collisions, and rigid bodies with `@tresjs/cannon`.
* [ ] **Post-Processing:** Effects like Bloom, DepthOfField, and Glitch using `@tresjs/post-processing`.
* [ ] **Optimization:**
    * Mesh Instancing (InstancedMesh).
    * Texture management and memory disposal.
    * Draco Compression for assets.

---

## 💻 Practical Challenges (Nuxt Focused)

### 1. The Interactive Cube
Create a basic Nuxt application with a scene containing a cube.
* **Requirement:** Clicking the cube should rotate it 45 degrees and change it to a random color.
* **Tech:** Vue `ref`, `@click` events on `<TresMesh>`.

### 2. Product Configurator (eCommerce)
A product viewer (e.g., a shoe or a chair) loaded from a GLTF file.
* **Requirement:** HTML UI (Overlay) that allows changing textures/colors of the 3D model.
* **Tech:** Nuxt Layouts, Pinia for state, `useGLTF`.

### 3. Scroll-Based Landing Page
A landing page where the 3D model moves or animates based on user scrolling.
* **Requirement:** Synchronize browser scroll with the 3D animation timeline.
* **Tech:** `@tresjs/cientos` (ScrollControls) + GSAP.

---

## 📚 Recommended Resources

### Official Documentation
* [TresJS Docs (v2+)](https://docs.tresjs.org/) - *The Vue 3D bible.*
* [Cientos Docs](https://cientos.tresjs.org/) - *Pre-built components.*
* [Nuxt 3 Docs](https://nuxt.com/docs)

### Tutorials & References
* **Álvaro Saburido:** Creator of TresJS (check his YouTube or Twitter for Vue-specific content).
* **Three.js Journey (Bruno Simon):** *The gold standard for learning WebGL and Shaders logic (concepts are universal).*

### Configuration Snippet (Nuxt 3)
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@tresjs/nuxt'],
  tres: {
    devtools: true, // Integrated TresJS Devtools
  },
  ssr: true, // TresJS handles the client side automatically
})
