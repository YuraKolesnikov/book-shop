<template>
  <div class="Shop">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Products', []),
    ...mapGetters('Products', [])
  },

  methods: {
    ...mapMutations('Products', []),
    ...mapActions('Products', [])
  }
}
</script>
