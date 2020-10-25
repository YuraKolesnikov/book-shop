<template>
  <div class="BlogEntry">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Blog', []),
    ...mapGetters('Blog', [])
  },

  methods: {
    ...mapMutations('Blog', []),
    ...mapActions('Blog', [])
  }
}
</script>
