<template>
  <div class="v-payment-method"></div>
</template>

<script>
import VCardCredentials from './VCardCredentials';
import VCardOnDelivery from './VCardOnDelivery';
import VCashOnDelivery from './VCashOnDelivery';
import PaymentModel from '@/models/PaymentModel';

export default {
  components: {
    VCardCredentials,
    VCardOnDelivery,
    VCashOnDelivery,
  },

  props: {},

  data() {
    return {
      currentPaymentMethod: PaymentModel.LIST[0].id
    }
  },

  computed: {
    currentComponent() {
      let component = null

      switch (this.currentPaymentMethod) {
        case PaymentModel.CASH_ON_DELIVERY.id:
          component = 'V'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-payment-method {

}
</style>
