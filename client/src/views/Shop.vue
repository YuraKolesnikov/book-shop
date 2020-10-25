<template>
  <div class="Shop">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Shop', []),
    ...mapGetters('Shop', [])
  },

  methods: {
    ...mapMutations('Shop', []),
    ...mapActions('Shop', [])
  }
}
</script>
