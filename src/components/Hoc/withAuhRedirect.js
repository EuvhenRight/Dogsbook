import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) =>({// змінна для того щоб витащити из стора цю строку
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => { // Хок на редирект, коли ти не за логінений тебе не пустить на страницю

    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Navigate to={"/login"} />;

            return <Component {...this.props} /> // Повертає Копмоненту зі всіма пропсами
        }
    }

    let connectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);//  робимо Коннект, спочатку
    // щоб витащити дані зі стора: isAuth: state.auth.isAuth

    return connectAuthRedirectComponent;
}