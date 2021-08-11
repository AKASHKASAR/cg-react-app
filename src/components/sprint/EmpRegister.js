import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from "axios";
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

/*
code for Team 3 (Pooja Kate)
*/

class EmpRegister extends React.Component {

    constructor() {

        super();

        this.state = {
            fields: {},
            errors: {},

            orgName: '',

            empAdd: '',

            empContact: '',

            empEmail: '',

            empPass: '',

            role: 'EMPLOYER'



        }

        this.state.orgName = this.orgName.bind(this);
        this.state.empAdd = this.empAdd.bind(this);
        this.state.empContact = this.empContact.bind(this);
        this.state.empEmail = this.empEmail.bind(this);
        this.state.empPass = this.empPass.bind(this);
        this.state.EmpSignUp = this.EmpSignUp.bind(this);
        this.state.handleChange = this.handleChange.bind(this);
        this.state.userRegistrationForm = this.userRegistrationForm.bind(this);


    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["orgName"] = "";
            fields["empAdd"] = "";
            fields["empContact"] = "";
            fields["empPass"] = "";
            fields["empEmail"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["orgName"]) {
            formIsValid = false;
            errors["orgName"] = "*Please enter your orgName.";
        }

        if (typeof fields["orgName"] !== "undefined") {
            if (!fields["orgName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["orgName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["empEmail"]) {
            formIsValid = false;
            errors["empEmail"] = "*Please enter your email-ID.";
        }

        if (typeof fields["empEmail"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["empAdd"])) {
                formIsValid = false;
                errors["empEmail"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["empContact"]) {
            formIsValid = false;
            errors["empContact"] = "*Please enter your mobile no.";
        }

        if (typeof fields["empContact"] !== "undefined") {
            if (!fields["empContact"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["empContact"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["empPass"]) {
            formIsValid = false;
            errors["empPass"] = "*Please enter your empPass.";
        }

        if (typeof fields["empPass"] !== "undefined") {
            if (!fields["empPass"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
                formIsValid = false;
                errors["empPass"] = "*Please enter secure and strong empPass.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    orgName
        (event) {

        this.setState({ orgName: event.target.value })

    }

    empAdd
        (event) {

        this.setState({ empAdd: event.target.value })

    }
    empContact(event) {

        this.setState({ empContact: event.target.value })

    }

    empAdd(event) {

        this.setState({ empAdd: event.target.value })

    }


    empPass(event) {

        this.setState({ empPass: event.target.value })

    }

    EmpSignUp(event) {
        console.warn("Employer Register Successfully")
        fetch('http://localhost:8084/registerEmp', {

            method: 'post',

            headers: {

                'Accept': '/',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                orgName: this.state.orgName,
                empAdd: this.state.empAdd,
                empContact: this.state.empContact,
                empAdd: this.state.empAdd,
                empPass: this.state.empPass,
                role: this.state.role,
            })

        }).then((Response) => Response.json())

    }

}
render(


    <div className="app flex-row align-items-center">

        <Container>

            <Row className="justify-content-center">

                <Col md="9" lg="7" xl="6">

                    <Card className="mx-4">

                        <CardBody className="p-4">

                            <Form>

                                <div className="row" className="mb-2 pageheading">

                                    <div className="col-sm-12 btn btn-primary">

                                        Employer Register
                                    </div>

                                </div>

                                <InputGroup className="mb-3">
                                    <Input type="text" onChange={this.state.orgName} placeholder="Enter Organization Name" />

                                </InputGroup>

                                <InputGroup className="mb-3">

                                    <Input type="text" onChange={this.state.empAdd} placeholder="Enter address" />

                                </InputGroup>

                                <InputGroup className="mb-3">

                                    <Input type="number" onChange={this.state.empContact} placeholder="Enter contact" />

                                </InputGroup>

                                <InputGroup className="mb-4">

                                    <Input type="Email" onChange={this.state.empEmail} placeholder="Enter Email" />

                                </InputGroup>

                                <InputGroup className="mb-4">

                                    <Input type="password" onChange={this.state.empPass} placeholder="Enter Password" />

                                </InputGroup>

                                <div id="main-registration-container">
                                    <div id="register">
                                        <h3>Sign Up</h3>
                                        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                                            <label>Name</label>
                                            <input type="text" name="orgName" value={this.state.fields.orgName} onChange={this.handleChange} />
                                            <div className="errorMsg">{this.state.errors.orgName}</div>
                                            <label>Email ID:</label>
                                            <input type="text" name="empAdd" value={this.state.fields.empAdd} onChange={this.handleChange} />

                                            <div className="errorMsg">{this.state.errors.orgName}</div>
                                            <label>Email ID:</label>
                                            <input type="text" name="empAdd" value={this.state.fields.empAdd} onChange={this.handleChange} />
                                            <div className="errorMsg">{this.state.errors.empAdd}</div>
                                            <label>Mobile No:</label>
                                            <input type="text" name="empContact" value={this.state.fields.empContact} onChange={this.handleChange} />
                                            <div className="errorMsg">{this.state.errors.empContact}</div>
                                            <label>empPass</label>
                                            <input type="empPass" name="empPass" value={this.state.fields.empPass} onChange={this.handleChange} />
                                            <div className="errorMsg">{this.state.errors.empPass}</div>

                                        </form>
                                    </div>
                                </div>



                                <Button onClick={this.EmpSignUp} color="success" block>Create Account</Button>

                            </Form>

                        </CardBody>

                    </Card>

                </Col>

            </Row>

        </Container>

    </div>

)



export default EmpRegister;