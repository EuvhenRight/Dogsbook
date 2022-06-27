import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth-Reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {

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

// export default connect(mapStateToProps, {setAuthUserLogin, authUserThunk})(HeaderContainer);
// Супер функція компоновки с натівного Джава Скрипта, у кінці ставимо ProfileContainer,
// а спочатку всі обкладенкі та Хокі

export default compose(
    connect(mapStateToProps, {logoutThunk,
    }))(HeaderContainer);