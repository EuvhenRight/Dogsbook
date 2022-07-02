import React from 'react';
import classes from './LoginPage.module.css'
import {reduxForm} from "redux-form";
import {createField, Input} from "../general/FormsControl/FormsControl";
import {required} from "../general/Validations/Validations";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-Reducer";
import {Navigate} from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", Input, [required])}
            {createField("password", "password", Input, [required], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"},
                "remember me")}
            {error &&
                <div className={classes.error}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginThunk})(Login);