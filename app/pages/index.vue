<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'

const state = reactive({
  rotation: 0
})

onMounted(() => {
  const animate = () => {
    state.rotation += 0.01
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <main class="container">
    <header class="header">
      <h1>Vue 3D Experience Skill</h1>
      <p>Transform into a Creative Developer with Vue 3, Nuxt 3, and TresJS</p>
    </header>

    <div class="scene-container">
      <TresCanvas alpha>
        <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
        <OrbitControls />
        
        <!-- Ambient light for overall illumination -->
        <TresAmbientLight :intensity="0.5" />
        
        <!-- Directional light for shadows -->
        <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />
        
        <!-- Rotating cube -->
        <TresMesh :rotation="[state.rotation, state.rotation * 0.5, 0]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshStandardMaterial color="#4f46e5" />
        </TresMesh>

        <!-- Ground plane -->
        <TresMesh :rotation="[-Math.PI / 2, 0, 0]" :position="[0, -1, 0]">
          <TresPlaneGeometry :args="[10, 10]" />
          <TresMeshStandardMaterial color="#1e1e1e" />
        </TresMesh>
      </TresCanvas>
    </div>

    <section class="content">
      <div class="card">
        <h2>🎨 Core Technologies</h2>
        <ul>
          <li><strong>Vue 3</strong> - Composition API for reactive 3D experiences</li>
          <li><strong>Nuxt 3</strong> - Full-stack framework with SSR capabilities</li>
          <li><strong>Three.js</strong> - Powerful 3D rendering engine</li>
          <li><strong>TresJS</strong> - Declarative Three.js for Vue</li>
          <li><strong>Cientos</strong> - Ready-to-use 3D components</li>
          <li><strong>Pinia</strong> - State management for complex scenes</li>
        </ul>
      </div>

      <div class="card">
        <h2>🚀 Learning Path</h2>
        <ol>
          <li>Understanding 3D fundamentals (meshes, materials, lights)</li>
          <li>Working with TresJS declarative syntax</li>
          <li>Implementing camera controls and interactions</li>
          <li>Creating custom shaders and effects</li>
          <li>Optimizing performance for complex scenes</li>
          <li>Building immersive user experiences</li>
        </ol>
      </div>

      <div class="card">
        <h2>📚 Examples Included</h2>
        <p>Explore interactive 3D examples demonstrating:</p>
        <ul>
          <li>Basic shapes and transformations</li>
          <li>Lighting techniques and shadows</li>
          <li>Camera controls (OrbitControls, FlyControls)</li>
          <li>Loading 3D models (GLTF, FBX)</li>
          <li>Post-processing effects</li>
          <li>Physics integration</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.scene-container {
  width: 100%;
  height: 500px;
  position: relative;
  background: linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%);
}

.content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.card ul,
.card ol {
  margin-left: 1.5rem;
  line-height: 1.8;
}

.card li {
  margin-bottom: 0.5rem;
}

.card strong {
  color: #a78bfa;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }

  .scene-container {
    height: 400px;
  }

  .content {
    padding: 1rem;
    gap: 1rem;
  }
}
</style>
