import React, { useState } from 'react';

import { Link } from 'react-router-dom'

function SignUP() {
    // const [name , setname] = useState("");
    // const [email , setemail] = useState("");
    // const [password , setpassword] = useState("");
    // const [geolocation , setlocation] = useState("Bhopal");
      const [credential , setcredential] = useState({name:"",geolocation:"",email:"",password:""})
        const changehandler = (e) =>{
               setcredential({...credential, [e.target.name]: e.target.value});
        }   
      const handlesub = async (e)=>{
         e.preventDefault();
         const response = await fetch("http://localhost:5000/api/createuser",{
              method:"POST",
            
              body:JSON.stringify({name:credential.name,geolocation:credential.location,email:credential.email,password:credential.password}),
              
         });
         const json = await response.json();
         if(!json.success){
           alert("enter valid credentials")
          }
          console.log(json);
    }
    return (
    <>
    <div className="container">
     <form onSubmit={handlesub} multipart="urlencoded">
  <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="taxt" className="form-control" name="name" value={credential.name} onChange={changehandler}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="geolocation" className="form-label">geolocation</label>
    <input type="taxt" className="form-control" name="geolocation" value={credential.geolocation} onChange={changehandler}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credential.email} onChange={changehandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credential.password} onChange={changehandler}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to={"/login"} className="m-3 btn btn-danger" >already a user</Link>
</form>
</div>
<h1>{credential.name} , {credential.geolocation} ,{credential.email} , {credential.password }</h1>
    </>
  )
}

export default SignUP
