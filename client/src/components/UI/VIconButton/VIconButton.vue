<template>
  <button
      class="v-icon-button"
      :class="{
        'v-icon-button--outlined': outlined,
        'v-icon-button--empty': empty
      }">
    <i class="bi" :class="`bi-${iconName}`"></i>
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },

    outlined: {
      type: Boolean,
      default: false
    },

    empty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.v-icon-button {
  border: 0;
  border-radius: 100%;
  color: #333;
  font-size: 14px;
  height: 36px;
  line-height: 32px;
  margin-right: 10px;
  padding: 0;
  text-align: center;
  width: 36px;
  position: relative;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 300ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  .bi {
    height: 14px !important;
    width: 18px !important;
  }

  &:hover {
    color: #fff;
    background-color: #ce7852;
  }
}

.v-icon-button--outlined {
  border-radius: 100%;
  color: #333;
  display: inline-block;
  font-size: 32px;
  height: 32px;
  line-height: 32px;
  margin-right: 10px;
  padding: 0;
  text-align: center;
  transition: all 300ms ease-in 0s;
  width: 32px;

  &:hover {
    color: #ce7852;
    border-color: #ce7852;
  }
}

.v-icon-button--empty {
  background-color: transparent;
  font-size: 11px;
}
</style>
