<template>
  <div class="Checkout">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('User', []),
    ...mapGetters('User', [])
  },

  methods: {
    ...mapMutations('User', []),
    ...mapActions('User', [])
  }
}
</script>
