import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import user from"../images/user.png"
import $ from "jquery"
import "./Common.css"
const TrackClaim=()=>{
    const[CalimId,setCalimId]=useState("")
    const history=useHistory()
   
    const claimpolicy = (event) => {
        event.preventDefault();
            if (CalimId.length === 0) 
             alert('please enter ClaimId');
             else {
                 axios.post("http://localhost:8080/trackclaim",{"claimId":CalimId}).then((Response)=>{
                 const result=Response.data    
                 if(!result){
                    $("<div></div>",{
                        text:`Claimid That You Have entered is  Wrong`,
                        class:"testR"
                    }).appendTo("#div");
                 }
                   
                else{
                    if(!result.status){
                        $("<div></div>",{
                            text:`Your Claim is Under Process `,
                            class:"testR"
                        }).appendTo("#div");
                    }
                    else{
                    $("<div></div>",{
                        text:`Your Claim is Successfully Completed `,
                        class:"testG"
                    }).appendTo("#div");
                }
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
                   <div class="container">
                       <label><b>Enter ClaimId</b></label>
                       <input type="number" style={{width:"100%",height:"35px"}} placeholder="Enter ClaimId" name="clm" required="required" onChange={(e)=>{setCalimId(e.target.value)}}/>
                       <br></br>
                       <br>
                       </br>
                       <button type="submit" onClick={claimpolicy} >Submit  </button>
                   </div>
               </form>
           </div>
           <div id="div" style={{fontSize:25,color:"black",borderColor:"grey",textAlign:"center",width:"50%",fontFamily:"sans-serif",lineHeight:"30px"}} class="container"></div>
           </div>
            )
}
export default TrackClaim
