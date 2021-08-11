import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="display-1 text-primary">Home Component</h1>
      <p> </p>
      <p> </p>
      <Link to={'/login'}>
        <button >Login</button>
      </Link>
    </div>
  );
}
export default Home;

