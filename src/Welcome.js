import React from 'react';

// Function component 

let Welcome = (props) => {

    return (
        <div>
            <h1>Hello, {props.name} </h1>
            <p> {props.phone} </p>
        </div>
    );
}
export default Welcome;


// Class component 
// class Welcome extends React.Component {

//     render() {
//     return <h1>Hello, {}</h1>;
//   }
// }
// export default Welcome;

