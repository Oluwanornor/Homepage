import React from "react";
import puzzle from "../assets/images/image-web-3-desktop.jpg";
import "./Hompage.css";
import gaming from "../assets/images/image-gaming-growth.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import top from "../assets/images/image-top-laptops.jpg";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="genDiv">
      <div className="firstMainDiv">
        <div className="f-Div">
          <div className="f-SubDiv">
            <img src={puzzle} alt="" />
          </div>
          <div className="s-SubDiv">
            <div className="bright">
              <h1>The Bright Future of Web 3.0</h1>
            </div>
            <div className="dive">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people,
                But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="secondMainDiv">
          <h2>New</h2>
          <div>
            <Link className="links"> Hydrogen VS Electric Cars</Link>
            <p>Will hydrogen fueled cars ever catsch up to EVs</p>
            <hr />
          </div>
          <div>
            <Link className="links">The Downside of AI Artistry</Link>
            <p>
              What are the possible adverse effect of on-demand Ai image
              generation?
            </p>
            <hr />
          </div>
          <div>
            <Link className="links">Is VC Funding Drying Up?</Link>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="thirdMainDiv">
        <div className="one">
            <img src={retro} alt="" />
            <div className="oneMini">
            <h2>01</h2>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old Pcs are given modern upgrades?</p>
          </div>
        </div>
        <div className="one-2">
        <img src={top} alt="" />
          <div className="oneMini"> 
            <h2>02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best Picks for various needs and budgets</p>
          </div>
        </div>
        <div className="one-3">
        <img src={gaming} alt="" />
          <div className="oneMini">
            <h2>03</h2>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparkled fresh opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
