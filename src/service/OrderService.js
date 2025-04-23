import { axiosJWT } from "./UserService"

export const createOrder = async (data, access_token) => {
    const res = await axiosJWT.post(`/api/order/create`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getOrderByUserId = async (id, access_token) => {
    const res = await axiosJWT.get(`/api/order/get-all-order/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getDetailsOrder = async (id, access_token) => {
    const res = await axiosJWT.get(`/api/order/get-details-order/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllOrder = async (access_token) => {
    const res = await axiosJWT.get(`/api/order/get-all-order`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const cancelOrder = async (id, access_token, orderItems) => {
    const res = await axiosJWT.delete(
        `/api/order/cancel-order/${id}`,
        {
            data: orderItems,
            headers: {
                token: `Bearer ${access_token}`,
            }
        }
    );
    return res.data;
};
