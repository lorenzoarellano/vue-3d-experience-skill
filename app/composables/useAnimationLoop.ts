<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Composable for handling 3D animations with requestAnimationFrame
 * @param callback - Function to call on each animation frame
 * @returns Object with start and stop methods
 */
export const useAnimationLoop = (callback: (delta: number) => void) => {
  const isAnimating = ref(false)
  let animationId: number | null = null
  let lastTime = 0

  const start = () => {
    if (isAnimating.value) return

    isAnimating.value = true
    lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (!isAnimating.value) return

      const delta = (currentTime - lastTime) / 1000 // Convert to seconds
      lastTime = currentTime

      callback(delta)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
  }

  const stop = () => {
    isAnimating.value = false
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  }

  // Auto-start on mount and cleanup on unmount
  onMounted(() => {
    start()
  })

  onBeforeUnmount(() => {
    stop()
  })

  return {
    isAnimating,
    start,
    stop
  }
}
