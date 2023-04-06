import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsaNews from '../views/UsaNews.vue'
import FranceNews from '../views/FranceNews.vue'
import UnitedKingdom from '../views/UnitedKingdom.vue'
import RussiaNews from '../views/RussiaNews.vue'
import JapanNews from '../views/JapanNews.vue'
import SouthKorea from '../views/SouthKorea.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usa',
    name: 'UsaNews',
    component: UsaNews
  },
  {
  path: '/France',
    name: 'FranceNews',
    component: FranceNews
  },
  {
    path: '/Uk',
      name: 'UnitedKingdom',
      component: UnitedKingdom
    },
    {
      path: '/Russ',
        name: 'RussiaNews',
        component: RussiaNews
      },
      {
        path: '/Jap',
          name: 'JapanNews',
          component: JapanNews
        },
        {
          path: '/south',
            name: 'SouthKorea',
            component: SouthKorea
          },
   
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
