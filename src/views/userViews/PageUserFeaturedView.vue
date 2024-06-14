<script>
export default {
  name: "PageUserFeaturedView"
}
</script>

<template>
  <section class="flex flex-col mt-11 max-md:mt-10 max-md:max-w-full">
    <h2 class="justify-center self-start px-5 text-6xl font-semibold tracking-tighter text-red-500 leading-[60.5px] max-md:max-w-full max-md:text-4xl">Featured projects</h2>
    <section class="flex-wrap content-start mt-10 max-md:pr-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow leading-[150%] max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7e45ffc8814a7cfc9824b06cf751e6eca334a2110e03c2af10ff0152b6f33f?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Playlist 1" class="w-full aspect-square" />
            <div class="flex flex-col mt-3">
              <h3 class="text-xl font-medium text-white text-ellipsis">Playlist 1</h3>
              <p class="text-base text-ellipsis text-stone-400">Description of playlist</p>
            </div>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow leading-[150%] max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2f8c5511f3711b72d54bb4945b26b74dab3af8a0caa0a5be9ffcaa6a682d25?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Playlist 2" class="w-full aspect-square" />
            <div class="flex flex-col mt-3">
              <h3 class="text-xl font-medium text-white text-ellipsis">Playlist 2</h3>
              <p class="text-base text-ellipsis text-stone-400">Description of playlist</p>
            </div>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow leading-[150%] max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4cb0d3caa164d19bb108163ea2ecc1abffded914e969966af49fa177392095?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Playlist 3" class="w-full aspect-square" />
            <div class="flex flex-col mt-3">
              <h3 class="text-xl font-medium text-white text-ellipsis">Playlist 3</h3>
              <p class="text-base text-ellipsis text-stone-400">Description of playlist</p>
            </div>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow leading-[150%] max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a2732544bbc4c1f44cdbf34e8d1872c6b329c1e1b9b9a64094e124d522b846?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Playlist 4" class="w-full aspect-square" />
            <div class="flex flex-col mt-3">
              <h3 class="text-xl font-medium text-white text-ellipsis">Playlist 4</h3>
              <p class="text-base text-ellipsis text-stone-400">Description of playlist</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>

</style>