import React from 'react';

function Header() {
  return (

    <div className="header sticky-top">
      <nav className="navbar navbar-fixed-top navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">
            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
              height="24px" alt="Capgemini" />
          </a>
          <p className="h5 text-info" >Welcome to CG React APP</p>
        </div>
      </nav>
    </div>

    // <div >
    //   <h1>Ths is header.</h1>
    //   <p>This is a header component.</p>
    // </div>

  );
}
export default Header;

