import { defineStore } from 'pinia'

interface SceneState {
  isLoading: boolean
  currentScene: string
  performanceMode: 'high' | 'medium' | 'low'
  showStats: boolean
}

export const useSceneStore = defineStore('scene', {
  state: (): SceneState => ({
    isLoading: false,
    currentScene: 'home',
    performanceMode: 'high',
    showStats: false
  }),

  getters: {
    isHighPerformance: (state) => state.performanceMode === 'high',
    isMediumPerformance: (state) => state.performanceMode === 'medium',
    isLowPerformance: (state) => state.performanceMode === 'low'
  },

  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    setCurrentScene(scene: string) {
      this.currentScene = scene
    },

    setPerformanceMode(mode: 'high' | 'medium' | 'low') {
      this.performanceMode = mode
    },

    toggleStats() {
      this.showStats = !this.showStats
    },

    // Auto-detect performance mode based on device capabilities
    detectPerformanceMode() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const hasGoodGPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4

      if (isMobile) {
        this.performanceMode = 'low'
      } else if (hasGoodGPU) {
        this.performanceMode = 'high'
      } else {
        this.performanceMode = 'medium'
      }
    }
  }
})
