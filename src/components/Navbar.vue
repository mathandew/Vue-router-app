<template>
  <nav style="background-color: #005f99; padding: 10px;">
    <router-link to="/" style="margin-right: 15px; color: white;">Home</router-link>
    <router-link to="/about" style="margin-right: 15px; color: white;">About</router-link>
    <router-link to="/dashboard" style="margin-right: 15px; color: white;">Dashboard</router-link>
    <span v-if="isLoggedIn" @click="logout" style="cursor: pointer; color: red;">Logout</span>
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
