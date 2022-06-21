import React from 'react';
import Profile from './Profile';
import {
    setUsersProfile,
    statusThunk,
    updateStatusThunk,
    usersProfileThunk
} from "../../redux/profile-Reducer";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuhRedirect";
import {compose} from "redux";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 24204;
        }

        this.props.usersProfileThunk(userId);
        this.props.statusThunk(userId);

    }

    render() {

        // if(!this.props.isAuth) return <Navigate to={"/login"} />;

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatusThunk={this.props.updateStatusThunk}/>
            </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // Хок на редирект, коли ти не за логінений тебе не пустить на страницю


let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    });
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {
//     setUsersProfile, usersProfileThunk},
// )(WithUrlDataContainerComponent);

export default compose(// Супер функція компоновки с натівного Джава Скрипта, у кінці ставимо ProfileContainer,
    // а споатку всі обкладенкі та Хокі
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUsersProfile, usersProfileThunk, statusThunk, updateStatusThunk
    }))(ProfileContainer);