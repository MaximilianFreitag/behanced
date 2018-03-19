import axios from 'axios'

const clientId = `?client_id=${API_KEY}`

export function fetchProjects (field) {
  const encodedURI = window.encodeURI(`https://api.behance.net/v2/projects${clientId}&field=${field}&sort=appreciations`)

  return axios.get(encodedURI)
    .then(({ data }) => data.projects)
}

export function fetchAllFields () {
  const encodedURI = window.encodeURI(`https://api.behance.net/v2/fields${clientId}`)

  return axios.get(encodedURI)
    .then(({ data }) => data.fields)
}
