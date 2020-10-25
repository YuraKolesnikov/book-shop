<template>
  <div class="FAQ">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('FAQ', []),
    ...mapGetters('FAQ', [])
  },

  methods: {
    ...mapMutations('FAQ', []),
    ...mapActions('FAQ', [])
  }
}
</script>
