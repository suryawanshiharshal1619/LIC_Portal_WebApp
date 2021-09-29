import {useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const ActivateAgent=()=>{
   
    const[userDetails,setUserDetails]=useState([]);
    useEffect(() =>{
        getUserInfo( );
    },[])
    
    const getUserInfo=()=>{
        axios.get("http://localhost:8080/userdetails").then((Response)=>{
          const result = Response.data 
            
              setUserDetails(result)
          })
    }
    const onClickActivate=(id)=>{
        window.location.reload(false);
        window.location.reload(false);
        axios.post("http://localhost:8080/activatestatus",{"userId":id}).then((Response)=>{
          const result = Response.data 
            if (!result) 
              alert("User Activated Sucessfully");
              window.location.reload(false);
        })
    }

    return(
        <div>
            <Navbar/>
        <div class="container">
        <table class="table table-bordered table-hover">
        <thead>
            <th>
                Sr.No
            </th>
            <th>
                PolicyId
            </th>
            <th>
                PolicyName
            </th>
            <th>

            </th>
        </thead>
        <tbody>
           {userDetails.filter((user)=>user.role==='Agent').map((users)=>{
               return(
                <tr>
                <td>{users.userId}</td>
                <td>{users.firstName}</td>
                <td>{users.lastName}</td>
                <td>{users.email}</td>
                <td>
                   { (!users.status)?
                         <Button style={{backgroundColor:"ButtonShadow"}} onClick={()=>onClickActivate(users.userId)}>Activate</Button>
                    :  
                         <Button disabled style={{backgroundColor:"ButtonShadow"}} onClick={()=>onClickActivate(users.userId)}>Activate</Button>  
                   }
             </td>
            </tr>
           )
           })} 
        </tbody>
    </table>
    </div>
    </div>
    );
}

export default ActivateAgent