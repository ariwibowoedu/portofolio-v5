<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
// import AOS from 'aos'

const slides = ref(['assets/img/books.jpeg', 'assets/img/books1.jpg', 'assets/img/books2.jpg'])

const currentIndex = ref(0)
const totalSlides = slides.value.length
const autoSlideInterval = 5000

let slideInterval

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, autoSlideInterval)
}

const stopAutoSlide = () => {
  clearInterval(slideInterval)
}

onMounted(() => {
  // AOS.init()
  startAutoSlide()
})
// onMounted(startAutoSlide);
onBeforeMount(stopAutoSlide)
</script>
  


<template>
  <section class="md:mt-10 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
        <!-- Left side: Text content -->
        <div class="w-full lg:w-1/2 xl:mt-8 lg:mt-0">
          <div class="mb-6" data-aos="fade-up">
            <h1 data-aos="fade-up" class="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
              Hey there!
            </h1>
            <h1 class="text-4xl font-extrabold text-gray-800 leading-tight flex">
              I'm
              <span class="text-primary block md:inline ml-2">ari. </span>
            </h1>
          </div>
          <p data-aos="fade-right" class="text-lg text-gray-600 mb-6">
            I love to learning and continuously growing in the world of technology to create digital
            solutions that are both creative and functional.
          </p>
          <p data-aos="fade-right" class="text-lg text-gray-600 mb-6">Explore my projects here.</p>
          <!-- <ul class="list-disc list-inside text-gray-600 mb-6">
              <li>Delicious and easy-to-make recipes</li>
              <li>Tips from world-class chefs</li>
              <li>Healthy ingredients and meal plans</li>
            </ul> -->
          <router-link
            data-aos="fade-right"
            to="/projects"
            class="inline-block px-8 py-3 bg-blueberry text-white text-lg tracking-wider font-medium rounded-lg hover:bg-opacity-90"
          >
            Explore
          </router-link>
        </div>

        <!-- Right side: Image -->
        <div class="relative w-full overflow-hidden h-64 hidden lg:block lg:w-1/2">
          <div
            data-aos="fade-left"
            v-for="(slide, index) in slides"
            :key="index"
            class="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
            :style="{
              backgroundImage: `url(${slide})`,
              opacity: currentIndex === index ? 1 : 0,
              zIndex: currentIndex === index ? 1 : 0,
            }"
          >
            <!-- White Overlay covering 1/4 of the image -->
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to right, white 15%, rgba(255, 255, 255, 0) 100%)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  
  
<style scoped>
@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

.wave-hand {
  @apply inline-block;
  animation: wave 0.8s ease-in-out infinite;
  transform-origin: 70% 70%;
}
</style>
