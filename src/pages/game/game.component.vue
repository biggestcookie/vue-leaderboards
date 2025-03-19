<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const startTime = ref(0);
const coordinates = reactive({
  x: 0,
  y: 0,
});

const emit = defineEmits<{
  gameFinish: [elapsedTime: number];
}>();

onMounted(() => {
  startTime.value = performance.now();
  Object.assign(coordinates, { ...randomizeCoordinates() });
});

function onButtonClick(): void {
  emit("gameFinish", performance.now() - startTime.value);
}

// Get random value between two numbers
function getRandomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Generate random XY coordinates within viewport dimensions + offset padding
function randomizeCoordinates(): { x: number; y: number } {
  const padding = 150;
  const x = getRandomRange(padding, window.innerWidth - padding);
  const y = getRandomRange(padding, window.innerHeight - padding);
  console.log(x, y);
  return { x, y };
}
</script>

<template>
  <button
    @click="onButtonClick"
    class="button"
    :style="{ left: coordinates.x + 'px', top: coordinates.y + 'px' }"
  >
    Click me!
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: absolute;
}
</style>
