import React from "react"
import "./footer.css"
import { SocialIcon } from 'react-social-icons'
export default function Footer(){

    return(
        <div className="footer_main">
            <div className="footer_inner">
            <p className="news_letter">Newsletter</p>
            <p style={{marginTop:"10px"}}>Get notified when new project is made</p>
             
             <div className="submission"><input type="email" placeholder="Email address"></input> <button>Subscribe</button></div>
             <div className="social">
                <p>Follow</p>
                <div className="social_icon">
                <SocialIcon url="https://twitter.com" target="_blank" style={{ height: 35, width: 35,}} fgColor="green" bgColor="white"/>
                <SocialIcon url="https://www.instagram.com/panthi.prabin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style={{ height: 35, width: 35}} bgColor="white" fgColor="red" />
                <SocialIcon url="https://www.facebook.com/prabin.panthi.52" target="_blank" style={{ height: 35, width: 35 }} bgColor="white" fgColor="blue"/>
                </div>
               

                
             </div>
            </div>
            
        </div>
    )
}