<template>
  <header class="flex flex-col justify-center self-end max-w-full w-[304px] sticky top-0">
    <div class="flex gap-5 justify-center">
      <button class="justify-center px-6 py-3.5 my-auto text-base font-medium leading-6 text-white whitespace-nowrap bg-red-700 rounded-lg shadow-sm max-md:px-5">
        Upload
      </button>
      <img :src="profilePictureUrl" class="aspect-square w-[60px]" alt="User profile" />
    </div>
  </header>
</template>

<script setup>
import {useUserStore} from '@/stores/user';
import {computed, onMounted} from 'vue';

const userStore = useUserStore();

const user = computed(() => userStore.user);
const profilePictureUrl = computed(() => {
  return user.value?.profilePictureLocation;
});

onMounted(async () => {
  console.log('Component mounted, fetching user data...');
  await userStore.fetchCurrentUser();
  console.log('User data after fetch:', user.value);
});
</script>
