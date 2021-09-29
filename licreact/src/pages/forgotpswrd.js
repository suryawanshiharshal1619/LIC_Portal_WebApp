import axios from "axios";
import { useState } from "react";
import {useHistory} from "react-router-dom"
import user from"../images/forgot.jpg"
import  './SignIn.css'





const Forgotpassword=()=>{
    
    
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const[NewPassword,setNewPassword]=useState("")
    const history=useHistory()
    const forgotps = (event) => {
        event.preventDefault(); 
        if (Email.length === 0) 
             alert('please enter email');
       else if (Password.length === 0) 
          alert('please enter password')
        else if(NewPassword.length=== 0)
        alert('please enter password')
        else if(NewPassword!== Password)
        alert('Password Mismatch')

       else {
             const url="http://localhost:8080/forgot"
             const data={"email":Email,"password":Password}
              axios.post(url,data).then((Response)=>{
              const result=Response.data;
              if(!result){
                 alert("No such user exists");
              }
              else{
                   history.push("/dashBoard",{username:result.firstName,});
              }
         })
       }
      }
    return(
     <div className="Responsive">
         <div >
  
        <form class="modal-content" >
            <div class="imgcontainer">
                <img src={user} style={{height:200,width:250}} alt="Avatar"/>
               
            </div>
  
            <div class="container">
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter email" name="uname" required="required" onChange={(e)=>{setEmail(e.target.value)}} />
  
                <label><b>New Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required="required" onChange={(e)=>{setPassword(e.target.value)}}/>
                
                
                
                <label><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required="required" onChange={(e)=>{setNewPassword(e.target.value)}}/>
                <button type="submit" onClick={forgotps} >Submit  </button>
            </div>
            
        </form>
    </div>
    </div>

     )
}


export default Forgotpassword

