import React from 'react';
import Profile from './Profile';
import {
    safeProfileThunk,
    savePhotoThunk,
    setUsersProfile,
    statusThunk,
    updateStatusThunk,
    usersProfileThunk
} from "../../redux/profile-Reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuhRedirect";
import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth, getProfile, getStatus} from "../../redux/profile-Selectors";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    refreshProfile() { //обновлялка профіля
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.usersProfileThunk(userId);
        this.props.statusThunk(userId);
    }


    componentDidMount() {

        this.refreshProfile(); // перший раз обновляється профіль
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId) { // коли приходять нові пропси, да вони не равни,
            // компонента перемалюється
            this.refreshProfile();
        }
    }


    render() {
        // if(!this.props.isAuth) return <Navigate to={"/login"} />;

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         status={this.props.status}
                         updateStatusThunk={this.props.updateStatusThunk}
                         savePhotoThunk={this.props.savePhotoThunk}
                         safeProfileThunk={this.props.safeProfileThunk}/>
            </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // Хок на редирект, коли ти не за логінений тебе не пустить на сторінку


let mapStateToProps = (state) => {

    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state), // стейт авторізаціі
        isAuth: getIsAuth(state),
    }
};

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {
//     setUsersProfile, usersProfileThunk},
// )(WithUrlDataContainerComponent);

export default compose(// Супер функція компоновки с натівного Джава Скрипта, у кінці ставимо ProfileContainer,
    // а спочатку всі обкладенки та Хокі
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUsersProfile, usersProfileThunk, statusThunk, updateStatusThunk, savePhotoThunk, safeProfileThunk
    }))(ProfileContainer);
