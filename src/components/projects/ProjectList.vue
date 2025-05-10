<template>
  <div class="py-4 md:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 data-aos="fade-down" class="text-3xl font-bold tracking-wider mb-6">Projects</h1>
      <!-- loader -->
      <div v-if="loading">
        <LoaderDot />
      </div>
      <!-- projects content -->
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="project in projects"
            :key="project.id"
            data-aos="fade-up"
            :class="[
              'max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden mb-4 relative',
              project.status === 'maintain' ? 'opacity-50 pointer-events-none' : '',
            ]"
          >
            <span
              v-if="project.status === 'maintain'"
              class="absolute top-2 left-0 bg-red-500 text-white text-md px-2 py-1 shadow"
              >Maintenance</span
            >
            <div v-if="imgIsLoading" class="absolute inset-0 bg-gray animate-pulse"></div>
            <img
              class="w-full h-48 object-cover"
              alt="projects image"
              loading="lazy"
              @load="imgIsLoading = false"
              :src="project.urlToImage"
            />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-primary mb-2">{{ project.title }}</h2>
              <p class="text-gray-600 mb-4 h-20 overflow-hidden line-clamp-2">
                {{ project.description }}
              </p>
              <router-link
                :to="`/projects/${project.id}`"
                :class="[
                  'inline-block bg-blueberry hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer',
                  project.status === 'maintain' ? 'opacity-50 pointer-events-none' : '',
                ]"
                >View Project</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoaderDot from '@/components/partials/LoaderDot.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projectsStore'

const imgIsLoading = ref(true)
const projectStore = useProjectsStore()

const { projects, loading } = storeToRefs(projectStore)
// const { projects, loading, fetchProjects } = projectStore

onMounted(() => {
  projectStore.fetchProjects()
})
</script>
