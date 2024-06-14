<script>
import LeftNav from '@/components/LeftNav.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'PageHomeView',
  components: {
    LeftNav,
    TopNav,
  },
};
</script>

<template>
  <div class="bg-neutral-950">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">

      <!-- LEFT HAND SIDE NAVBAR COMPONENT -->
      <LeftNav @tab-selected="handleTabSelected" />

      <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
        <section class="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">

          <!-- TOP SIDE NAVBAR COMPONENT -->
          <TopNav />

          <section class="flex flex-col justify-center mt-6 max-md:max-w-full">
            <div class="flex flex-col self-start px-5 max-md:max-w-full">
              <h1 class="text-4xl font-semibold tracking-tighter leading-9 text-red-500 max-md:max-w-full">
                Featured playlists
              </h1>
              <p class="mt-2 text-base leading-6 text-ellipsis text-stone-400 max-md:max-w-full">
                Welcome to Atrocity! Stay a while and explore what we have in store!
              </p>
            </div>
            <section class="flex-wrap content-start mt-8 max-md:pr-5 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow leading-[150%] max-md:mt-8">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7e45ffc8814a7cfc9824b06cf751e6eca334a2110e03c2af10ff0152b6f33f?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-full aspect-square" alt="Playlist 1 cover"/>
                    <div class="flex flex-col mt-3">
                      <h2 class="text-xl font-medium text-white text-ellipsis">
                        Playlist 1
                      </h2>
                      <p class="text-base text-ellipsis text-stone-400">
                        Description of playlist
                      </p>
                    </div>
                  </div>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow leading-[150%] max-md:mt-8">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2f8c5511f3711b72d54bb4945b26b74dab3af8a0caa0a5be9ffcaa6a682d25?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-full aspect-square" alt="Playlist 2 cover"/>
                    <div class="flex flex-col mt-3">
                      <h2 class="text-xl font-medium text-white text-ellipsis">
                        Playlist 2
                      </h2>
                      <p class="text-base text-ellipsis text-stone-400">
                        Description of playlist
                      </p>
                    </div>
                  </div>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow leading-[150%] max-md:mt-8">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4cb0d3caa164d19bb108163ea2ecc1abffded914e969966af49fa177392095?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-full aspect-square" alt="Playlist 3 cover"/>
                    <div class="flex flex-col mt-3">
                      <h2 class="text-xl font-medium text-white text-ellipsis">
                        Playlist 3
                      </h2>
                      <p class="text-base text-ellipsis text-stone-400">
                        Description of playlist
                      </p>
                    </div>
                  </div>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow leading-[150%] max-md:mt-8">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a2732544bbc4c1f44cdbf34e8d1872c6b329c1e1b9b9a64094e124d522b846?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-full aspect-square" alt="Playlist 4 cover"/>
                    <div class="flex flex-col mt-3">
                      <h2 class="text-xl font-medium text-white text-ellipsis">
                        Playlist 4
                      </h2>
                      <p class="text-base text-ellipsis text-stone-400">
                        Description of playlist
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </section>
        <section class="flex flex-col self-start px-5 mt-24 max-md:mt-10 max-md:max-w-full">
          <h1 class="text-4xl font-semibold tracking-tighter leading-9 text-red-500 max-md:max-w-full">
            Popular artists right now
          </h1>
          <p class="mt-2 text-base leading-6 text-ellipsis text-stone-400 max-md:max-w-full">
            Explore the biggest names in Atrocity!
          </p>
        </section>
        <section class="flex flex-wrap gap-5 justify-between content-start pr-16 mt-8 text-white leading-[150%] max-md:pr-5">
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a48cbdbc0729c845458b1f02423bfb4c64df2b69902c046e7a3740593744f9d6?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">R&B</p>
            </div>
          </article>
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/817d62b68a327e697a602db1d8069aa8f35716d6c460234895883699cc6cded4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">Indie pop</p>
            </div>
          </article>
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46314a8b59c76db6e0475a5752f3513fbb521afda3c3497c260b556f0ffd1432?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">Hip hop</p>
            </div>
          </article>
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80cf5656d4c9b77507bded6021d628ada15c1c8831b52127fc73433a7afe6d2?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">Electronic</p>
            </div>
          </article>
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb55c627dd4ef47bae5feb4861c6bc369e4c01723c979dde6780ad2a0baccfcd?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">R&B</p>
            </div>
          </article>
          <article class="flex flex-col">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/855ba0d63c9102b47955e20d80857aac87c7a56a3e2e6a15f5ee4c8c52ed156a?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-36 aspect-square" alt="Artist Image"/>
            <div class="flex flex-col mt-3">
              <h2 class="text-xl font-medium text-ellipsis">Artist Name</h2>
              <p class="text-base text-ellipsis">Rock</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  </div>
</template>