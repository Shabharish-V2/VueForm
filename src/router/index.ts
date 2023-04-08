import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsaNews from "../views/UsaNews.vue";
import FranceNews from "../views/FranceNews.vue";
import UnitedKingdom from "../views/UnitedKingdom.vue";
import RussiaNews from "../views/RussiaNews.vue";
import JapanNews from "../views/JapanNews.vue";
import SouthKorea from "../views/SouthKorea.vue";
import  BusiNess from "../views/BusiNess.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/usa/:code",
    name: "UsaNews",
    component: UsaNews,
  },
  {
    path: "/France/:code",
    name: "FranceNews",
    component: FranceNews,
  },
  {
    path: "/Uk/:code",
    name: "UnitedKingdom",
    component: UnitedKingdom,
  },
  {
    path: "/Russ/:code",
    name: "RussiaNews",
    component: RussiaNews,
  },
  {
    path: "/Jap/:code",
    name: "JapanNews",
    component: JapanNews,
  },
  {
    path: "/south/:code",
    name: "SouthKorea",
    component: SouthKorea,
  },
  {
    path: "/business/:category",
    name: "Business",
    component: BusiNess,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
