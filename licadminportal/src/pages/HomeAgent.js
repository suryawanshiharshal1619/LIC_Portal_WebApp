
import { useEffect } from 'react';
import  axios from 'axios';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import NavbarAgent from './NavbarAgent';
const HomeAgent=()=>{
    const[complaints,setComplaints]=useState([])
    const[claim,setClaim]=useState([])
    useEffect(()=>{
        getComplaints()
        getclaims()
    },[])
    
    const getclaims=()=>{
        axios.get("http://localhost:8080/getclaims").then((Response)=>{
            const result=Response.data
             if(!result)
               alert("something went wrong")
            else
               setClaim(result)
         })
     }
    const getComplaints=()=>{
        axios.get("http://localhost:8080/getcomplaints").then((Response)=>{
            const result=Response.data
             if(!result)
               alert("something went wrong")
            else
                setComplaints(result);
        })
    }
    const onClickHandler=(id)=>{
        axios.post("http://localhost:8080/setstatus",{"complaintId":id}).then(()=>{
              window.location.reload(false);
        })
    }
    const processClaim=(id)=>{
        axios.post("http://localhost:8080/processclaim",{"claimId":id}).then(()=>{
            window.location.reload(false);
        })
    }

    return(
        <div>
            <div>
                <NavbarAgent/>
            </div>
        <div>
            <div class="container" style={{textAlign:"center"}}>
            <h1>Complaints</h1>
            </div> 
       <div class="container">
            <table class="table table-bordered table-hover">
        <thead>
            <th>
               CompalintId
            </th>
            <th>
                Customer Name 
            </th>
            <th>
                Email
            </th>
            <th>
                Type
            </th>
            <th>
                Details
            </th>
            <th>

            </th>
        </thead>
        <tbody>
           {complaints.map((complaint)=>{
               return(
                <tr>
                <td>{complaint.complaintId}</td>
                <td>{complaint.cusName}</td>
                <td>{complaint.email}</td>
                <td>{complaint.type}</td>
                <td>{complaint.details}</td>
                <td>
                    <Button style={{backgroundColor:"ButtonShadow"}} onClick={()=>onClickHandler(complaint.complaintId)}>Click To Resolve</Button>
                </td>
            </tr>
        ) 
           })}
           </tbody>
    </table>
    </div>
        
           <br></br>
           <br></br>
           <hr></hr>
           <div class="container" style={{textAlign:"center"}}>
            <h1>Claims Requested</h1>
            </div> 

       <div class="container">
            <table class="table table-bordered table-hover">
        <thead>
            <th>
               ClaimId
            </th>
            <th>
                First Name 
            </th>
            <th>
                Last Name
            </th>
            <th>
                Policy Name
            </th>
            <th>
                Policy Number
            </th>
            <th>

            </th>
        </thead>
        <tbody>
           {claim.map((claim)=>{
               return(
                <tr>
                <td>{claim.claimId}</td>
                <td>{claim.firstName}</td>
                <td>{claim.lastName}</td>
                <td>{claim.policyName}</td>
                <td>{claim.policyNum}</td>
                <td>
                    <Button style={{backgroundColor:"ButtonShadow"}} onClick={()=>processClaim(claim.claimId)}>Process Claim</Button>
                </td>
            </tr>
        ) 
           })}
          
          
        </tbody>
    </table>
       </div>
    </div>
    </div>
    );
}
export default HomeAgent