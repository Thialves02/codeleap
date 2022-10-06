const axios = require('axios').default;

export const Actions = {
    baseUrl: "https://dev.codeleap.co.uk/careers/",

    getAll: () => {
        return axios.get(Actions.baseUrl)
            .then((response) => response.data.results)
            .catch((error) => alert(error))
    },

    post: (body) => {
        return axios.post(Actions.baseUrl, body)
            .then((response) => response)
            .catch((error) => alert(error))
    },

    update: (id, body) => {
        return axios.patch(`${Actions.baseUrl}${id}/`, body)
            .then((response) => (response.data))
            .catch((error) => alert(error))
    },

    delete: (id) => {
        return axios.delete(`${Actions.baseUrl}${id}/`)
            .then((response) => response)
            .catch((error) => alert(error))
    }
}