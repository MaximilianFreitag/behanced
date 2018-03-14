var axios = require('axios')

module.exports = {
  fetchProjects: function (field) {
    var encodedURI = window.encodeURI('http://www.behance.net/v2/projects?client_id=' + API_KEY + '&sort=appreciations&field=' + field)

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.projects
      })
  }
}
