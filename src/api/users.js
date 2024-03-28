import axios from 'axios'
import index from "vuex";

const baseURL = process.env.VUE_APP_API_URL

const axiosInstance = axios.create({
    baseURL
})
export const getUsersById = (ids) => {
    let idsString = String(ids)
    let queryParams = idsString.split(', ')
        .map( (id, index) => ( index === 0) ? 'id=' + id : '&id=' + id ).join('')

    return axiosInstance.get(`/users?${queryParams}`);
}
export const getUserByName = (userNames) => {
    let userNamesString = String(userNames)

    const userArr = userNamesString.split(', ')
        .map((user, index) => {
            const username = user.trim();

            if (username) {
                return index === 0 ?
                    'username=' + username[0].toUpperCase() + username.substring(1) :
                    '&username=' + username[0].toUpperCase() + username.substring(1);
            } else {
                return '';
            }
        });

    let queryParams = userArr.join('')

    return axiosInstance.get(`/users?${queryParams}`);
}
