<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../config/store";
import { msToSecondsStr } from "../utils/formatting";

const store = useStore();

onMounted(() => {
  console.log("Hello world");
});
</script>

<template>
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-one-third  has-text-centered">
        <div class="hero-body">
          <p class="title">Welcome!</p>
        </div>
        <table v-if="store.results.length" class="table mx-auto my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="([name, elapsedTime], index) in store.results">
              <th>{{ index + 1 }}.</th>
              <td>{{ name }}</td>
              <td>{{ msToSecondsStr(elapsedTime) }} seconds</td>
            </tr>
          </tbody>
        </table>
        <RouterLink class="button my-5" to="/game">Start the game!</RouterLink>
      </div>
    </div>
  </section>
</template>
