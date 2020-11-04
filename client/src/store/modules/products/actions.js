import { api } from '@/api/api'

export default {
  GET_PRODUCTS: async ({ state, commit, dispatch }) => {
    const response = await api('/products', state.queryParams).get()
    const { data } = response
  },
  GET_SINGLE_PRODUCT: async ({ state, commit }, id) => {
    const response = await api(`/products/${id}`).get()
    const { data } = response
  }
}
