import { useState } from "react";
import axios from "axios";
import $ from "jquery"
import "./Common.css"
const Complaint=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[complaint,setComplaint]=useState("");
    const[details,setDeatils]=useState("");

    const onClickHandler=(event)=>{
        event.preventDefault();
        const checkFirstName=(fname)=>{
            const regex=/^[a-zA-Z ]+$/
            return regex.test(fname)
        }
        const checkemail=(Email)=>{
              const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return regex.test(Email)
        }
        if(!checkFirstName(name)){
            $("<div></div>",{
                text:`* required And name should contain only Characters`
            }).appendTo("#myDiv8");
        } 
        else if(!checkemail(email)){
            $("<div></div>",{
                text:`* required and email should contain characters numbers @ only `
            }).appendTo("#myDiv9");
         }
        else if(complaint.length===0){
            $("<div></div>",{
                text:`* required`
            }).appendTo("#myDiv2");
        }
        else if(details.length===0){
            $("<div></div>",{
                text:`* required`
            }).appendTo("#myDiv3");
        }
        else{
        axios.post("http://localhost:8080/complaint",{"cusName":name,"email":email,"type":complaint,"details":details}).then((Response)=>{
            const result=Response.data
            if(!result){
                $("<div></div>",{
                    text:`Something Went Wrong Please Try Again`,
                    class:"testR"
                }).appendTo("#div");
            }   
           else{
               $("<div></div>",{
                   text:`Your ComplaintId is ${result.complaintId}. Note this complaintId for further tracking of your complaint process`,
                   class:"testG"
               }).appendTo("#div");
           }
        })
    }
}   
    return(
        <div class="container" style={{border:"2px",borderColor:"grey",display:"block",width:"50%"}}>
        <div class="container" style={{textAlign:"center",height:"170px",width:"80%"}}>
              <img src="https://2.bp.blogspot.com/-MHOUFtDZ2bI/TaZhMuAJGpI/AAAAAAAADQA/rl4_IAUkQR0/s1600/LIC_Logo.jpg" style={{height:"150px",width:"70%"}}/>
        </div>
        <form >
              <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">Customer Name :</label>
                  <input type="text" required class="form-control" id="formGroupExampleInput"  placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                  <div id="myDiv8" style={{color:"red"}}></div>
              </div>
              <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Email :</label>
                  <input type="email" class="form-control" id="formGroupExampleInput2" required placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                  <div id="myDiv9" style={{color:"red"}}></div>
              </div>
            
              <label for="formGroupExampleInput" class="form-label">Complaint Regarding :</label>
              <select name="" id="input" class="form-control" required onChange={(e)=>setComplaint(e.target.value)}>
                  <option value="Services">Services</option>
                  <option value="Agent">Agent</option>
                  <option value="Policy">Policy</option>
                  <option value="Portal">Portal</option>
              </select>
              <div id="myDiv2" style={{color:"red"}}></div>
              <label for="formGroupExampleInput" class="form-label">Details :</label>
              <textarea name="" id="input" class="form-control" rows="3"  required onChange={(e)=>setDeatils(e.target.value)}></textarea>
              <div id="myDiv3" style={{color:"red"}}></div>
              <br/>
              <button style={{backgroundColor:"cornflowerblue"}} type="button" class="form-control" onClick={onClickHandler}>Submit</button>
              <div></div>
       </form>
       <div id="div" style={{fontSize:25,color:"black",borderColor:"grey",textAlign:"center",width:"100%",fontFamily:"sans-serif",lineHeight:"30px"}} class="container"></div>
      </div>  
    );
}

export default Complaint