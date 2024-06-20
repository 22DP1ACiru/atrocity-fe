<template>
  <div class="bg-neutral-950">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <!-- LEFT HAND SIDE NAVBAR COMPONENT -->
      <LeftNav />

      <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
        <section class="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
          <!-- TOP SIDE NAVBAR COMPONENT -->
          <TopNav />

          <section class="mt-11 max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <aside class="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow items-center text-base font-medium leading-6 text-white whitespace-nowrap max-md:mt-4">
                  <img :src="profilePictureUrl" alt="User profile picture" class="aspect-[1.09] w-[218px]" />
                  <button v-if="isCurrentUser" @click="openEditModal" class="justify-center px-6 py-3.5 mt-7 rounded-lg shadow-sm bg-zinc-900 max-md:px-5">Edit</button>
                  <button v-else class="justify-center px-6 py-3.5 mt-7 rounded-lg shadow-sm bg-zinc-900 max-md:px-5">Follow</button>
                </div>
              </aside>
              <section class="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col px-5 mt-3 whitespace-nowrap max-md:mt-7 max-md:max-w-full">
                  <h1 class="text-6xl font-semibold tracking-tighter text-red-500 leading-[60.5px] max-md:max-w-full max-md:text-4xl">{{ user.username }}</h1>
                  <p class="pr-24 mt-6 text-base leading-6 grow-0 text-ellipsis text-stone-400 max-md:max-w-full">
                    {{ user.accountDescription }}
                  </p>
                </div>
              </section>
            </div>
          </section>
        </section>
        <RouterView />
      </main>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-5 rounded-lg">
        <h2>Edit Profile</h2>
        <form @submit.prevent="updateProfile">
          <div>
            <label for="username">Username</label>
            <input v-model="editForm.username" type="text" id="username" class="border p-2 rounded w-full" />
          </div>
          <div>
            <label for="accountDescription">Description</label>
            <textarea v-model="editForm.accountDescription" id="accountDescription" class="border p-2 rounded w-full"></textarea>
          </div>
          <div>
            <label for="profilePicture">Profile Picture</label>
            <input type="file" id="profilePicture" @change="handleProfilePictureChange" class="border p-2 rounded w-full" />
            <img v-if="editForm.profilePicturePreview" :src="editForm.profilePicturePreview" alt="Profile Picture Preview" class="mt-2 w-32 h-32 object-cover rounded-full" />
          </div>
          <div class="flex justify-end mt-4">
            <button type="button" @click="closeEditModal" class="mr-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from '@/api.js';
import LeftNav from "@/components/LeftNav.vue";
import TopNav from "@/components/TopNav.vue";
import { useUserStore } from '@/stores/user';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();
const user = ref({});
const isCurrentUser = computed(() => userStore.user?.username === user.value.username);
const showEditModal = ref(false);
const editForm = ref({
  username: '',
  accountDescription: '',
  profilePicture: null,
  profilePicturePreview: null
});

const profilePictureUrl = computed(() => {
  const location = user.value?.profilePictureLocation;
  return location ? `${location}` : 'http://localhost:8000/uploads/profiles/default.webp';
});

const fetchUser = async () => {
  try {
    const username = route.params.username;
    const response = await api.get(`/api/user/${username}`);
    console.log('Fetched user:', response.data); // Debugging log
    user.value = response.data;
    console.log('User ID after fetch:', user.value.userID); // Debugging log
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

const openEditModal = () => {
  editForm.value.username = user.value.username;
  editForm.value.accountDescription = user.value.accountDescription;
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
};

const handleProfilePictureChange = (event) => {
  const file = event.target.files[0];
  editForm.value.profilePicture = file;
  editForm.value.profilePicturePreview = URL.createObjectURL(file);
};

const updateProfile = async () => {
  try {
    if (!user.value.userID) {
      console.error('User ID is undefined');
      return;
    }
    console.log('Updating user with ID:', user.value.userID); // Debugging log

    const formData = new FormData();
    formData.append('username', editForm.value.username);
    formData.append('accountDescription', editForm.value.accountDescription);
    if (editForm.value.profilePicture) {
      formData.append('profilePicture', editForm.value.profilePicture);
    }

    const response = await api.put(`/api/user/${user.value.userID}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    user.value = response.data;
    closeEditModal();
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};

onMounted(() => {
  fetchUser();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}
</style>
