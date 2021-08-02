import axios from "axios";
import { useState, useEffect } from 'react';

let JavaData = (props) => {
    const [empList, setEmpList] = useState([]); // from axios
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   

    const [emp, setEmp] = useState({}); // from axios 


    // initilize states to prevent undefined error, in case used these fields anywhere else in future 
    useEffect(() => {
        setParentEmp(props.parentEmp); // 4
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );
        setEmp({
            id: 0,
            name: '',
            salary: 0
        }
        );

    }, []);

    const onTrigger = () => {
        props.parentCallback(childEmp);
    };

    // invoke post method with handlesubmit to add an employee   
    const submitAddEmployee = (event) => {
        axios.post(`/addEmployee`, emp)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }

    const handleEmployee = (event) => {
        setEmp({
            ...emp,
            [event.target.name]: event.target.value
        });
    };

    const submitGtEmployeById = (event) => {
        axios.get(`/getEmployee/${emp.id}`)
            .then(
                (response) => {
                    setEmp(response.data);
                    console.log(emp.id);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    const submitUpdateEmployee = (event) => {
        axios.get(`/getEmployee/${emp.id}`)
            .then(
                (response) => {
                    setEmp(response.data);
                    console.log(emp.id);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    const getAllEmployees = (e) => {
        console.log();
        axios.get(`/getAllEmployees`)
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
    }

    return (
        <div>
            <p>JavaData Component</p>
            <p>axios {empList.map(e => <div>{e.name}</div>)}</p>
            <p>axios {emp.name}</p>
            <p>child {parentEmp.name}</p>
            <p> child {parentEmpHike} </p>
            <button onClick={onTrigger}>Pass child emp to parent</button>
            <p>Add new Employee</p>
            <div>
                <form onSubmit={submitAddEmployee}>
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            placeholder="143" // add for other elements as well 
                            onChange={handleEmployee}
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={emp.name}
                            onChange={handleEmployee}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={emp.salary}
                            onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </form>
                <div>
                    <p> New employee added {emp.id} , {emp.name} , {emp.salary} </p>
                </div>
            </div>
            <div>
                <p>fun</p>
            </div>
            <div>
                <form onSubmit={submitGtEmployeById}>
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            onChange={handleEmployee}
                        // onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Get Employee By Id</button>
                </form>
                <div>
                    <p>Employee Data - {emp.id} , {emp.name} , {emp.salary} </p>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={getAllEmployees}>Get All Employees</button>
                    <p>All Employee Data</p>
                    <div> {empList.map(e => <p> {e.id}, {e.name} {e.salary} </p>)} </div>
                </div>

            </div>
        </div>
    )
}
export default JavaData;




