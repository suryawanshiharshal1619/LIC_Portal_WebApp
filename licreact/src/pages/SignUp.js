import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import user from "../images/user.png"
import { Link } from "react-router-dom"
import './Signup.css'
import './SignIn.css'
import $ from "jquery"


function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const history = useHistory();
    
    

    const signupUser = (event) => {
        event.preventDefault();
        const checkFirstName=(fname)=>{
            const regex=/^[a-zA-Z ]+$/
            return regex.test(fname)
        }
        const checkemail=(email)=>{
              const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return regex.test(email)
        }
        const checkContact=(contacts)=>{
            const regex=/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
            return regex.test(contacts)
        }
        if(!checkFirstName(firstName)){
            $("<div></div>",{
                text:`* required And name should contain only Characters`
            }).appendTo("#myDiv");
        } 
        else if( !checkFirstName(lastName)){
            $("<div></div>",{
                text:`* required And name should contain only Characters`
            }).appendTo("#myDiv1");
        }
         else if(!checkemail(Email)){
            $("<div></div>",{
                text:`* required and email should contain characters numbers @ only `
            }).appendTo("#myDiv2");
         }
        else if (!checkContact(contact)){
            $("<div></div>",{
                text:`* required and contact should contain 10 digits `
            }).appendTo("#myDiv3");
        }
        else if(Address.length===0){
            $("<div></div>",{
                text:`* required `
            }).appendTo("#myDiv4");
        }
        else if(Password.length===0){
            $("<div></div>",{
                text:`* required and contact should contain 10 digits `
            }).appendTo("#myDiv5");
        }
        else if(role.length===0){
            $("<div></div>",{
                text:`* required and contact should contain 10 digits `
            }).appendTo("#myDiv6");
        }
           
        else {
            const url = "http://localhost:8080/signup"
            const data = { "firstName": firstName, "lastName": lastName, "address": Address, "contact": contact, "email": Email, "password": Password, "role": role }
            axios.post(url, data).then((Response) => {
                const result = Response.data;
                if (!result) {
                    alert(" Something went wrong");
                }
                else {

                    history.push("/dashBoard", { username: result.firstName, });
                }
            })
        }
    }

    return (
        <div >
            <div >

                <form class="modal-contentsignup"  >

                    <div class="imgcont">
                        <img class="imgs" src={user} alt="Avatar"/>

                    </div>

                    <div class="container"  >
                        <label><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="fname" required="required" onChange={(e)=>{setFirstName(e.target.value)}} />
                        <div id="myDiv" style={{color:"red"}}></div>
                        <label><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" name="lname" required="required" onChange={(event) => { setLastName(event.target.value) }} />
                        <div id="myDiv1" style={{color:"red"}}></div>
                        <label><b>Address</b></label>
                        <input type="text" placeholder="Enter  Address" name="addname" required="required" onChange={(event) => { setAddress(event.target.value) }} />
                        <div id="myDiv4" style={{color:"red"}}></div>
                        <label><b>Contact</b></label>
                        <input type="text" placeholder="Enter  Contact No" name="Cname" required="required" onChange={(event) => { setContact(event.target.value) }} />
                        <div id="myDiv3" style={{color:"red"}}></div>
                        <label><b>Email Id</b></label>
                        <input type="text" placeholder="Enter Email ID" name="email" required="required" onChange={(event) => { setEmail(event.target.value) }} />
                        <div id="myDiv2" style={{color:"red"}}></div>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required="required" onChange={(event) => { setPassword(event.target.value) }} />
                        <div id="myDiv5" style={{color:"red"}}></div>
                        <label><b>Role</b></label><br/>
                        <select style={{width:"100%",height:40}} onChange={(event) => { setRole(event.target.value) }} >
                                <option value="Agent"></option>
                                <option value="Agent">Agent</option>
                                <option value="Client">Client</option>
                        </select>
                        <div id="myDiv6" style={{color:"red"}}></div>
                        <br/>
                        <br/>
                        <button type="submit" onClick={signupUser}>Register</button>

                    </div>

                    <div class="container" >
                        <label><b> Alreday registered !!..Click here to     </b></label>
                        <Link to="/SignIn"><b> Login </b></Link><br></br>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default SignUp
 