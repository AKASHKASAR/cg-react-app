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
            eid: 123,
            ename: '123',
            salary: 123
        }

        );

        axios.get(`/getAllEmployees`)
            .then((response) => {
                setEmpList(response.data);
            })

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

    const handleChangeEid = (e) => {
        setNewEmp({ eid: e.target.value });
    }
    const handleChangeEname = (e) => {
        setNewEmp({ ename: e.target.value });
    }
    const handleChangeSalary = (e) => {
        setNewEmp({ salary: e.target.value });
    }


    const handleSubmit = (event) => {
        const tempEmp = newEmp;
        axios.post(`/addEmployee`, tempEmp)
            .then((response) => {
                console.log(response.data);
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
                            id="eid"
                            value={newEmp.eid}
                            onChange={handleChangeEid}
                        />
                        <input
                            type="text"
                            id="ename"
                            value={newEmp.ename}
                            onChange={handleChangeEname}
                        />
                        <input
                            type="number"
                            id="salary"
                            value={newEmp.salary}
                            onChange={handleChangeSalary}
                        />
                    </div>
                    <button type="submit">Add Employee</button>
                </form>
                <div>
                    <p> {newEmp.eid} , {newEmp.ename} , {newEmp.salary} </p>
                </div>
                <p> New employee added. </p>
            </div>
        </div>
    )
}
export default JavaData;
















