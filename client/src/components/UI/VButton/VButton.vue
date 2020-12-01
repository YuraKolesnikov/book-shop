<template>
  <button
    class="v-button"
    :class="[
      color ? `v-button--${color}` : '',
      disabled ? `v-button--disabled` : '',
      rounded ? `v-button--rounded` : ''
    ]"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '' /* black | gray | main | outlined */
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  border: 0;
  cursor: pointer;
  display: block;
  user-select: none;
  transition: all .2s ease-out;

  &:focus, &:active {
    outline: 0;
  }
}

.v-button--main {
  background-color: $color-main;
  border: 0 none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding: 0 25px;
  text-transform: uppercase;
}

.v-button--gray {
  background-color: #ebebeb;
  color: #333;
  font-size: 14px;
  line-height: 33px;
  margin: 5px 5px 0 0;
  padding: 5px 15px;
  text-transform: capitalize;

  &:hover {
    background-color: #464646;
    color: #fff;
  }
}

.v-button--black {
  background-color: #222222;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  text-transform: uppercase;

  &:hover {
    background-color: lighten(#222222, 10%);
  }
}

.v-button--outlined {
  background: #FFF;
  border: 2px solid #333;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  line-height: 34px;
  padding: 2px 20px 0;
  text-transform: uppercase;
  transition: all 0.4s ease 0s;

  &:hover {
    border-color: #e59285;
    color: #e59285;
  }
}
</style>
