<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <div>
      <span v-if="isLoggedIn" class="logout" @click="logout">Logout</span>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = computed(() => localStorage.getItem('loggedIn') === 'true')

function logout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>
