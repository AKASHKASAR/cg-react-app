import React from 'react';
import CgCard from '../sprint/CgCard';

// Function component 

let fun = () => { return 'fun...' }


let Welcome = (props) => {

    return (
        <div>
            <h1 className="display-1 text-primary">Welcome Component</h1>
            <p> {fun()} </p>
            <div>
                <CgCard />
            </div>
        </div>
    );
}
export default Welcome;


// Class component 
// class Welcome extends React.Component {
    // construtor(props) {

    // }

//     render() {
//     return <h1>Hello, {}</h1>;
//   }
// }
// export default Welcome;

