import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserLogin} from "../../redux/auth-Reducer";
import {getAuthApi} from "../API/Api";


class HeaderComponent extends React.Component {

    componentDidMount() {

        getAuthApi().then(data => {

                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserLogin(id, email, login);
                }
            });
    }
    render() {

        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, {setAuthUserLogin})(HeaderComponent);