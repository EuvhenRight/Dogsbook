import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unFollow,
    setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate
} from "../../redux/users-Reducer";
import Preloader from "../general/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching, getIsFetchingInProgress,
    getPageSize,
    getSetToggleFollowInProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-Selectors";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.setUsersThunkCreate(this.props.currentPage, this.props.pageSize);
    }


    onChangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.setUsersThunkCreate(pageNumber, this.props.pageSize);

    }

    render() {

        // if(!this.props.isAuth) return <Navigate to={"/login"} />;

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedPage={this.onChangedPage}
                users={this.props.users}
                unfollow={this.props.unFollow}
                follow={this.props.follow}
                isFetchingInProgress={this.props.isFetchingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => { // зробив селектори

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        setToggleFollowInProgress: getSetToggleFollowInProgress(state),
        isFetchingInProgress:getIsFetchingInProgress(state),
    }
};
//
// let mapStateToProps = (state) => {
//
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         setToggleFollowInProgress: state.usersPage.setToggleFollowInProgress,
//         isFetchingInProgress:state.usersPage.isFetchingInProgress,
//     }
//
// }

// let AuthRedirectComponent = withAuthRedirect(UsersContainer); // Хок на редирект, коли ти не за логінений тебе не пустить на страницю

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate}),
)(UsersContainer)

// export default connect(mapStateToProps, {
//     follow, unFollow, setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate})(AuthRedirectComponent);
