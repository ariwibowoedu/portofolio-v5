<template>
  <section class="md:mt-10 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
        <!-- left side: hero text-content -->
        <div class="w-full lg:w-1/2 xl:mt-8 lg:mt-0">
          <div class="mb-6" data-aos="fade-up">
            <h1 class="text-4xl font-extrabold text-gray-800 leading-tight mb-4" data-aos="fade-up">
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
          <router-link
            data-aos="fade-right"
            to="/projects"
            class="inline-block px-8 py-3 bg-blueberry text-white text-lg font-medium rounded-lg hover:bg-opacity-90"
          >
            Explore
          </router-link>
        </div>
        <!-- Right side image -->
      </div>
    </div>
  </section>
</template>


