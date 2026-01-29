<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { useSceneStore } from '~/stores/scene'

const sceneStore = useSceneStore()

// Auto-detect performance mode on mount
onMounted(() => {
  sceneStore.detectPerformanceMode()
})

// Color palette for multiple cubes
const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899']

// Create positions for cubes in a circle
const cubePositions = computed(() => {
  const positions: [number, number, number][] = []
  const radius = 3
  const count = 6
  
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    positions.push([x, 0, z])
  }
  
  return positions
})
</script>

<template>
  <main class="container">
    <header class="header">
      <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
      <h1>Interactive 3D Components</h1>
      <p>Explore interactive 3D cubes with hover effects</p>
    </header>

    <div class="scene-container">
      <TresCanvas alpha>
        <TresPerspectiveCamera :position="[0, 5, 10]" :look-at="[0, 0, 0]" />
        <OrbitControls />
        
        <!-- Lights -->
        <TresAmbientLight :intensity="0.5" />
        <TresDirectionalLight :position="[5, 10, 5]" :intensity="1" />
        <TresPointLight :position="[0, 3, 0]" :intensity="0.5" color="#ffffff" />
        
        <!-- Interactive cubes in a circle -->
        <InteractiveCube
          v-for="(color, index) in colors"
          :key="index"
          :color="color"
          :position="cubePositions[index]"
          :size="0.8"
        />
        
        <!-- Center sphere -->
        <TresMesh :position="[0, 0, 0]">
          <TresSphereGeometry :args="[0.5, 32, 32]" />
          <TresMeshStandardMaterial 
            color="#ffffff" 
            :metalness="0.8"
            :roughness="0.2"
          />
        </TresMesh>

        <!-- Ground plane with grid -->
        <TresMesh :rotation="[-Math.PI / 2, 0, 0]" :position="[0, -2, 0]">
          <TresPlaneGeometry :args="[20, 20]" />
          <TresMeshStandardMaterial color="#111111" />
        </TresMesh>
      </TresCanvas>
    </div>

    <section class="info">
      <div class="info-card">
        <h2>💡 Interaction Tips</h2>
        <ul>
          <li><strong>Hover</strong> over cubes to see them scale up</li>
          <li><strong>Click and drag</strong> to rotate the camera</li>
          <li><strong>Scroll</strong> to zoom in and out</li>
          <li><strong>Right-click and drag</strong> to pan</li>
        </ul>
      </div>

      <div class="info-card">
        <h2>🎨 Scene Details</h2>
        <ul>
          <li><strong>6 Interactive Cubes</strong> arranged in a circle</li>
          <li><strong>Central Sphere</strong> with metallic material</li>
          <li><strong>Multiple Lights</strong> (ambient, directional, point)</li>
          <li><strong>Orbit Controls</strong> from Cientos library</li>
        </ul>
      </div>

      <div class="info-card">
        <h2>⚙️ Performance Mode</h2>
        <p>Detected: <strong>{{ sceneStore.performanceMode }}</strong></p>
        <p class="small">
          The scene automatically detects your device capabilities and adjusts quality settings.
        </p>
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
  position: relative;
}

.back-link {
  position: absolute;
  left: 2rem;
  top: 2rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: background 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.3);
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
  height: 600px;
  position: relative;
  background: linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%);
}

.info {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.info-card ul {
  margin-left: 1.5rem;
  line-height: 1.8;
}

.info-card li {
  margin-bottom: 0.5rem;
}

.info-card strong {
  color: #a78bfa;
}

.info-card p {
  line-height: 1.6;
}

.info-card .small {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  .header p {
    font-size: 1rem;
  }

  .scene-container {
    height: 400px;
  }

  .info {
    padding: 1rem;
    gap: 1rem;
  }

  .back-link {
    position: static;
    display: inline-block;
    margin-bottom: 1rem;
  }
}
</style>
