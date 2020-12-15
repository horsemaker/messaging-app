import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                <div className="login__text">
                    <h1>
                        SIGN IN
                    </h1>
                </div>
                <Button onClick={signIn} >
                    <strong>
                        SIGN IN WITH GOOGLE
                    </strong>
                </Button>
            </div>
        </div>
    );
}

export default Login;
