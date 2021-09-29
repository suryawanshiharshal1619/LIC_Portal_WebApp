import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import $ from "jquery"
import { useLocation } from "react-router";
import NavbarAgent from "../pages/NavbarAgent";

const EditPolicy=()=>{
    const location=useLocation();
    const[name,setName]=useState("");
    const[Type,setType]=useState("");
    const[year,setYear]=useState("");
    const[install,setInstall]=useState("");
    const[premium,setPremium]=useState("");
    const[maturity,setMaturity]=useState("");
    const[info,setInfo]=useState("");
    const [myinfo,setMyinfo]=useState([]);
    useEffect(()=>{
        getInfo()
    },[])
    const getInfo=()=>{
       setMyinfo(location.state.policyid)
    }

    const onClickHandler=()=>{
            const checktext=(fname)=>{
            const regex=/^[a-zA-Z ]+$/
            return regex.test(fname)
        }
       if( year.length===0 ){
        $("<div></div>",{
            text:`* required `
        }).appendTo("#myDiv3");}
       
         else if(premium.length===0){
            $("<div></div>",{
                text:`* required `
            }).appendTo("#myDiv4");
        }
        else if(maturity.length===0){
            $("<div></div>",{
                text:`* required `
            }).appendTo("#myDiv5");
        }
        else if(info.length===0){
            $("<div></div>",{
                text:`* required `
            }).appendTo("#myDiv6");
        }
        else if(install.length===0){
            $("<div></div>",{
                text:`* required `
            }).appendTo("#myDiv7");
        }

        else if(!checktext(name)){
        $("<div></div>",{
            text:`* required And name should contain only Characters`
        }).appendTo("#myDiv1");}
        else if(!checktext(Type)){
        $("<div></div>",{
            text:`* required And type should contain only Characters`
        }).appendTo("#myDiv2");}
       else{
        axios.post("http://localhost:8080/editpolicy",{"policyName":name,"type":Type,"noOfYears":year,"installments":install,"premium":premium,"maturity":maturity,"info":info}).then((Response)=>{
            const result = Response.data 
              if (!result) 
                alert(" Something went wrong");
              alert("Policy is Saved");
          })
       }
    }

    return(
        <div>
            <NavbarAgent/>
        <div class="container" style={{width:"60%"}}>
            <form >
              <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">Policy Name :</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder={myinfo.policyName} onChange={(e)=>setName(e.target.value)}/>
                    <div id="myDiv1" style={{color:"red"}}></div>
              </div>
              
              <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Policy Type :</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={myinfo.type} onChange={(e)=>setType(e.target.value)}/>
                  <div id="myDiv2" style={{color:"red"}}></div>
              </div>

              <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Number of Years :</label>
                  <input type="number" style={{width:"100%",height:"35px"}} class="form-control" id="formGroupExampleInput2" placeholder={myinfo.noOfYears} onChange={(e)=>setYear(e.target.value)}/>
                  <div id="myDiv3" style={{color:"red"}}></div>
              </div>
             
            
              <label for="formGroupExampleInput" class="form-label">Installment Type :</label>
              <select name="" id="input" placeholder={myinfo.install} class="form-control" required="required" onChange={(e)=>setInstall(e.target.value)}>
                  <option value="Services">Select Type</option>
                  <option value="Agent">Yearly</option>
                  <option value="Policy">Half Yearly</option>
                  <option value="Portal">Quaternaly</option>
              </select>
              <div id="myDiv7" style={{color:"red"}}></div>
              <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Premiun Amount :</label>
                  <input type="number" placeholder={myinfo.premium} style={{width:"100%",height:"35px"}} class="form-control" id="formGroupExampleInput2" onChange={(e)=>setPremium(e.target.value)}/>
                  <div id="myDiv4" style={{color:"red"}}></div>
              </div>
              <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Maturity Amount:</label>
                  <input type="number" style={{width:"100%",height:"35px"}} class="form-control" id="formGroupExampleInput2" placeholder={myinfo.maturity} onChange={(e)=>setMaturity(e.target.value)}/>
                  <div id="myDiv5" style={{color:"red"}}></div>
              </div>
              <label for="formGroupExampleInput"  class="form-label">Info :</label>

              <textarea name="" id="input" placeholder={myinfo.info} class="form-control" rows="3"  required="required" onChange={(e)=>setInfo(e.target.value)}></textarea>
              <div id="myDiv6" style={{color:"red"}}></div>
              <br/>
              <button style={{backgroundColor:"cornflowerblue"}} type="button" class="form-control" onClick={onClickHandler}>Submit</button>
              <div></div>
              
       </form>
       <br></br>
       <br></br>
       <br></br>
       </div>
        </div>
    )
}

export default EditPolicy