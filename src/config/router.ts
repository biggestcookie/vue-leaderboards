import type { RouteRecordRaw } from "vue-router";
import { createMemoryHistory, createRouter } from "vue-router";
import GamePage from "../pages/game/game.page.vue";
import HomePage from "../pages/home.page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/game",
    name: "Game",
    component: GamePage,
  },
  { path: "/:pathMatch(.*)*", redirect: "/game" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash
      ? { el: to.hash, behavior: "smooth" }
      : { top: 0, left: 0, behavior: "smooth" },
});

export { router, routes };
