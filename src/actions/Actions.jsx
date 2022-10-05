const axios = require('axios').default;

export const Actions = {
    baseUrl: "https://dev.codeleap.co.uk/careers/",

    getAll: () => {
        return axios.get(Actions.baseUrl)
            .then((response) => response.data.results)
            .catch((error) => alert(error))
    },

    post: (body) => axios.post(Actions.baseUrl, body).then((response) => console.log(response))
        .catch((error) => alert(error)),

    update: (id, body) => {
        return axios.put(`${Actions.baseUrl}/${id}`, {
            body: JSON.stringify(body)
        }).then((response) => console.log(response))
            .catch((error) => alert(error))
    },

    delete: (id) => {
        return axios.delete(`${Actions.baseUrl}/${id}`)
            .then((response) => console.log(response))
            .catch((error) => alert(error))
    }
}