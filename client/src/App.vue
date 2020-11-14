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
import CategoryModel from '@/models/CategoryModel';
export default {
  async mounted() {
    const result = await api('/products/create').post({
      title: '',
      author: 'Jack London',
      price: 35,
      category: CategoryModel.BIOGRAPHY.id,
      publish_year: 2020,
      created_at: new Date().toLocaleDateString().split('/').join('.')
    })

    console.log(result)
  }
}
</script>
