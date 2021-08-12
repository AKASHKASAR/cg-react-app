import axios from "axios";
import { useState, useEffect } from 'react';

// use localStorage.setItem() and 
// localStorage.getItem() to store and retrieve jwt token

let EmpData = (props) => {
    const [emp, setEmp] = useState({
        eid: 0,
        ename: '',
        salary: 0
    }); 

    useEffect(
        () => {
        setEmp({
            eid: 0,
            ename: '',
            salary: 0
        }
        );

    }, []);

    const handleEmployee = (event) => {
        console.log(emp.eid);
        setEmp({
            ...emp,
            [event.target.name]: event.target.value
        });
    };

    const submitGetEmployeById = (event) => {
        console.log(localStorage.getItem('token'));
        axios.get(`http://localhost:8082/getemp/${emp.eid}`, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(
                (response) => {
                    setEmp(response.data);
                    console.log(emp.eid);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault(); // required in submit methods 
    }

    return (
        <div>
      <h1 className="display-1 text-primary">Emp Data Component</h1>
            <div>
                <p>Get employee by id</p>
                <form onSubmit={submitGetEmployeById} className="form form-group">
                    <div>
                        <input
                            type="number"
                            id="eid"
                            name="eid"
                            value={emp.eid}
                            onChange={handleEmployee}
                            className="form-control mb-2"
                        // onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Get Employee By Id</button>
                </form>
                <div>
                    <p>Employee Data - {emp.eid} , {emp.ename} , {emp.salary} </p>
                </div>
            </div>
        </div>
    )
}
export default EmpData;




