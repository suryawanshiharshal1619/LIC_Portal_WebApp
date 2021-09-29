import "./Home.css"
import { Link } from "react-router-dom";
import user from "../images/insurance.jpg"
import img from "../images/img.jpg"
const Home=()=>{
    return(
        <div  style={{display:"flex",overflowX:"auto"}}>
            <div class="icon-bar">
                <a class="active" href="#"><i class="fa fa-home"></i></a>
                <Link to="/policy" style={{backgroundColor:"burlywood"}}><img src="https://5.imimg.com/data5/RR/RS/GU/ANDROID-94764980/product-jpeg-500x500.jpg"/>Products</Link>
                <Link to="/claim" style={{backgroundColor:"lightsalmon"}}><img src="https://www.symbols.com/images/symbol/1/337_baggage-claim.png"/>Claim Policy</Link>
                <Link to="/trackclaim" style={{backgroundColor:"cornsilk"}}><img src="https://image.shutterstock.com/image-vector/delivery-insurance-filled-outline-vector-600w-1684065991.jpg"/>Track Claim</Link>
                <Link to="/complaint" style={{backgroundColor:"mistyrose"}}><img src="https://previews.123rf.com/images/argus456/argus4561605/argus456160508230/56061221-customer-complaints-3d-rendering-yellow-road-sign-on-a-white-background.jpg"/>Register Complaint</Link>
                <Link to="/complaintStatus" style={{backgroundColor:"cornsilk"}}><img src="https://image.shutterstock.com/image-vector/delivery-insurance-filled-outline-vector-600w-1684065991.jpg"/>Track Complaint</Link>
                <a class="active" href="#"><i class="fa fa-home"></i></a>
                <a class="active" href="#"><i class="fa fa-home"></i></a>    
           </div>
           <div style={{marginLeft:25,backgroundColor:"khaki",fontSize:36,overflowX:"auto"}}>
                <p style={{fontFamily:"sans-serif"}}>
                    <h1>Importance of Insurance</h1>
                         The world we live in is full of uncertainties and risks. Individuals, families, businesses, properties and assets are exposed to different types and levels of risks. These include risk of losses of life, health, assets, property, etc. While it is not always possible to prevent unwanted events from occurring, financial world has developed products that protect individuals and businesses against such losses by compensating them with financial resources. Insurance is a financial product that reduces or eliminates the cost of loss or effect of loss caused by different types of risks.

                            Apart from protecting individuals and businesses from many kinds of potential risks, the Insurance sector contributes significantly to the general economic growth of the nation by providing stability to the functioning of businesses and generating long-term financial resources for the industrial projects. Among other things, Insurance sector also encourages the virtue of savings among individuals and generate
                </p>
                <div style={{display:"flex"}}>
                    <div style={{width:"1000px",height:"500px"}}> <img src={user} ></img></div>
                    <div style={{lineHeight:"50px",padding:"70px 0",color:"Highlight"}}>
                           <view style={{ flexDirection: 'row', alignItems: 'center' }} >
                           
                           <text style={{ fontSize: 60 }}><b>Don’t crash without us better than the rest auto insurance.</b></text>
                           </view>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{width:"800px",height:"500px"}}> <img src={img} ></img></div>
                    <div style={{lineHeight:"50px",padding:"70px 0",color:"Highlight"}}>
                           <view style={{ flexDirection: 'row', alignItems: 'center' }} >
                           
                           <text style={{ fontSize: 60 }}><b>Life insurance is more than money in the bank.</b></text>
                           </view>
                    </div>
                </div>
           </div>
        </div>
    
    );
}
export default Home

