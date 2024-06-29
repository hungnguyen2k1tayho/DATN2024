import React from "react";
import "../Styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </div>
      <p> Hotline : 19006789 </p>
      <p> &copy;2024 hungthinh.vn.com </p>
    </div>
  );
}

export default Footer;
