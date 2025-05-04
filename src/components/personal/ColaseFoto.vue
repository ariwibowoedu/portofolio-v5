<script setup>
const images = [
  'assets/img/ari/1.jpg',
  'assets/img/ari/2.jpg',
  'assets/img/ari/3.jpg',
  'assets/img/ari/4.jpg',
  'assets/img/ari/5.jpg',
  'assets/img/ari/6.jpg',
  'assets/img/ari/7.jpg',
  'assets/img/ari/8.jpg',
  'assets/img/ari/9.jpg',
  'assets/img/ari/10.jpg',
]
</script>

<template>
  <div data-aos="fade-up" class="overflow-hidden py-4 mb-12">
    <h1 class="text-3xl mb-4 text-center">Gallery</h1>
    <div class="flex animate-slide gap-8 items-center">
      <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-32 h-32 mx-4">
        <img :src="image" :alt="`Image ${index + 1}`" class="w-full h-full object-cover rounded" />
      </div>
      <div
        v-for="(image, index) in images"
        :key="`clone-${index}`"
        class="flex-shrink-0 w-32 h-32 mx-4"
      >
        <img :src="image" alt="`Logo ${index + 1}`" class="w-full h-full object-cover rounded" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-slide {
  display: flex;
  animation: slide linear infinite 15s;
}
</style>