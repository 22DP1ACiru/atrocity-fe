<script>
import api from '@/api.js';
import LeftNav from "@/components/LeftNav.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "PageUserView",
  components: {TopNav, LeftNav},
  data() {
    return {
      text: "",
    };
  },
  async created() {
    const response = await api.get('/test');
    this.text = response.data;
  },
}
</script>

<template>
  <div class="bg-neutral-950">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">

      <!-- LEFT HAND SIDE NAVBAR COMPONENT -->
      <LeftNav @tab-selected="handleTabSelected" />

      <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
        <section class="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">

          <!-- TOP SIDE NAVBAR COMPONENT -->
          <TopNav />

          <section class="mt-11 max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <aside class="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow items-center text-base font-medium leading-6 text-white whitespace-nowrap max-md:mt-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd2a60321f42f50edb651ae90805a8aad950834908ce40ea2947fe1e688983c6?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" alt="Follow icon" class="aspect-[1.09] w-[218px]" />
                  <button class="justify-center px-6 py-3.5 mt-7 rounded-lg shadow-sm bg-zinc-900 max-md:px-5">Follow</button>
                </div>
              </aside>
              <section class="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col px-5 mt-3 whitespace-nowrap max-md:mt-7 max-md:max-w-full">
                  <h1 class="text-6xl font-semibold tracking-tighter text-red-500 leading-[60.5px] max-md:max-w-full max-md:text-4xl"> {{ $route.params.username }} </h1>
                  <p class="pr-24 mt-6 text-base leading-6 grow-0 text-ellipsis text-stone-400 max-md:max-w-full">
                    {{ text }}
                  </p>
                </div>
              </section>
            </div>
          </section>
        </section>
        <RouterView />
      </main>
    </div>
  </div>
</template>
