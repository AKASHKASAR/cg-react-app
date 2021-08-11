import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

class Redirection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="display-1 text-primary">Redirection Component</h1>
                <p> </p>
                <Link to={'/home'}>
                    <button>Home</button>
                </Link>
            </div>
        );

    }
}

export default Redirection;