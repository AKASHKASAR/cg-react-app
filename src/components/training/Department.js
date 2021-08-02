import { useEffect, useState } from "react";


const Department = (props) => {

    const [departmentId, setDepartmentId] = useState(0);
    const [departmentName, setDepartmentName] = useState('');
    const [departmentAddress, setDepartmentAddress] = useState({});
    const [departmentProjects, setDepartmentProjects] = useState([]);

    // useEffect(() => {});
    // useEffect(() => {}, []);
    useEffect(
        () => {
            setDepartmentId(props.did); // assign initial values to state 
    });

    props.someCallBack((did) => { // ! causes problem 
        setDepartmentId(did); // assign values to state
        return departmentId; // access state values 
    });




    return (
        <div>
            <p>Department</p>
            <p> {departmentProjects} </p>
        </div>
    )
}
export default Department;



// class Department {

//     constructor() {
//         super();
//         this.state = [
//             id = 0,
//             ename = '',
//             salary = 0
//         ];
//     }

//     handleSomething = () => {
//         setState({ ename: 'Sonu' });
//         console.log(this.state.ename);
//     }
//     render() {
//         return (
//             <div>
//                 <p>Department</p>
//                 <p> {this.state.salary} </p>
//             </div>
//         )
//     }
// }
// export default Department;
















