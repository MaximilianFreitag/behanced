var axios = require('axios')

module.exports = {
  fetchProjects: function (field) {
    var encodedURI = window.encodeURI('https://api.behance.net/v2/projects?client_id=' + API_KEY + '&sort=appreciations&field=' + field)

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.projects
      })
  },
  fetchFields: function () {
    var encodedURI = window.encodeURI('https://api.behance.net/v2/fields?client_id=' + API_KEY)

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.fields
      })
  }
}
