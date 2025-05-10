<template>
  <div class="py-4 md:py-6">
    <!-- content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <header class="mb-12" data-aos="fade-down">
        <h1 class="text-3xl font-bold tracking-wider mb-6 text-center">Daily activities</h1>
        <p class="text-center text-gray-500">Activities I'd do outside of work and academics.</p>
      </header>
      <section class="mb-6" data-aos="fade-up-right">
        <h2 class="text-xl text-primary font-semibold mb-2">🏋️ Gym & Sport</h2>
        <p class="text-md text-gray-700">
          I regularly work out at the gym to maintain my health and fitness. In addition, exercise
          helps me reduce stress and stay focused in my daily life. My favorite types of workouts
          include weightlifting and cardio.
        </p>
        <div data-aos="zoom-in" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <img
            loading="lazy"
            src="/assets/img/lifting.jpeg"
            class="rounded-lg shadow-md object-cover w-full h-48"
          />
          <img
            loading="lazy"
            src="/assets/img/ari/1.jpg"
            class="rounded-lg shadow-md object-cover w-full h-48"
          />
        </div>
        <p class="text-sm text-gray-700 mt-2">
          Find more on
          <a class="text-pink-800" href="https://www.instagram.com/aariiwiiboowoo/" target="_blank"
            >Instagram</a
          >
          for story workout.
        </p>
      </section>
      <section class="mb-6" data-aos="fade-up-left">
        <h2 class="text-xl text-primary font-semibold mb-2">🌍 Traveling & Camping</h2>
        <p class="text-md text-gray-700">
          I also enjoy traveling to new places, both within the country and abroad. Through
          traveling, I gain many new experiences, learn about local cultures, and broaden my
          perspective of the world. I also enjoy camping — it really helps me relax.
        </p>
        <div data-aos="zoom-in" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <img
            loading="lazy"
            src="/assets/img/traveling.jpeg"
            class="rounded-lg shadow-md object-cover w-full h-48"
          />
          <img
            loading="lazy"
            src="/assets/img/camp.jpg"
            class="rounded-lg shadow-md object-cover w-full h-48"
          />
        </div>
        <p class="text-sm text-gray-700 mt-2">
          Find more on
          <a class="text-pink-800" href="https://www.instagram.com/aariiwiiboowoo/" target="_blank"
            >Instagram</a
          >
          for story travel.
        </p>
      </section>
    </div>
    <ColaseFoto />
  </div>
</template>

<script setup>
import ColaseFoto from '@/components/personal/ColaseFoto.vue'
</script>

<style>
</style>