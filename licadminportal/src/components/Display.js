import { useLocation } from "react-router";
import {useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Image, Item } from 'semantic-ui-react'

import {useHistory} from "react-router-dom"
const Display=()=>{
    const history = useHistory();
    const[policyId,setPolicyId ]=useState({});
     const location=useLocation();
      useEffect(() =>{
          getInfo( )
      },{   })
      const getInfo =( )=>{
          
          axios.post("http://localhost:8080/details",{ "policyId": location.state.policyid}).then((Response)=>{
              const result = Response.data 
              if (!result) {
                alert(" Something went wrong");
                
            }
            setPolicyId(result);
          })
      }
   return(
        <div class="container">
            
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>PolicyId:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.policyId}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Policy Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.policyName}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Policy Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.type}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Duration :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.noOfYears}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Installment :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.installments}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Premium :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.premium}</Item.Header><br></br>
                    <hr></hr>
                    <Item.Header>Maturity Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item.Header>
                    <Item.Header as='a'>{policyId.maturity}</Item.Header><br></br>
                    <hr></hr>
                    
                    <Item.Header>Description :</Item.Header>
                    <br></br><hr></hr>
                    <Item.Header>
                        <p>{policyId.info}</p>
                    </Item.Header>
                </Item.Content>
                </Item>
            </Item.Group>


               <button  onClick= {()=>{history.push("/edit",{"policyid":policyId})}}>Edit</button>
        </div>
    );
}
 export default Display