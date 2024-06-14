<script>
import api, { getCsrfToken } from '@/api';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'PageAuthView',
  data() {
    return {
      isSignUp: true, // Flag to toggle between signup and login form
      signupForm: {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      loginForm: {
        email: '',
        password: ''
      },
      error: '' // Error message to be displayed
    };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    // Check the query parameter and set the initial form state
    const isLoginMode = route.query.mode === 'login';

    return { router, isLoginMode };
  },
  methods: {
    toggleForm() {
      // Toggle between signup and login form
      this.isSignUp = !this.isSignUp;
      // Reset error message
      this.error = '';
    },
    async handleSubmit() {
      this.error = '';
      try {
        await getCsrfToken(); // Get CSRF token for security
        if (this.isSignUp) {
          await this.signUp();
        } else {
          await this.logIn();
        }
      } catch (error) {
        this.error = error.response.data.message || 'An error occurred';
      }
    },
    async signUp() {
      const { email, username, password, confirmPassword } = this.signupForm;
      if (password !== confirmPassword) {
        this.error = 'Passwords do not match';
        return;
      }
      const response = await api.post('api/register', {
        email,
        username,
        password,
        password_confirmation: confirmPassword
      });
      const token = response.data.token;
      localStorage.setItem('token', token); // Store the token
      await this.router.push('/home'); // Redirect to home route on successful signup
    },
    async logIn() {
      const { email, password } = this.loginForm;
      const response = await api.post('api/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token); // Store the token
      await this.router.push('/home'); // Redirect to home route on successful login
    }
  },
  created() {
    // Set initial form mode based on query parameter
    this.isSignUp = !this.isLoginMode;
  }
};
</script>

<template>
  <section class="absolute inset-0 flex justify-center py-20 text-white bg-neutral-950 max-md:px-5">
    <transition name="fade" mode="out-in">
      <div
          v-if="isSignUp"
          key="signUp"
          class="flex flex-col mt-16 max-w-full w-[400px] max-md:mt-10"
      >
        <header class="flex flex-col self-center text-center">
          <h1 class="text-2xl font-semibold">Create an Atrocity</h1>
          <p class="mt-1 text-base">Enter your email to sign up for this app</p>
        </header>
        <form @submit.prevent="handleSubmit" class="flex flex-col mt-6 text-xl text-zinc-500">
          <label for="signup-email" class="sr-only">Email</label>
          <input
              v-model="signupForm.email"
              type="email"
              id="signup-email"
              class="px-4 py-2 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="email@domain.com"
              aria-label="Email"
          />
          <label for="signup-username" class="sr-only">Username</label>
          <input
              v-model="signupForm.username"
              type="text"
              id="signup-username"
              class="px-4 py-2 mt-4 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="username"
              aria-label="Username"
          />
          <label for="signup-password" class="sr-only">Password</label>
          <input
              v-model="signupForm.password"
              type="password"
              id="signup-password"
              class="px-4 py-2 mt-4 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="password"
              aria-label="Password"
          />
          <label for="signup-confirm-password" class="sr-only">Confirm Password</label>
          <input
              v-model="signupForm.confirmPassword"
              type="password"
              id="signup-confirm-password"
              class="px-4 py-2 mt-4 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="confirm password"
              aria-label="Confirm Password"
          />
          <button
              type="submit"
              class="px-4 py-2 mt-4 text-white bg-red-700 rounded-lg"
          >
            Sign up
          </button>
        </form>
        <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
        <div class="flex gap-2 justify-center items-center mt-6 text-base text-zinc-500">
          <div class="flex-1 h-px bg-neutral-200"></div>
          <span>or</span>
          <div class="flex-1 h-px bg-neutral-200"></div>
        </div>
        <button
            @click="toggleForm"
            class="px-4 py-2 mt-6 font-medium rounded-lg bg-zinc-900"
        >
          Log in to an existing account
        </button>
        <p class="mt-6 text-base text-center">
          By clicking sign up, you agree to our <span class="text-white">Terms of Service</span> and
          <span class="text-white">Privacy Policy</span>
        </p>
      </div>
      <div v-else key="logIn" class="flex flex-col mt-16 max-w-full w-[400px] max-md:mt-10">
        <header class="flex flex-col self-center text-center">
          <h1 class="text-2xl font-semibold">Log in to your Atrocity</h1>
          <p class="mt-1 text-base">Enter your email and password to log in</p>
        </header>
        <form @submit.prevent="handleSubmit" class="flex flex-col mt-6 text-xl text-zinc-500">
          <label for="login-email" class="sr-only">Email</label>
          <input
              v-model="loginForm.email"
              type="email"
              id="login-email"
              class="px-4 py-2 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="email@domain.com"
              aria-label="Email"
          />
          <label for="login-password" class="sr-only">Password</label>
          <input
              v-model="loginForm.password"
              type="password"
              id="login-password"
              class="px-4 py-2 mt-4 rounded-lg border bg-neutral-950 border-zinc-900"
              placeholder="password"
              aria-label="Password"
          />
          <button
              type="submit"
              class="px-4 py-2 mt-4 text-white bg-red-700 rounded-lg"
          >
            Log in
          </button>
        </form>
        <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
        <div class="flex gap-2 justify-center items-center mt-6 text-base text-zinc-500">
          <div class="flex-1 h-px bg-neutral-200"></div>
          <span>or</span>
          <div class="flex-1 h-px bg-neutral-200"></div>
        </div>
        <button
            @click="toggleForm"
            class="px-4 py-2 mt-6 font-medium rounded-lg bg-zinc-900"
        >
          Create an Atrocity
        </button>
      </div>
    </transition>
  </section>
</template>

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
