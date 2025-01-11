<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../config/store";
import { msToSecondsStr } from "../../utils/formatting";

const props = defineProps<{
  elapsedTime: number;
}>();
const store = useStore();
const router = useRouter();
const name = ref("");

function onSubmit(): void {
  store.results.push([name.value, props.elapsedTime]);
  router.push("/");
}
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-4 has-text-centered">
      <h1 class="is-size-2">Your time:</h1>
      <p class="is-size-6">{{ msToSecondsStr(props.elapsedTime) }} seconds</p>
      <form @submit.prevent="onSubmit">
        <div class="field has-addons">
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="control">
            <input type="submit" class="button is-info" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field.has-addons {
  justify-content: center;
}
</style>
