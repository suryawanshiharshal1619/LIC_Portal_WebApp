import React from "react";
import {useHistory} from "react-router-dom"
import { useEffect,useState } from "react";
import axios from 'axios'


const Policy=()=>{
    const[policyInfo,setPolicyInfo]=useState([])
    const history=useHistory();
    useEffect(()=>{
        getPolicyInfo()
    },[])

    const getPolicyInfo=()=>{
        axios.get("http://localhost:8080/policyinfo").then((Response)=>{
              const result=Response.data
            if(!result)
                 alert("something went wrong")
            console.log(result)
            setPolicyInfo(result)
        })
    }
   
return(
    <div class="container">
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
           {policyInfo.map((policy)=>{
               return(
                <tr>
                <td>{policy.policyId}</td>
                <td>{policy.policyName}</td>
                <td>{policy.type}</td>
                <td>
                    <button style={{backgroundColor:"ButtonShadow"}} onClick={()=>{history.push("/display",{"policyid":policy.policyId})}}>View Details</button>
                </td>
            </tr>
               )
           })}
            
        </tbody>
    </table>
    </div>
) 

}

export default Policy
