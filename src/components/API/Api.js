import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d0b641df-0481-4921-9184-40b83f97f479"
    }
})

export const authApi = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

// export const getAuthApi = () => {
//     return instance.get(`auth/me`)
//         .then(response => response.data);
// }

export const profileApi = { // Зробив в однієї компоненті
    getProfileApi(userId) {
        return instance.get(`profile/` + userId)
        // .then(response => response.data);
    },
    getStatusApi(userId) {// Статус нашего профайла, ДАЛ статус
        return instance.get(`profile/status/` + userId)
    },
    putUpdateStatusApi(status) { //Зміна статуса на Сервері, це Пут запрос і нам тут потрібен Статус, котрій вже в нас є
        return instance.put(`profile/status`, {status: status})
    },
    safePhotoApi(photoFile) { //
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileApi(profile) { //
        return instance.put(`profile`, profile)
    }

};


export const usersApi = {
    get(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
};

export const securityApi = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
    }
}
//
// export const getUserApi = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//
// };
//
// export const getFollowApi = (id) => {
//     return instance.post(`follow/${id}`, {})
//
// };
//
// export const getUnfollowApi = (id) => {
//     return instance.delete(`follow/${id}`)
//
// };
