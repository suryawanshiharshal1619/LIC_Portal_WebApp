import "./Footer.css"
import {Icon} from "semantic-ui-react"

const Footer=()=>{
    return(
      <footer class="site-footer">
      <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">LIC Portal <i>WANTS TO BE SIMPLE </i> is an initiative  to make our services online. LIC Portal focuses on providing the most efficient for clients to take glance at the services that we provide .</p>
        </div>
    
       
    
        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by LIC
          </p>
        </div>
    
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
          <li><a class="facebook" href="#"><Icon name="facebook"/></a></li>
          <li><a class="twitter" href="#"><Icon name="whatsapp"/></a></li>
          <li><a class="dribbble" href="#"><Icon name="instagram"/></a></li>
          <li><a class="linkedin" href="#"><Icon name="telegram"/></a></li>   
          </ul>
        </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;