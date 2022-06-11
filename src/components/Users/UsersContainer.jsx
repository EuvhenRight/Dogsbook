import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage, setTotalCount, setPreloader, setToggleFollowInProgress
} from "../../redux/users-Reducer";
import Preloader from "../general/Preloader/Preloader";
import {getUserApi} from "../API/Api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true);

        getUserApi(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }

    onChangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setPreloader(true);

        getUserApi(pageNumber, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
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
                setToggleFollowInProgress={this.props.setToggleFollowInProgress}
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
        isFetchingInProgress:state.usersPage.isFetchingInProgress

    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, setPreloader,setToggleFollowInProgress
})(UsersContainer);
