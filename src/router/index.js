import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "../views/EventDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    // Caveat - Different History modes
    // https://next.router.vuejs.org/guide/essentials/history-mode.html#netlify
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
