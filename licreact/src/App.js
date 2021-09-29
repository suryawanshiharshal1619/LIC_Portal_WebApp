
import './App.css';
import Policy from './pages/Policy';
import Claim from './pages/Claim';
import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import {BrowserRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';
import {Menu,Button} from "semantic-ui-react";
import Forgotpassword from './pages/forgotpswrd';
import Header from './pages/Header';
import Display from './components/Display';
import TrackClaim from './pages/Trackclaim';
import Complaint from './pages/Complaints';
import ComplaintStatus from './pages/ComplaintStatus';
import Buy from './components/Buy';
 


function App() {
     

      return (
      <div>

    <Router>
      
        
       <div>
          
          <Menu>
            <Menu.Item>
                  <Link to="/"><Button >Home</Button></Link>
            </Menu.Item>
                   
            <Menu.Item>
                  <Link to="/signUp"><Button >Sign Up</Button></Link>
            </Menu.Item>

            <Menu.Item>
                  <Link to="/signIn"><Button>Sign In</Button></Link>
            </Menu.Item>
            <Menu.Item>
                  <Link to="/dashboard"><Button>Dash Board</Button></Link>
            </Menu.Item>
            
          </Menu>
     </div>
        <Switch>
               <Route path="/display" component={Display}></Route>
               <Route path="/trackclaim" component={TrackClaim}></Route>
                <Route path="/complaintStatus" component={ComplaintStatus}></Route>
                <Route path="/complaint" component={Complaint}></Route>
                <Route path="/display" component={Display}></Route>
                <Route path="/policy" component={Policy}></Route>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/signIn" component={SingIn}></Route>
                <Route path="/signUp" component={SignUp}></Route>
                <Route path="/claim" component={Claim}></Route>
                <Route path="/forgot" component={Forgotpassword}></Route>"
                <Route path="/dashboard" render={() => {
                if (!localStorage.getItem("userId")) {
                        return <Redirect to="/signIn"/>;
                 }
                  else {
                  return <DashBoard/>;
                  }
                  }}/>
                   <Route path="/buy" render={() => {
                if (!localStorage.getItem("userId")) {
                        return <Redirect to="/signIn"/>;
                 }
                  else {
                        if(!localStorage.getItem("policyId")){
                              return <Redirect to="/policy"/>
                        }
                        else
                           return <Buy/>;
                  }
                  }}/>

        </Switch>
    </Router>
    </div>
  );
}

export default App
