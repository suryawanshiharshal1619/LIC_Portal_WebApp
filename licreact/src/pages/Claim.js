import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import user from"../images/user.png"
import $ from "jquery"
import "./Common.css"
const Claim=()=>{
    const[PolicyNum,setPolicyNum]=useState("")
    const history=useHistory()
    const claimpolicy = (event) => {
           event.preventDefault();
             if (PolicyNum.length === 0){
                $("<div></div>",{
                    text:`* required`
                }).appendTo("#myDiv");
             } 
             
             else {
                 axios.post("http://localhost:8080/claim",{"policyNum":PolicyNum}).then((Response)=>{
                 const result=Response.data    
                 if(!result){
                     $("<div></div>",{
                         text:`Either PolicyNumber that you have entered is Wrong OR Policy with this PolicyNum is already in claim process`,
                         class:"testR"
                     }).appendTo("#div");
                 }   
                else{
                    $("<div></div>",{
                        text:`Your ClaimId for claim request is ${result.claimId} . Note this claimId for further tracking of your claim process`,
                        class:"testG"
                    }).appendTo("#div");
                }
                 })
             }
                
          }
        return(
            <div className="Responsive">
                <div >
               <form class="modal-content" >
                   <div class="imgcontainer">
                       <img src={user}  alt="Avatar"/>
                   </div>
                   <div class="container" style={{textAlign:"center"}}>
                       <label><b>Enter PolicyNumber</b></label>
                       <div>
                           <div>
                           <input type="number" style={{width:"100%",height:"35px"}} placeholder="Enter PolicyNum" name="clm" required="required" onChange={(e)=>{setPolicyNum(e.target.value)}}/>
                           </div>
                           <div id="myDiv" style={{color:"red",textAlign:"left"}}></div>
                       </div>
                       <br></br>
                       <br></br>
                       <button type="submit" onClick={claimpolicy} >Submit  </button>
                   </div>
               </form>
           </div>
             <div id="div" style={{fontSize:25,color:"black",borderColor:"grey",textAlign:"center",width:"50%",fontFamily:"sans-serif",lineHeight:"30px"}} class="container"></div>
           </div>
            )
}
export default Claim
