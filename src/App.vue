<script setup>
import NavBar from '@/components/partials/NavBar.vue'
import FooterComp from '@/components/partials/FooterComp.vue'
</script>

<template>
  <nav-bar />
  <div class="mx-auto max-w-7xl items-center px-4 lg:px-4">
    <router-view />
  </div>
  <footer-comp />
</template>

<style scoped>
</style>
