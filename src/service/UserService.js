import axios from "axios"

const baseURL = process.env.REACT_APP_API_URL
export const axiosJWT = axios.create({
    baseURL
})

axios.defaults.baseURL = baseURL

export const loginUser = async (data) => {
    const res = await axios.post('/api/user/sign-in', data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post('/api/user/sign-up', data)
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(`/api/user/get-details/${id}`, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        })
        return res.data
    } catch (error) {
        console.error('Get details error:', error.message)
        if (error.response) {
            console.error('Status:', error.response.status)
            console.error('Data:', error.response.data)
        }
        throw error
    }
}

export const deleteUser = async (id, access_token, data) => {
    const res = await axiosJWT.delete(`/api/user/delete-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllUser = async (access_token) => {
    const res = await axiosJWT.get(`/api/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const refreshToken = async () => {
    const res = await axios.post(`/api/user/refresh-token`, {
        withCredentials: true
    })
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`/api/user/log-out`)
    return res.data
}

export const updateUser = async (id, data, access_token) => {
    const res = await axiosJWT.put(`/api/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyUser = async (data, access_token) => {
    const res = await axiosJWT.post(`/api/user/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}