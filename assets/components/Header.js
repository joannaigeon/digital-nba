import React from 'react';

const Header = ()=>{
  return (
    <div>

      <nav className="nav nav-pills justify-content-between navbar navbar-dark bg-dark">
        <span className="text-light m-2 ">Digital NBA</span>
        <div className="d-flex flex-row">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="stats">Stats</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;