<script>
import LeftNav from '@/components/LeftNav.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: "PageDashboardView",
  components: {
    LeftNav,
    TopNav,
  },
}
</script>

<template>
  <section class="pr-16 bg-neutral-950 max-md:pr-5">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">

      <!-- LEFT HAND SIDE NAVBAR COMPONENT -->
      <LeftNav @tab-selected="handleTabSelected" />

      <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
        <header class="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">

          <!-- TOP SIDE NAVBAR COMPONENT -->
          <TopNav />

          <section class="flex flex-col mt-6 max-md:max-w-full">
            <div class="flex gap-5 justify-between px-px w-full text-base leading-6 max-md:flex-wrap max-md:max-w-full">
              <div class="flex gap-0 p-1 font-medium rounded-lg bg-zinc-900 text-neutral-300">
                <button class="justify-center px-3 py-1 text-white bg-red-700 rounded shadow-sm">1 month</button>
                <button class="justify-center px-3 py-1 rounded">6 months</button>
                <button class="justify-center px-3 py-1 rounded">1 year</button>
              </div>
              <div class="flex gap-3 px-3 py-2 whitespace-nowrap rounded-lg border border-solid bg-neutral-950 border-zinc-900 text-zinc-500" role="search">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d180ede1e5a24e1790ffc4498c2d09888ca77d75df2507d9db1d38978cc0fcb?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Search icon" class="shrink-0 w-6 aspect-square" loading="lazy" />
                <span class="flex-1 text-ellipsis">Search...</span>
              </div>
            </div>
            <div class="px-px mt-8 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <header class="flex flex-col grow p-6 w-full text-base font-semibold leading-6 text-white rounded-lg border border-solid shadow-sm bg-neutral-950 border-zinc-900 max-md:px-5 max-md:mt-8">
                    <h2>Plays in total</h2>
                    <p class="mt-4 text-4xl tracking-tighter leading-10">10</p>
                    <p class="mt-4 font-medium text-zinc-500">+20% over last month</p>
                  </header>
                </article>
                <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <header class="flex flex-col grow p-6 w-full text-base font-semibold leading-6 text-white rounded-lg border border-solid shadow-sm bg-neutral-950 border-zinc-900 max-md:px-5 max-md:mt-8">
                    <h2>Your most played track</h2>
                    <p class="mt-4 text-4xl tracking-tighter leading-10">track name</p>
                    <p class="mt-4 font-medium text-zinc-500">1 month ago it was: track name</p>
                  </header>
                </article>
                <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <header class="flex flex-col grow justify-between p-6 w-full text-base font-semibold leading-6 text-white rounded-lg border border-solid shadow-sm bg-neutral-950 border-zinc-900 max-md:px-5 max-md:mt-8">
                    <h2>Followers gained</h2>
                    <p class="mt-4 text-4xl tracking-tighter leading-10">10,353</p>
                    <p class="mt-4 font-medium text-zinc-500">-8% over last month</p>
                  </header>
                </article>
              </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be6282af6f02a38159efca0fad1666d65c09cec1af324240185c1abc9e59b09c?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Graph of followers gained" class="mt-8 w-full border border-solid shadow-sm aspect-[2.33] border-zinc-900 max-md:max-w-full" loading="lazy" />
            <section class="mt-8 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <header class="flex flex-col grow px-6 py-6 w-full text-base leading-6 text-white rounded-lg border border-solid shadow-sm bg-neutral-950 border-zinc-900 max-md:px-5 max-md:mt-7 max-md:max-w-full">
                    <h2 class="font-semibold max-md:max-w-full">Top tracks</h2>
                    <ul class="flex gap-5 justify-between mt-6 font-semibold whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                      <li>Title</li>
                      <li class="text-right">Plays</li>
                    </ul>
                    <ul class="flex flex-col mt-2 max-md:max-w-full">
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 1</span>
                        <span class="self-start text-right">1</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 2</span>
                        <span class="self-start text-right">3</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 3</span>
                        <span class="self-start text-right">6</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 4</span>
                        <span class="self-start text-right">9</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 5</span>
                        <span class="self-start text-right">11</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 6</span>
                        <span class="self-start text-right">17</span>
                      </li>
                      <li class="flex gap-5 justify-center py-4 border-t border-solid border-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <span class="font-medium">Song 7</span>
                        <span class="self-start text-right">26</span>
                      </li>
                    </ul>
                  </header>
                </article>
                <aside class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <header class="flex flex-col grow p-6 w-full rounded-lg border border-solid shadow-sm bg-neutral-950 border-zinc-900 leading-[150%] max-md:px-5 max-md:mt-7 max-md:max-w-full">
                    <h2 class="text-base font-semibold text-white max-md:max-w-full">Top listeners</h2>
                    <ul class="flex flex-col justify-center mt-4 font-medium max-md:max-w-full">
                      <li class="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f1919f8880a433a8737762b18775f8696788800f713a52b619d9e443c48724?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Profile picture of Helena" class="shrink-0 w-12 aspect-square" loading="lazy" />
                        <div class="flex flex-col flex-1 my-auto">
                          <span class="text-base text-white">Helena</span>
                          <span class="text-xs text-stone-400">69 plays 4 followers</span>
                        </div>
                      </li>
                      <li class="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ddb65f50103064797540567ae8e273deb22b8440c253683b3b9b508d36d4b27?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Profile picture of Oscar" class="shrink-0 w-12 aspect-square" loading="lazy" />
                        <div class="flex flex-col flex-1 my-auto">
                          <span class="text-base text-white">Oscar</span>
                          <span class="text-xs text-stone-400">15 plays 42k followers</span>
                        </div>
                      </li>
                      <li class="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de6e5973421b2539c0a58b63a6042dc3c0cedf1264080aeaca9bd08939b19cf0?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Profile picture of Daniel" class="shrink-0 w-12 aspect-square" loading="lazy" />
                        <div class="flex flex-col flex-1 my-auto">
                          <span class="text-base text-white">Daniel</span>
                          <span class="text-xs text-stone-400">11 plays 8 followers</span>
                        </div>
                      </li>
                      <li class="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb5a5344f3d4e0032db94d8b7de162e7a402faf504103250f72d46d3fcf14879?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Profile picture of Daniel Jay Park" class="shrink-0 w-12 aspect-square" loading="lazy" />
                        <div class="flex flex-col flex-1 my-auto">
                          <span class="text-base text-white">Daniel Jay Park</span>
                          <span class="text-xs text-stone-400">9 plays 1 follower</span>
                        </div>
                      </li>
                      <li class="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bff91e0953a2871382be4e15b79cb1f7b3b2db84f4cf5ce1810de8d80249f2c?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Profile picture of Mark Rojas" class="shrink-0 w-12 aspect-square" loading="lazy" />
                        <div class="flex flex-col flex-1 my-auto">
                          <span class="text-base text-white">Mark Rojas</span>
                          <span class="text-xs text-stone-400">1 play 5.27m followers</span>
                        </div>
                      </li>
                    </ul>
                  </header>
                </aside>
              </div>
            </section>
          </section>
        </header>
      </main>
    </div>
  </section>
</template>

<style scoped>

</style>