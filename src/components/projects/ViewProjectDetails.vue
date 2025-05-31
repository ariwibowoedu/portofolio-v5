<template>
  <div class="py-4 md:py-12 mx-auto">
    <!-- loading -->
    <div v-if="loading">
      <LoaderDot />
    </div>
    <!-- content -->
    <div v-else-if="project" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-start gap-2 mb-4">
        <router-link to="/projects" class="text-xl hover:text-blueberry">Projects</router-link>
        <span>/</span>
        <p class="text-xl text-gray-400">{{ project.title }}</p>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold">{{ project.title }}</h1>
        <p class="text-2xl font-light text-primary">{{ project.categories }}</p>
      </div>
      <p class="text-sm text-gray-400 mt-8">
        Posted: <strong>{{ formatDate(project.timestamp) }}</strong>
      </p>
      <hr />
      <div class="mt-10">
        <p class="text-xl font-normal text-gray-500">{{ project.description }}</p>
      </div>
      <component :is="currentComponent"></component>
    </div>
    <div v-else>Project not found. Please contact administrator.</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import QrGenerator from '@/components/projects/project/QrGenerator.vue'
import MoneyTracker from './project/MoneyTracker.vue'
import SimpleCalculator from '@/components/projects/project/SimpleCalculator.vue'
import OnGoing from '@/components/partials/OnGoing.vue'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import { storeToRefs } from 'pinia'
import LoaderDot from '@/components/partials/LoaderDot.vue'
import dayjs from 'dayjs'

const componentMap = {
  'generate qr code': QrGenerator,
  'money tracker': MoneyTracker,
  'simple calculator': SimpleCalculator,
}

const currentComponent = computed(() => {
  const key = project.value?.title?.toLowerCase()
  return key && componentMap[key] ? componentMap[key] : OnGoing
})

const formatDate = (timestamp) => {
  if (!timestamp?.toDate) return 'invalid Date'
  return dayjs(timestamp.toDate()).format('D MMMM YYYY')
}

const store = useProjectsStore()
const { project, loading } = storeToRefs(store)

const route = useRoute()
const id = route.params.id

onMounted(() => {
  store.fetchProjectById(id)
})
</script>