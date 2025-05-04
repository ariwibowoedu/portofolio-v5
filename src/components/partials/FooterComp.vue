<script setup>
import LogoBrand from '@/components/partials/LogoBrand.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import * as feather from 'feather-icons'

const router = useRouter()
const routes = computed(() => router.options.routes.filter((route) => route.name))

const icons = {
  github: feather.icons.github.toSvg(),
  instagram: feather.icons.instagram.toSvg(),
  mail: feather.icons.mail.toSvg(),
}
</script>

<template>
  <footer class="bg-gray-100 text-gray-900 py-10">
    <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- logo -->
        <div>
          <LogoBrand />
          <p class="text-sm text-gray-500">Let's connect and create something amazing together.</p>
        </div>
        <!-- navigation -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="route in routes" :key="route.path" class="list-none">
              <router-link :to="route.path">
                <span class="text-sm text-gray-700 hover:text-primary">{{ route.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="mailto:ariwibowo.edu@gmail.com"
                target="_blank"
                aria-label="email"
                class="hover:text-blueberry flex flex-row gap-2"
              >
                <svg v-html="icons.mail" class="h-6 w-6"></svg>
                ariwibowo.edu@gmail.com</a
              >
            </li>
            <li>
              <a
                href="https://github.com/ariwibowoedu"
                target="_blank"
                aria-label="github"
                class="hover:text-blueberry flex flex-row gap-2"
                ><svg v-html="icons.github" class="h-6 w-6"></svg>
                github.com/ariwibowoedu
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aariiwiiboowoo/"
                target="_blank"
                aria-label="instagram"
                class="hover:text-blueberry flex flex-row gap-2"
              >
                <svg v-html="icons.instagram" class="h-6 w-6"></svg>
                aariiwiiboowoo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
      &copy; 2025 - ariwibowo.edu. All rights reserved.
    </div>
  </footer>
</template>