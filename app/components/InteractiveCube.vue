<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  color?: string
  size?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

const props = withDefaults(defineProps<Props>(), {
  color: '#4f46e5',
  size: 1,
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0]
})

const isHovered = ref(false)
const scale = computed(() => isHovered.value ? 1.2 : 1)
</script>

<template>
  <TresMesh 
    :position="position" 
    :rotation="rotation"
    :scale="scale"
    @pointer-enter="isHovered = true"
    @pointer-leave="isHovered = false"
  >
    <TresBoxGeometry :args="[size, size, size]" />
    <TresMeshStandardMaterial 
      :color="color" 
      :metalness="0.3"
      :roughness="0.4"
    />
  </TresMesh>
</template>
