<template>
  <div class="container" style="max-width: 400px;">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if (username.value && password.value) {
    localStorage.setItem('loggedIn', 'true')
    router.push('/dashboard')
  } else {
    alert('Please fill in both fields.')
  }
}
</script>
