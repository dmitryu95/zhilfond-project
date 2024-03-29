import axios from 'axios'

const baseURL = process.env.VUE_APP_API_URL
const axiosInstance = axios.create({
    baseURL
})
export const getUsersById = (ids) => {
    let idsString = String(ids)
    let idsStr = idsString.split(', ')

    let queryParams = {
        params: {
            id: idsStr
        }
    }

    return axiosInstance.get(`/users`,queryParams);
}
export const getUserByName = (userNames) => {
    let userNamesString = String(userNames)
    const userArr = userNamesString.split(', ')

    let queryParams = {
        params: {
            username: userArr.map( userName => userName[0].toUpperCase() + userName.substring(1))
        }
    }

    return axiosInstance.get(`/users`, queryParams);
}
