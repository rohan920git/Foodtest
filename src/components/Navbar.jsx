import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  const clickhandler=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fst-italic" to={"/"}>FoodTest</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item active">
        <Link className="nav-link fs-5" to={"/"}>Home</Link>
      </li>
      {
        (localStorage.getItem("authToken"))?
        <Link className="nav-link fs-5" to={"/"}>My orders</Link>
        : ""
      }
      
     
    </ul>
     
        {
            (!localStorage.getItem("authToken"))?
          <div className='d-flex'>
          <Link className="btn bg-white text-success mx-2" to={"/login"}>Login</Link>
        <Link className="btn bg-white text-success me-2" to={"/createuser"}>Signup</Link>
        
        
        </div>
        :<div>
        <div className="btn bg-white text-success mx-2" to={"/login"}>cart</div>
        <div className="btn bg-danger text-white mx-2" onClick={clickhandler}>LogOut</div>
        </div>
        }
  </div>
</nav>

    </div>
  )
}
