import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authUserThunk, setAuthUserLogin} from "../../redux/auth-Reducer";
import {compose} from "redux";


class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.authUserThunk();
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

// export default connect(mapStateToProps, {setAuthUserLogin, authUserThunk})(HeaderComponent);
// Супер функція компоновки с натівного Джава Скрипта, у кінці ставимо ProfileContainer,
// а споатку всі обкладенкі та Хокі

export default compose(
    connect(mapStateToProps, {setAuthUserLogin, authUserThunk
    }))(HeaderComponent);