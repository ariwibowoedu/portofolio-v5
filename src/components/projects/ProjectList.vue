<template>
  <div class="py-4 md:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 data-aos="fade-down" class="text-3xl font-bold tracking-wider mb-6">Projects</h1>
      <div>
        <!-- <LoaderDot /> -->
      </div>
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            data-aos="fade-up"
            class="max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden mb-4 relative"
          >
            <div class="absolute inset-0 bg-gray animate-pulse"></div>
            <img src="/assets/img/aw_logo.png" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-primary mb-2">Title</h2>
              <p class="text-gray-600 mb-4 h-20 overflow-hidden">Desc</p>
              <router-link
                to="/"
                class="inline-block bg-blueberry hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer"
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
// import LoaderDot from '@/components/partials/LoaderDot.vue'
</script>

<style>
</style>