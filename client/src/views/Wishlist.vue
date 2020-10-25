<template>
  <div class="Wishlist">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Wishlist', []),
    ...mapGetters('Wishlist', [])
  },

  methods: {
    ...mapMutations('Wishlist', []),
    ...mapActions('Wishlist', [])
  }
}
</script>
