<script setup>
import { useRouter } from 'vue-router';

// Set up Vue Router
const router = useRouter();

// Method to navigate to the login page
const goToLogin = () => {
  router.push({ path: '/auth', query: { mode: 'login' } });
};

// Method to navigate to the signup page
const goToSignUp = () => {
  router.push({ path: '/auth', query: { mode: 'signup' } });
};
</script>

<template>
  <div class="flex flex-col justify-center bg-neutral-950">
    <!-- Header Section -->
    <header class="flex flex-col w-full bg-neutral-950">
      <div class="flex flex-col px-16 pt-14 w-full font-medium text-white leading-[150%] max-md:px-5">
        <nav class="flex gap-5 justify-between w-full max-md:flex-wrap">
          <h1 class="p-2.5 text-xl whitespace-nowrap">Atrocity</h1>
          <div class="flex gap-5 text-base">
            <button @click="goToLogin" class="px-6 py-3.5 bg-red-700 rounded-lg shadow-sm max-md:px-5">Sign in</button>
            <button @click="goToSignUp" class="px-6 py-3.5 bg-red-700 rounded-lg shadow-sm max-md:px-5">Create an account</button>
          </div>
        </nav>
        <hr class="mt-14 h-px border bg-neutral-200 max-md:mt-10" />
      </div>
    </header>

    <!-- Main Section -->
    <main class="flex flex-col justify-center self-center mt-7 w-full text-white rounded-lg shadow-2xl max-w-[1211px] min-h-[947px] max-md:max-w-full relative">
      <img loading="lazy" src="../assets/landing.gif" alt="" class="object-cover absolute inset-0 w-full h-full opacity-10" />
      <div class="flex flex-col justify-center px-16 py-20 w-full z-10 max-md:px-5">
        <section class="flex flex-col justify-center py-12 mt-20 mb-12 ml-6 bg-neutral-950 bg-opacity-80 p-10 rounded-lg max-md:my-10">
          <h2 class="text-6xl font-bold tracking-tighter text-center max-md:text-4xl">Welcome to Atrocity</h2>
          <p class="mt-6 text-2xl leading-9 text-center text-stone-400">The new, modern hotspot for discovering new music and sharing your own to thousands of people worldwide.</p>
          <p class="mt-6 text-xl font-medium leading-8 text-center">
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing,
            essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto
            remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
          <form class="flex justify-center items-center self-center px-16 mt-6 w-full text-base leading-6 text-zinc-500 max-md:px-5">
            <div class="flex gap-5 justify-between items-center max-md:flex-wrap w-full">
              <label for="searchInput" class="sr-only">Search for artists, bands, tracks, albums</label>
              <input type="text" id="searchInput" placeholder="Search for artists, bands, tracks, albums" class="py-2 pr-4 pl-3 w-2/3 rounded-lg border bg-zinc-900 border-stone-400" aria-label="Search for artists, bands, tracks, albums" />
              <span class="my-auto text-center">or</span>
              <button class="px-6 py-3.5 font-medium text-white bg-red-700 rounded-lg shadow-sm max-md:px-5">Upload your own</button>
            </div>
          </form>
        </section>
      </div>
    </main>

    <!-- Featured Albums Section -->
    <section class="flex flex-col justify-center self-center mt-8 mb-8 w-full max-w-[1245px] max-md:max-w-full">
      <div class="flex flex-col self-start px-5">
        <h3 class="text-4xl font-semibold tracking-tighter leading-10 text-red-500">Featured albums</h3>
        <p class="mt-2.5 text-xl leading-7 text-stone-400">Welcome to Atrocity! Stay a while and explore what we have in store!</p>
      </div>
      <div class="flex-wrap content-start px-5 mt-10">
        <article class="flex gap-5 max-md:flex-col">
          <!-- Album 1 -->
          <div class="flex flex-col w-3/12 max-md:w-full">
            <div class="flex flex-col grow leading-[150%] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc96a9698ba644a1250686df88a7a468660dc7948ff7590118c1cc823dd75210?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Album 1 by Artist name" class="w-full aspect-square" />
              <div class="flex flex-col mt-3.5">
                <p class="text-2xl font-medium text-white">Album 1</p>
                <p class="text-xl text-stone-400">Artist name</p>
              </div>
            </div>
          </div>
          <!-- Album 2 -->
          <div class="flex flex-col ml-5 w-3/12 max-md:w-full max-md:ml-0">
            <div class="flex flex-col grow leading-[150%] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63d28093e4d564dd8b3a9a8d87a73595598d4518f7bd1193b8157f42af45af0f?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Album 2 by Artist name" class="w-full aspect-square" />
              <div class="flex flex-col mt-3.5">
                <p class="text-2xl font-medium text-white">Album 2</p>
                <p class="text-xl text-stone-400">Artist name</p>
              </div>
            </div>
          </div>
          <!-- Album 3 -->
          <div class="flex flex-col ml-5 w-3/12 max-md:w-full max-md:ml-0">
            <div class="flex flex-col grow leading-[150%] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e01c807ae2050d22156640e29e633666d4666d27f920efd00570bfef9b0ebe?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Album 3 by Artist name" class="w-full aspect-square" />
              <div class="flex flex-col mt-3.5">
                <p class="text-2xl font-medium text-white">Album 3</p>
                <p class="text-xl text-stone-400">Artist name</p>
              </div>
            </div>
          </div>
          <!-- Album 4 -->
          <div class="flex flex-col ml-5 w-3/12 max-md:w-full max-md:ml-0">
            <div class="flex flex-col grow leading-[150%] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79fc383793ac36df65b736bec6919fd7af8e6c819933cc2c764865efe113768?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Album 4 by Artist name" class="w-full aspect-square" />
              <div class="flex flex-col mt-3.5">
                <p class="text-2xl font-medium text-white">Album 4</p>
                <p class="text-xl text-stone-400">Artist name</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
