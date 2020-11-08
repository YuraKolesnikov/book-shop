<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { api } from '@/api/api'

export default {
  async mounted() {
    const data = await api('/api/products').get()
    console.log(data)
  }
}
</script>
