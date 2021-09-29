import { Button ,Item} from 'semantic-ui-react';
import $ from "jquery"
import { useHistory } from "react-router-dom"
import axios from "axios";
const Buy = () => {
    const policyId = localStorage.getItem("policyId");
    const userid = localStorage.getItem("userId");
    
    const history = useHistory();
    const onClickHandler = () =>{
        
    axios.post("http://localhost:8080/buy", { "policyId": policyId, "userid": userid }).then((Response) => {
        const result = Response.data
        if (!result)
            alert(" Something went wrong");
        else
           {
             $("<div></div>",{
                text:`PolicyNum for the Policy that you have Requested is ${result.policyNum}`
            }).appendTo("#div");
           }

    })
 
}



return (

    <div class="container" style={{width:"70%",height:"500px"}}>

           
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>
                    Once you click on buy button provied below one unique Policy number will be generated.You are requested to note down that Policy Number and Visit our nearest branch to fulfill all the required documents along with first installment after payment of first installment your Policy will be activated.
                    </Item.Header> 
                </Item.Content>
                </Item>
            </Item.Group>
           

        <Button onClick={onClickHandler}>Buy</Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <div id="div" style={{fontSize:25,color:"black",borderColor:"grey",textAlign:"center"}} class="container"></div>
    </div>



)


}
 
export default Buy