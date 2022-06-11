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
    isFetchingInProgress: false
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
                ...state,
                isFetchingInProgress: action.isFetching
            };
        default:
            return state;
    }
};

export const follow = (usersId) => ({type: FOLLOW, usersId});
export const unFollow = (usersId) => ({type: UNFOLLOW, usersId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching});
export const setToggleFollowInProgress = (isFetching) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching});

export default usersReducer;
