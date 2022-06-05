import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage, setTotalCount, setPreloader
} from "../../redux/users-Reducer";
import * as axios from "axios";
import Preloader from "../general/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onChangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setPreloader(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedPage={this.onChangedPage}
                users={this.props.users}
                unfollow={this.props.unFollow}
                follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return
//     }
// }

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, setPreloader})(UsersContainer);
