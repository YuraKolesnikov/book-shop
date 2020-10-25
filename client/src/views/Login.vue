<template>
  <div class="Login">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Login', []),
    ...mapGetters('Login', [])
  },

  methods: {
    ...mapMutations('Login', []),
    ...mapActions('Login', [])
  }
}
</script>
