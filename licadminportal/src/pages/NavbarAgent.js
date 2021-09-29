import { Button,Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavbarAgent=()=>{
    return(
        <div>  
        <Menu>
          <Menu.Item>
              <Link to="/logout"><Button>LogOut</Button></Link>
          </Menu.Item>
       </Menu>
       </div>
    );
}

export default NavbarAgent