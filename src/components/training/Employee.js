import React from 'react';
import { useState } from 'react';
import JavaData from './JavaData';

// // pass data from child to parent 
// // parent - Employee (this component), child - JavaData 
// export default function Employee() {
//     const [data, setData] = useState('');
//     const childToParent = (childdata) => {
//         setData(childdata);
//     }
//     return (
//         <div>
//             <h1 className="display-1 text-primary">Employee Component</h1>
//             <p>data in parent {data}</p>
//             <JavaData childToParent={childToParent} />
//         </div>
//     )
// }

// parent component of JavaData 
class Employee extends React.Component {

    constructor() {
        super();
        this.state = {
            parentName: 'Sonu',
            childName: ''
        }
    }

    childCallBack = (chilldInfo) => {
        this.setState({ childName: chilldInfo });
        console.log('aaaa');
    }


    render() {
        return (<div>
            <h1 className="display-1 text-primary">Employee Component</h1>
            {/* <JavaData dataFromParent={this.state.parentName} ></JavaData> */}
            <JavaData getCall={this.state.childCallBack} ></JavaData>
            <p> {this.state.parentName} </p>
            <p> {this.state.childName} </p>
            {/* <Hello /> */}
            {/* <MyTable/> */}
        </div>
        );
    }
}
export default Employee;

// class Employee extends React.Component {

//     constructor() {
//         super();
//         this.emps = EmployeeService.getHello;
//         this.state = { name: 'Monu', salary: 10.5 };
//     }

//     increaseSalary = () => {
//         this.setState({ salary: this.state.salary + 10 });
//     };
//     setMyName = (evt) => {
//         this.setState({ name: evt.target.value });
//     }
//     render() {
//         return (<div>
//             <h1 className="display-1 text-primary">Employee Component</h1>

//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>
//             <form>
//                 <h1 >Data Form</h1>
//                 <p>Name:</p>
//                 <input type="text"
//                     onChange={evt => this.setMyName(evt)}></input>
//             </form>
//             <p>Hello - {this.emps} </p>
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';

// class Employee extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Sonu",
//             salary: 10.5
//         };
//     }

//     increaseSalary = () => {
//         console.log("Pay hiked!")
//         this.setState({ salary: this.state.salary + 10 });
//     };

//     render() {
//         return (<div className="App">
//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';

// class Employee extends React.Component {

//     constructor() {
//         super();

//         // this.someObject = { key: "value", key2: 111, key3: true, key4: { subKey5: 10, subKey6: 2345 } };

//         this.state = {
//             name: "Sonu",
//             salary: 10.5,
//             phones: { first: 1010, second: 4141 }
//         };
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//                 <p> {this.state.phones.second} </p>
//             </div>
//         );
//     }
// }
// export default Employee;

