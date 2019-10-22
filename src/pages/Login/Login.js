import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch  } from "react-redux";

import { login, logout } from "../../store/modules/auth/actions";
import { increment, decrement } from "../../store/modules/count/actions";

const Login = () => {
    const signed = useSelector(state => state.auth.signed);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{String(signed)}</h1>
            {signed ? (
                <div>
                    <button onClick={() => dispatch(logout())}>LOGOUT</button>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            ) : (
                <button onClick={() => dispatch(login())}>LOGIN</button>
            )}
        </div>
    )
}

export default Login;
