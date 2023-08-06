import React from "react";
import "./Footer.css";

// import email from "../images/email.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer_links_div">
            <h2>SITE MAP</h2>
            <a href="/About"> About</a>
            <a href=""> Next Trips</a>
            <a href=""> Gallery</a>
            <a href=""> Reviews</a>
            <a href="/Support">Support us</a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Site Built with Love For PaddleXplorer</h4>
             <a href="https://www.redi-school.org/">
                 <h5>By ReDI School <br /> in München, Germany.</h5> 
                </a> 

          </div>
          <div className="sb_footer_links_div">
            <h2>CONTACT US </h2>
            <p> Clubul Copiilor Năsăud</p>
            <p> DN17C 9, Nasaud 425200,</p>
            <p> Romania</p>
            <div className="socialmediaa">
            <p>
                
                  {/* <img src={email} alt="f" /> */}
                   Email: clud_nasaud@yahoo.com 
                
              </p>

      <p>Phone: +40263361447 </p>
        

            </div>
          </div>
        </div>
      </div>
  
     
    </div>
    // </div>
  );
};
export default Footer;