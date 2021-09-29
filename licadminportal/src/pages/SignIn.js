import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import user from"../images/user.png"
import {Link} from "react-router-dom"
import "./SignIn.css"


const SignIn= ()=>{

    
     const[Email,setEmail]=useState("")
     const[Password,setPassword]=useState("")
     const history=useHistory();
      
     
        const signinUser = (event) => {
          event.preventDefault(); 
          if (Email.length === 0) 
               alert('please enter email');
         else if (Password.length === 0) 
            alert('please enter password')
         else {
               const url="http://localhost:8080/login"
               const data={"email":Email,"password":Password}
                axios.post(url,data).then((Response)=>{
                const result=Response.data;
                if(!result){
                   alert("Invalid Password or Email");
                }
                else if(result.role==="Admin"){
                    localStorage.setItem("username",result.firstName)
                    history.push("/home")
                }
                else if(result.role==="Agent"){
                    localStorage.setItem("Agent",result.firstName)
                    history.push("/homeagent")
                }
                else
                alert("unauthorized login")
           })
         }
        }
        
     return(
     <div >
         <div  >
  
        <form class="modal-content" >
            <div class="imgcontainer">
                <img src={user} alt="Avatar"/>
               
            </div>
             <br/>
             <br/>
             <br/>
            <div class="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required="required" onChange={(event)=>{setEmail(event.target.value)}}/>
  
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={(event)=>{setPassword(event.target.value)}}/>
                <button type="submit" onClick={signinUser}>Login</button>
                
            </div>
  
            <div class="container" >
                <Link  to="/forgot"><span class="psw">Forgot password?</span></Link>
            </div>
            
        </form>
        <br></br>
        <br></br><br></br>
    </div>
    </div>

     )
}


export default SignIn
