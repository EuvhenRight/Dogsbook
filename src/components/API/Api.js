import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6589dbfc-eeab-44a6-81d1-93c9dcff425d"
    }
})

export const getAuthApi = () => {
    return instance.get(`auth/me`)
        .then(response => response.data);
};

export const getProfileApi = (userId) => {
    return instance.get(`profile/` + userId)
        .then(response => response.data);
};

export const getUserApi = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
};

export const getFollowApi = (id) => {
    return instance.post(`follow/${id}`, {})
        .then(response => response.data);
};

export const getUnfollowApi = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data);
};
