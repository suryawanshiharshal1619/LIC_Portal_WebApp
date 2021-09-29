

import SingIn from './pages/SignIn';
import {BrowserRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';
import {Menu,Button} from "semantic-ui-react"
import Home from './pages/Home';
import AddPolicy from './AddPolicy';
import ActivateAgent from './pages/ActivateAgent';
import "./pages/SignIn.css"
import Logout from './pages/Logout';
import HomeAgent from './pages/HomeAgent';
import Display from './components/Display';
import EditPolicy from './components/Edit';


function App() {

     
      return (
      <div >

    <Router>
      
        <Switch>
                <Route path="/homeagent" render={()=>{
                      if(!localStorage.getItem("Agent")){
                            return <Redirect to="/"/>
                      }
                      else{
                            return <HomeAgent/>
                      }
                }}/>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/home" render={() => {
                if (!localStorage.getItem("username")) {
                        return <Redirect to="/"/>;
                 }
                  else {
                  return <Home/>;
                  }
                  }}/>
            
                <Route path="/" exact component={SingIn}></Route>
                <Route path="/addpolicy" render={() => {
                if (!localStorage.getItem("username")) {
                        return <Redirect to="/"/>;
                 }
                  else {
                  return <AddPolicy/>;
                  }
                  }}/>
                <Route path="/activateagent" render={() => {
                if (!localStorage.getItem("username")) {
                        return <Redirect to="/"/>;
                 }
                  else {
                  return <ActivateAgent/>;
                  }
                  }}/>
             <Route path="/display" render={() => {
                if (!localStorage.getItem("username")) {
                        return <Redirect to="/"/>;
                 }
                  else {
                  return <Display/>;
                  }
                  }}/>
                   <Route path="/edit" render={() => {
                if (!localStorage.getItem("username")) {
                        return <Redirect to="/"/>;
                 }
                  else {
                  return <EditPolicy/>;
                  }
                  }}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App
