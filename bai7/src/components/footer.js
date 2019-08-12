import '../Body.css';
import React,{ Component} from 'react';
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="width-80">
                    < div className="icon-footer" >
                        <img className="facebook" alt=' ' src="http://academy.ows.vn/assets/images/site/facebook-white.svg?v=1528442859"></img>
                        <img className="twitter margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/twitter-white.svg?v=1528442859"></img>
                        <img className="google margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/google-white.svg?v=1528442859"></img>
                        <img className="youtube margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/youtube-white.svg?v=1528442859"></img>
                        <img className="linkedin margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/linkedin-white.svg?v=1528442859"></img>
                        <img className="pinterest margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/pinterest-white.svg?v=1528442859"></img>
                        <img className="instagram margin-left-25"alt=' ' src="http://academy.ows.vn/assets/images/site/instagram-white.svg?v=1528442859"></img>
                    </div>
                    <div className="text-footer">
                        © 2015 | Design &amp; Developer by Daotaonoibo Platform V3.0 | All Rights Reserved
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer
