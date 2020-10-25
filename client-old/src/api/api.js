const { Axios } = require('./axios')
console.log('Axios loaded')
export const api = (url, queryParams = null) => {
  return {
    post: data => Axios.post(url, data)
      .then(res => res)
      .catch(e => console.error(e)),

    get: () => Axios.get(url)
      .then(res => res)
      .catch(e => console.error(e)),

    put: data => Axios.put(url, data)
      .then(res => res)
      .catch(e => console.error(e)),

    delete: () => Axios.delete(url)
      .then(res => res)
      .catch(e => console.error(e))
  }
}
