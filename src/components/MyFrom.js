import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super();
        this.state = { name: '' }; // -- compare Employee 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    handleSubmit(event) {
        alert(this.state.name);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>{this.state.name} </p>
            </div>
        )
    }
}
export default MyForm;

