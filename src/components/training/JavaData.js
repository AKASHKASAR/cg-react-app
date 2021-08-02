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
        setNewEmp({
            id: 0,
            ename: '',
            salary: 0.0
        }
        );

        axios.get(`/getAllEmployees`)
            .then((response) => {
                setEmpList(response.data);
            })

        // syntax
        // axios.post('url', { body }).then((response) => { haldle response }).catch((error) => { haldle });

        axios.get(`/getEmployee/105`)
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

    const handleChange = (event) => {
        console.log(event.target.value.id);
        console.log(event.target.value.ename);
        console.log(event.target.value.salary);
        setNewEmp({ [event.target.id]: event.target.value });
        console.log(newEmp.ename);
    }

    const handleSubmit = (event) => {
        console.log(`handleSubmit`);
        event.preventDefault();
        axios.post(`/addEmployee`, newEmp)
            .then((response) => {
                console.log(response.data);
            })
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
                        <label htmlFor="title">Employee</label>
                        <input
                            type="number"
                            id="id"
                            value={newEmp.id}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="ename"
                            value={newEmp.ename}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            id="salary"
                            value={newEmp.salary}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Add Employee</button>
                </form>
                <div>
                    <p> {newEmp.ename} </p>
                </div>
                <p> New employee added. </p>
            </div>
        </div>
    )
}
export default JavaData;












