<template>
  <div class="Contact">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Contact', []),
    ...mapGetters('Contact', [])
  },

  methods: {
    ...mapMutations('Contact', []),
    ...mapActions('Contact', [])
  }
}
</script>
