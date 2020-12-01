<template>
  <div>
    <v-icon-button icon-name="facebook" :outlined="true" />
    <v-icon-button icon-name="google" :outlined="true" />
    <v-icon-button icon-name="twitter" :outlined="true" />
    <v-icon-button icon-name="linkedin" :outlined="true" />
    <v-icon-button icon-name="youtube" :outlined="true" />
    <v-icon-button icon-name="love" />
    <v-icon-button icon-name="chat-bubble" />
    <v-icon-button icon-name="shopping-bag4" />
    <v-icon-button icon-name="shopping-cart-full" />
    <v-icon-button icon-name="heart-beat" />
    <v-icon-button icon-name="search" />
    <v-icon-button icon-name="love" :empty="true" />
    <v-icon-button icon-name="chat-bubble" :empty="true" />
  </div>
</template>
<script>
import VIconButton from 'Components/ui/VIconButton/VIconButton';
import { api } from 'Api';
export default {
  components: {
    VIconButton
  }
}
</script>
