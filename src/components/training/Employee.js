import React from 'react';
import { useState, useEffect } from 'react';
import JavaData from './JavaData';

let Employee = () => {
    const [emp, setEmp] = useState('');
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 

    useEffect(() => {

        setParentEmp({
            id: 201,
            name: 'Monu',
            salary: 20.5
        }
        );
        
        setParentEmpHke(10);
    }, []);

    return (
        <div>
            <h1 >Employee Component</h1>
            <p> parent {parentEmp.name}</p>
            <p> parent {parentEmpHike}</p>
            {/* <JavaData></JavaData> */}
            <JavaData parentEmp={parentEmp} parentEmpHike={parentEmpHike}></JavaData>
        </div>
    )
}
export default Employee;
