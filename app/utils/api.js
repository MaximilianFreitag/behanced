const axios = require('axios')

const clientId = `?client_id=${API_KEY}`

module.exports = {
  fetchProjects: function (field) {
    const encodedURI = window.encodeURI(`https://api.behance.net/v2/projects${clientId}&sort=appreciations&field=${field}`)

    return axios.get(encodedURI)
      .then(({ data }) => data.projects)
  },
  fetchAllFields: function () {
    const encodedURI = window.encodeURI(`https://api.behance.net/v2/fields${clientId}`)

    return axios.get(encodedURI)
      .then(({ data }) => data.fields)
  }
}
