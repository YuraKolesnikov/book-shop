export default {
  UPDATE_QUERY_PARAMS: (state, { key, value }) => {
    state.queryParams[key] = [value]
  }
}
