import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import {setUsersProfile} from "../../redux/profile-Reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getProfileApi} from "../API/Api";


export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        getProfileApi(userId).then(data => {
                this.props.setUsersProfile(data);
            })
    }


    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
    });
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUsersProfile
}) (WithUrlDataContainerComponent);