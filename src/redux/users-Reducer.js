import {usersApi} from "../components/API/Api";
import {bindActionCreators} from "redux";

const FOLLOW = "dogsbook/user/FOLLOW";
const UNFOLLOW = "dogsbook/user/UNFOLLOW";
const SET_USERS = "dogsbook/user/SET_USERS";
const SET_CURRENT_PAGE = "dogsbook/user/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "dogsbook/user/SET_TOTAL_COUNT";
const SET_PRELOADER = "dogsbook/user/SET_PRELOADER";
const TOGGLE_FOLLOW_IN_PROGRESS = "dogsbook/user/TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
    users: [], pageSize: 10, totalItemsCount: 0, currentPage: 1, isFetching: true, isFetchingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
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
                ...state, users: state.users.map(u => {
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
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state, totalItemsCount: action.count
            };
        case SET_PRELOADER:
            return {
                ...state, isFetching: action.isFetching
            };
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state, // Наш Стейт, с данными
                isFetchingInProgress: action.isFetching // масив в котрому лежить айди користувача и буде працювати акшн isFetching
                    ? [...state.isFetchingInProgress, action.usersId]  // тернарное выражение = если в наш стейт пришли данные с айдишкой,
                    // когда мы нажали кнопку фоллов, этот айди попадает в стейт,
                    : state.isFetchingInProgress.filter(id => id !== action.usersId)// : если мы удаляем подписку, нажимаем анфоллов, мы
                // мы фильтруем наш массив по принципу оставляем только не айди, которые не равны айди которое пришло в акшоне
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
export const setToggleFollowInProgress = (isFetching, usersId) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, usersId
});

export const setUsersThunkCreate = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setPreloader(true));

        let response = await usersApi.get(currentPage, pageSize)
        dispatch(setPreloader(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalCount(response.data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, usersId, apiMethod, actionCreator) => {
        dispatch(setToggleFollowInProgress(true, usersId));

        let response = await apiMethod(usersId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(usersId));
        }
        dispatch(setToggleFollowInProgress(false, usersId));
}

export const follow = (usersId) => {
    return async (dispatch) => {
        let apiMethod = usersApi.follow.bind(usersApi);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, usersId, apiMethod, actionCreator);
    }
}

export const unFollow = (usersId) => {
    return async (dispatch) => {
        let apiMethod = usersApi.unfollow.bind(usersApi);
        let actionCreator = unFollowSuccess;
        followUnfollowFlow(dispatch, usersId, apiMethod, actionCreator);
    }
}

export default usersReducer;
