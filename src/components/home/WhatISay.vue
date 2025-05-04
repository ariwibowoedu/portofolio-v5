<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top, theme(colors.indigo.100), white)] opacity-20"
    ></div>
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    ></div>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h1
        data-aos="fade-down"
        class="pb-4 text-3xl font-semibold tracking-wide text-center text-primary mb-4 border-b border-b-primary"
      >
        Qoutes
      </h1>
      <figure class="mt-10" data-aos="flip-down">
        <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <p>"Just Do"</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto w-20 rounded-full bg-cover" src="/assets/img/ari/9.jpg" alt="img" />
          <div
            class="mt-4 flex flex-col md:flex-row items-center justify-center space-x-3 text-base"
          >
            <div class="font-semibold text-gray-900">Ari W</div>
            <span>.</span>
            <div class="text-gray-600">President of himself.</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>