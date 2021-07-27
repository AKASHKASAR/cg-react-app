import React from 'react';

class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Sonu", salary: 10.5,
            phones: { first: 1010, second: 4141 }
        };
    }
    render() {
        return (<div className="App">
            <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
            <p> {this.state.phones.second} </p>
        </div>
        );
    }
}
export default Employee;

