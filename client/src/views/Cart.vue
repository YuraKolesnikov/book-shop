<template>
  <div class="Cart">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Cart', []),
    ...mapGetters('Cart', [])
  },

  methods: {
    ...mapMutations('Cart', []),
    ...mapActions('Cart', [])
  }
}
</script>
