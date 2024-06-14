<template>
  <nav class="flex flex-col w-[22%] max-md:ml-0 max-md:w-full sticky top-0 h-screen">
    <header class="flex flex-col grow pt-3.5 pb-20 w-full text-base font-medium leading-6 text-white border-r border-solid bg-neutral-950 border-neutral-200 max-md:mt-10">
      <div class="justify-center p-2.5 text-xl font-semibold tracking-normal whitespace-nowrap">
        Atrocity
      </div>
      <section class="flex flex-col mt-3.5 whitespace-nowrap">
        <RouterLink
            to="/home"
            :class="['flex gap-4 px-4 py-2 rounded-lg max-md:px-5', isActive('/home') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b29dd362198d8be1849f933337056af4850c72c03751783c03d567db5d1bc646?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Home Icon"
          />
          <span class="flex-1 text-ellipsis">Home</span>
        </RouterLink>
        <RouterLink
            to="/search"
            :class="['flex gap-4 px-4 py-2 mt-1 rounded-lg max-md:px-5', isActive('/search') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cdd5122d96ade023675e3d5aec1ef819d14cfa11e548e09e637d51867050222?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Search Icon"
          />
          <span class="flex-1 text-ellipsis">Search</span>
        </RouterLink>
        <RouterLink
            to="/discover"
            :class="['flex gap-4 px-4 py-2 mt-1 rounded-lg max-md:px-5', isActive('/discover') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/663eec5c9ce2f04ceffd0d0ad368a709e41d4916dce509dd5ba36523aa9c867c?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Discover Icon"
          />
          <span class="flex-1 text-ellipsis">Discover</span>
        </RouterLink>
      </section>
      <section class="flex flex-col mt-8">
        <div class="justify-center px-4 font-semibold whitespace-nowrap">
          Library
        </div>
        <RouterLink
            to="/playlists"
            :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive('/playlists') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3957459846434a3838927a6a327deb1e7a135ffe115f6ac3bffe200691718b17?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Playlists Icon"
          />
          <span class="flex-1 text-ellipsis">Playlists</span>
        </RouterLink>
        <RouterLink
            to="/songs"
            :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive('/songs') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16abf5ee93cd1c969d76107d684e2f961b12ada4f3a5a5f14cc56de1a985c3c0?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Songs Icon"
          />
          <span class="flex-1 text-ellipsis">Songs</span>
        </RouterLink>
        <RouterLink
            to="/personalized"
            :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive('/personalized') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Personalized picks Icon"
          />
          <span class="flex-1 text-ellipsis">Personalized picks</span>
        </RouterLink>
      </section>
      <section class="flex flex-col mt-8">
        <div class="justify-center px-4 font-semibold whitespace-nowrap">
          User
        </div>
        <RouterLink
            to="/chat"
            :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive('/chat') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae209181622ab63cee7d5f017607bedde08be6571c0055aa661334b74aba039c?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 border-2 border-white border-solid aspect-square stroke-[2px] stroke-white"
              alt="Chat Icon"
          />
          <span class="flex-1 text-ellipsis">Chat</span>
        </RouterLink>
        <RouterLink
            to="/dashboard"
            :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive('/dashboard') ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="Dashboard Icon"
          />
          <span class="flex-1 text-ellipsis">Dashboard</span>
        </RouterLink>
        <RouterLink :to="`/user/${username}`"
                    :class="['flex gap-4 px-4 py-2 mt-2 whitespace-nowrap rounded-lg max-md:px-5', isActive(`/user/${username}`) ? 'bg-red-700' : 'bg-neutral-950']"
        >
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&"
              class="shrink-0 w-6 aspect-square"
              alt="My Atrocity Icon"
          />
          <span class="flex-1 text-ellipsis">My Atrocity</span>
        </RouterLink>
      </section>
    </header>
  </nav>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'LeftNav',
  setup() {
    const userStore = useUserStore();
    const username = computed(() => userStore.user?.username);
    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return {
      isActive, username
    };
  },
  data() {
    return {
      selectedTab: 'home'
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      this.$emit('tab-selected', tab);
    }
  }
};
</script>
