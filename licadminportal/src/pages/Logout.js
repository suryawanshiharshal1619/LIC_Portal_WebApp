import { useEffect } from "react"
import { useHistory } from "react-router";
const Logout=()=>{
    useEffect(()=>{
        LogOut();
    },{})
    
    const history=useHistory();
    const LogOut=()=>{
      localStorage.removeItem("username");
      localStorage.removeItem("Agent");
      history.push("/")
    }  
    return(
        <div></div>
    );
    

}

export default Logout;