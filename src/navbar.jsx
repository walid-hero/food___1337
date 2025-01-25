import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">About</a>
        <a className="navbar-brand mx-auto" href="#">1337FOOD</a>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="button">Vote</button>
      </div>
    </nav>
  );
};

export default Navbar;
