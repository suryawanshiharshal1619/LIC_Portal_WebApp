import { useState} from "react";
import axios from "axios";
import $ from "jquery"
import "./Common.css"
const ComplaintStatus=()=>{
    const[comId,setComId]=useState("")

    const onClickHandler=(e)=>{
        e.preventDefault();
        if(comId.length===0){
            $("<div></div>",{
                text:`* required`
            }).appendTo("#myDiv");
        }
        else{
        axios.post("http://localhost:8080/complaintstatus",{"complaintId":comId}).then((Response)=>{
            const result=Response.data
            if(!result){
                $( "<div></div>", {
                    text: `ComplaintId that you have entered is Wrong please check and try again`,
                    class:"testR"
                    })
                    .appendTo( "#div" );
            }
            else{
                if(!result.status){
                    $("<div></div>",{
                        text:`Your Complaint is Under Process `,
                        class:"testR"
                    }).appendTo("#div");
                }
                else{
                $("<div></div>",{
                    text:`Your Complaint has Been Processed`,
                    class:"testG"
                }).appendTo("#div");
            }
            }
        })
    }  
    }
    return(
        <div>
        <div class="container" style={{width:"50%"}}>
            <div class="container" style={{textAlign:"center",height:"170px",width: "80%"}}>
                <img src="https://2.bp.blogspot.com/-MHOUFtDZ2bI/TaZhMuAJGpI/AAAAAAAADQA/rl4_IAUkQR0/s1600/LIC_Logo.jpg" style={{height:"150px",width:"70%"}}/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Complaint Id :</label>
                <input type="number" style={{width:"100%",height:"35px"}} class="form-control" id="formGroupExampleInput" placeholder="Complaint Id" onChange={(e)=>setComId(e.target.value)}/>
            </div>
            <div id="myDiv" style={{color:"red"}}></div>
            <div class="mb-3">
                <br/>
                <br/>
                <button type="button" class="form-control btn-primary" onClick={onClickHandler}>Submit</button>
                <br/>  
            </div>
            <div id="div" style={{fontSize:25,color:"black",border:"2px solid",borderColor:"grey",textAlign:"center"}} class="container"></div>
        </div>
        </div>
    );
}

export default ComplaintStatus