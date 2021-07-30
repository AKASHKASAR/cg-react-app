import axios from "axios";
import { useState } from 'react';

// // pass data from child to parent 
// // parent - Employee, child - JavaData (this component) 
// export default function JavaData({ childToParent }) {
//     let data = 'Sonu';
//     return (
//         <div>
//             <p>data in child {data}</p>
//             <button onClick={() => childToParent(data)}>Click to pass data from child to parent</button>
//         </div>
//     )
// }

let getCall = (event) => {
    event.childCallBack('Monu');
    console.log('getCall');
    event.preventDefault(); // important
}

// child component of Employee 
let JavaData = (props) => {

    const [data, setData] = useState('');

    axios.get('/hello').then((abc) => {
        console.log(abc.data);
    });

    axios.get('/Employee').then((abc) => {
        console.log(abc.data.name);
    });

    axios.get('/Employee/101').then((abc) => {
        console.log(abc.data);
    });

    return (
        <div>
            <p>Java Data</p>
            <p onLoad={getCall}> </p>
            <p> {props.dataFromParent} </p>
        </div>
    )
}

export default JavaData;









