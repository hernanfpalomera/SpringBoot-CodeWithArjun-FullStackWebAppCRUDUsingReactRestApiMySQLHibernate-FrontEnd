import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href=".">Spring Boot React Full Stack Application</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link className="btn btn-outline-primary my-2 my-sm-0" to='/adduser'>Add User</Link>
  </div>
</nav>
    </div>
  )
}
