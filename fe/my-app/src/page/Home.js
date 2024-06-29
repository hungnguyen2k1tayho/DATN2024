import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/thailand001.jpg"; // Sửa lại đuôi tệp nếu cần
import "../Styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Exciting new event, taking place on the weekend</h1>
        <p>Travel to Thailand to discover attractive places</p>
        <Link to="/join">
          {" "}
          {/* Thêm thuộc tính 'to' */}
          <button>Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
