import axios from "axios";
import { useState, useEffect } from 'react';

let JavaData = (props) => {
    const [empList, setEmpList] = useState([]); // from axios
    const [emp, setEmp] = useState(''); // from axios 
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
    const [newEmp, setNewEmp] = useState({}); // employee added  by user    

    useEffect(() => {
        setParentEmp(props.parentEmp); // 4
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );

        // initilize to prevent undefined error, in case used these fields anywhere else in future 
        setNewEmp({
            id: 0,
            name: '',
            salary: 0
        }
        );

        axios.get(`/getAllEmployees`)
            .then((response) => {
                setEmpList(response.data);
            })

        axios.get(`/getEmployee/123`)
            .then(
                (response) => {
                    setEmp(response.data);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    const onTrigger = () => {
        props.parentCallback(childEmp);
    };

    // handlechange of input fields to bind values to state 
    const handleChange = e => {
        setNewEmp({
            ...newEmp,
            [e.target.name]: e.target.value
        });
        console.log(newEmp.id, newEmp.name, newEmp.salary);
    };


    // invoke post method with handlesubmit 
    const handleSubmit = (event) => {
        console.log(newEmp.id, newEmp.name, newEmp.salary);
        axios.post(`/addEmployee`, newEmp)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={newEmp.id}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newEmp.name}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={newEmp.salary}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Add Employee</button>
                </form>
                <div>
                    <p> {newEmp.id} , {newEmp.name} , {newEmp.salary} </p>
                </div>
                <p> New employee added. </p>
            </div>
        </div>
    )
}
export default JavaData;
















