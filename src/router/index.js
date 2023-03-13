import { createRouter, createWebHistory } from "vue-router";
import CounterView from "../views/CounterView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/counter",
  },
  {
    path: "/counter",
    name: "Counter",
    component: CounterView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
