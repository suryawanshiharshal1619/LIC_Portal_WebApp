import { useEffect, useState } from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"
import {Button} from "semantic-ui-react"
const DashBoard=()=>{
    const [ UserPolicies,setUserPolicies]=useState([])

    
const history=useHistory();
useEffect(()=>{
    getPolicyInfo()
},[])
const getPolicyInfo=()=>{
axios.post("http://localhost:8080/mypolicies",{"userId":localStorage.getItem("userId")}).then((Response)=>{
  const result=Response.data
  if(!result)
  alert("something went wrong")
  else 
  setUserPolicies(result.policyList);
console.log(result)
})
}
    const logout=()=>{
        alert(localStorage.getItem("userId"));
        localStorage.removeItem("userId");
        localStorage.removeItem("policyId")
        history.push("/")
    }
   return(
    <div class="container">
        <div class="container" style={{textAlign:"center"}}>
        <h3>Your Policies</h3>
        </div>
        <table class="table table-bordered table-hover">
        <thead>
            <th>
               PolicyId
            </th>
            <th>
               PolicyName
            </th>
            <th>              
               PolicyType
            </th>
            <th>

            </th>
        </thead>
        <tbody>
           {UserPolicies.map((policy)=>{
               return(
                <tr>
                <td>{policy.policyId}</td>
                <td>{policy.policyName}</td>
                <td>{policy.type}</td>
                
            </tr>
               )
           })}
            
        </tbody>
    </table>
    
    <div class="container" style={{textAlign:"center"}}>
        <Button onClick={logout} primary style={{width:100}}>LogOut</Button>
        

    </div>
    </div>
)
}
export default DashBoard