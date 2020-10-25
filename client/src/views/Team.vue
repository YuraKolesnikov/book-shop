<template>
  <div class="Team">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState('Team', []),
    ...mapGetters('Team', [])
  },

  methods: {
    ...mapMutations('Team', []),
    ...mapActions('Team', [])
  }
}
</script>
