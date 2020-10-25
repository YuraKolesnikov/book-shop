<template>
  <div class="Profile">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Profile', []),
    ...mapGetters('Profile', [])
  },

  methods: {
    ...mapMutations('Profile', []),
    ...mapActions('Profile', [])
  }
}
</script>
