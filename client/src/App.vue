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

    const response = await api('/api/users/register').post({ username: 'cezar278@inbox.lv', password: 'Mrguitarmadness12' })
    console.log(response)
  }
}
</script>
