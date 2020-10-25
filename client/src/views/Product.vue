<template>
  <div class="Product">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Product', []),
    ...mapGetters('Product', [])
  },

  methods: {
    ...mapMutations('Product', []),
    ...mapActions('Product', [])
  }
}
</script>
