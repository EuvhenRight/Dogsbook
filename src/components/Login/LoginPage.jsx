import React from 'react';
import classes from './LoginPage.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../general/FormsControl/FormsControl";
import {required} from "../general/Validations/Validations";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-Reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} type={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me
            </div>
            { props.error &&
                <div className={classes.error}>
                    {props.error}
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
        return <Navigate to={"/profile"} />;
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