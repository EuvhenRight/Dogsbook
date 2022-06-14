import {getFollowApi, getUnfollowApi, getUserApi} from "../components/API/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PRELOADER = "SET_PRELOADER";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFetchingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state, // Наш Стейт, с данными
                isFetchingInProgress: action.isFetching // массив в котором лежит айди пользователя и будет работать акшон isFetching
                    ? [...state.isFetchingInProgress, action.usersId]  // тернарное выражение = если в наш стейт пришли данные с айдишкой,
                    // когда мы нажали кнопку фоллов, этот айди попадает в стейт,
                    : state.isFetchingInProgress.filter(id => id != action.usersId)// : если мы удаляем подписку, нажимаем анфоллов, мы
                    // мы фитруем наш массив по принципу оставляем только не айди, которые не равны айди которое пришло в акшоне
            };
        default:
            return state;
    }
};

export const followSuccess = (usersId) => ({type: FOLLOW, usersId});
export const unFollowSuccess = (usersId) => ({type: UNFOLLOW, usersId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching});
export const setToggleFollowInProgress = (isFetching, usersId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, usersId});

export const setUsersThunkCreate = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));

        getUserApi(currentPage, pageSize).then(data => {
            dispatch(setPreloader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const follow = (usersId) => {
    return (dispatch) => {
        dispatch(setToggleFollowInProgress(true, usersId));
        getFollowApi(usersId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(usersId));
            }
            dispatch(setToggleFollowInProgress(false, usersId));
        });
    }
}

export const unFollow = (usersId) => {
    return (dispatch) => {
        dispatch(setToggleFollowInProgress(true, usersId));
        getUnfollowApi(usersId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollowSuccess(usersId));
            }
            dispatch(setToggleFollowInProgress(false, usersId));
        });
    }
}


export default usersReducer;
