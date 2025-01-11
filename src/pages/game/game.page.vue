<script setup lang="ts">
import { ref } from "vue";
import GameComponent from "./game.component.vue";
import ResultsComponent from "./results.component.vue";

const elapsedTime = ref(0);

function onGameFinish(newElapsedTime: number): void {
  elapsedTime.value = newElapsedTime;
}
</script>

<template>
  <section className="section">
    <GameComponent v-if="!elapsedTime" @gameFinish="onGameFinish" />
    <ResultsComponent v-else :elapsedTime="elapsedTime" />
  </section>
</template>
