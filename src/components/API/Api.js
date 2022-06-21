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

export const profileApi = { // Зробив в одніеї компоненті
    getProfileApi(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatusApi(userId) {// Статус нашего профайла, ДАЛ статус
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    putUpdateStatusApi(status) { //Зміна статуса на Сервері, це Пут запрос і нам тут потрібен Статус, котрій вже в нас є
        return instance.put(`profile/status`,  {status: status})
            .then(response => response.data);
    }
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
