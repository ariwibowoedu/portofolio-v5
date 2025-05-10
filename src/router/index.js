import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/partials/NotFound.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ViewProjectDetails from '@/components/projects/ViewProjectDetails.vue'
import PersonalView from '@/views/PersonalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/projects/:id',
      component: ViewProjectDetails
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ],
})

export default router
