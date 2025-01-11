import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

type Result = [name: string, elapsedTime: number];

export const useStore = defineStore("store", {
  state: () => ({
    results: useStorage("results", [] as Result[]),
  }),
});
