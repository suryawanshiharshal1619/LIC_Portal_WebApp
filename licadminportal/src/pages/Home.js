import {useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button,Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import { useHistory } from "react-router";
const Home=()=>{
 const history=useHistory()
    const[policyDetails,setPolicyDetails]=useState([]);
    useEffect(() =>{
        getPolicyInfo( );
    },[])
    
    const getPolicyInfo=()=>{
        axios.get("http://localhost:8080/policydetails").then((Response)=>{
          const result = Response.data 
            if (!result) 
              alert(" Something went wrong");
              setPolicyDetails(result);
              console.log(result)
          })
    }
    const onClickDelete=(id)=>{
        alert(id);
        axios.post("http://localhost:8080/delete",{"policyId":id}).then((Response)=>{
          const result = Response.data 
            if (!result) 
              alert(" Something went wrong");
              window.location.reload(false);
        })
    }

    return(
        <div>
            <Navbar/>
        <div class="container" >
        <table class="table table-bordered table-hover">
        <thead>
            <th>
                PolicyId
            </th>
            <th>
                PolicyName
            </th>
            <th>
                Type
            </th>
            <th>

            </th>

            <th>

            </th>
        </thead>
        <tbody>
           {policyDetails.map((policy)=>{
               return(
                <tr>
                <td>{policy.policyId}</td>
                <td>{policy.policyName}</td>
                <td>{policy.type}</td>
                <td>{policy.duration}</td>
                <td>
                    <Button style={{backgroundColor:"ButtonShadow"}} onClick={()=>onClickDelete(policy.policyId)}>Delete</Button>
                </td>
                <td>
                <Button style={{backgroundColor:"ButtonShadow"}} onClick={()=>(history.push("/display",{"policyid":policy.policyId}))}>View Details</Button>  
                </td>
            </tr>
        ) 
           })}
          
          
        </tbody>
    </table>
           <div class="container" style={{alignSelf:"center",width:"30%"}}>
               <Link to="/addpolicy"><Button style={{backgroundColor:"ButtonShadow"}}>Add New Policy</Button></Link>
           </div>
    </div>
    </div>
    );
}

export default Home