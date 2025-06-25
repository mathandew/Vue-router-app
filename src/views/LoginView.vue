<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <form @submit.prevent="login" style="border: 1px solid #ccc; padding: 30px; width: 300px;">
      <h2 style="text-align: center;">Login</h2>
      <input v-model="username" type="text" placeholder="Username" required
             style="width: 100%; margin: 10px 0; padding: 8px;" />
      <input v-model="password" type="password" placeholder="Password" required
             style="width: 100%; margin: 10px 0; padding: 8px;" />
      <button type="submit" style="width: 100%; padding: 10px; background-color: #005f99; color: white;">Login</button>
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
    alert('Please fill both fields')
  }
}
</script>
