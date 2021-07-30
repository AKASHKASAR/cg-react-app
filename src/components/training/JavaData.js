import axios from "axios";




// child component of Employee 
let JavaData = (props) => {

    // props.getCall('Monu');

    let getCall = (event) => {
        props.childCallBack('Monu');
        event.preventDefault(); // important
    }
    
    let message = props.parentName;

    axios.get('/hello').then((abc) => {
        // message = abc.data;
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
            <p>{getCall}</p>
            <p> {props.dataFromParent} </p>
            {/* <p> {this.message} </p> */}
        </div>
    )
}

export default JavaData;









