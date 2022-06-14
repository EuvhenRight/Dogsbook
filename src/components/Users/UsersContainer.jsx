import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unFollow,
    setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate
} from "../../redux/users-Reducer";
import Preloader from "../general/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuhRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


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

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        setToggleFollowInProgress: state.usersPage.setToggleFollowInProgress,
        isFetchingInProgress:state.usersPage.isFetchingInProgress,
    }

}

// let AuthRedirectComponent = withAuthRedirect(UsersContainer); // Хок на редирект, коли ти не за логінений тебе не пустить на страницю

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate}),
)(UsersContainer)

// export default connect(mapStateToProps, {
//     follow, unFollow, setCurrentPage, setToggleFollowInProgress, setUsersThunkCreate})(AuthRedirectComponent);
