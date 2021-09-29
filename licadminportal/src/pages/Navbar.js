
import { Button,Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
          
        <Menu>
          <Menu.Item>
                <Link to="/activateagent"><Button>Activate User</Button></Link>
          </Menu.Item>
          <Menu.Item>
                <Link to="/home"><Button>Home </Button></Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/logout"><Button>LogOut</Button></Link>
          </Menu.Item>
       </Menu>
       </div>
    );
}

export default Navbar