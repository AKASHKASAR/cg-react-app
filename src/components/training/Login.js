import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

// use history.push() to redirect to another component.

let Login = (props) => {

    const history = useHistory();

    const [AppUser, setAppUser] = useState({
        id: 0,
        name: '',
        salary: 0
    }); 
     
    useEffect(
        () => {
            setAppUser({
                username: '',
                password: ''
            }
            );
        }, []);

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...AppUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(AppUser.username);
        axios.post(`/login`, AppUser)
            .then((response) => {
                localStorage.setItem('token', response.data);
                console.log(response.data);
                if(response.data !== 'thisIsNotTheValidToken')
                history.push('/empdata');
            }).catch((error) => {
                console.log(error.message)
            });
        // history.push('/empdata');
        event.preventDefault();
    }
    return (
        <div className="container">
      <h1 className="display-1 text-primary">Login Component</h1>
            <div className="row">
                <form className="form form-group form-dark col-sm-6 mt-3" onSubmit={submitAppUser}>
                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label">username</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                value={AppUser.username}
                                onChange={handleAppUser}
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
                                value={AppUser.password}
                                onChange={handleAppUser} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3 d-flex align-items-center">
                            <button type="submit" className="btn btn-primary" onClick={submitAppUser}>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Login;












