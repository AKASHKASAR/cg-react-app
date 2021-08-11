import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

let Login = (props) => {

    const history = useHistory();

    const [login, setLogin] = useState({
        id: 0,
        name: '',
        salary: 0
    }); // from axios 

    // initilize states to prevent undefined error, in case used these fields anywhere else in future 
    useEffect(
        () => {
            setLogin({
                email: '',
                password: ''
            }
            );
        }, []);

    const handleLogin = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    };

    const submitLogin = (event) => {
        console.log(login.email);
        console.log(login.password);
        history.push('/home');
        // axios.post(`/login`, login)
        //     .then((response) => {
        //         console.log(response.data.name);
        //     }).catch((error) => {
        //         console.log(error.message)
        //     });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="row">
                <form className="form form-group form-dark col-sm-6 mt-3" onSubmit={submitLogin}>
                    <div className="row mb-3">
                        <label for="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={login.email}
                                onChange={handleLogin}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                value={login.password}
                                onChange={handleLogin} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3 d-flex align-items-center">
                            <button type="submit" className="btn btn-primary" onClick={submitLogin}>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Login;












