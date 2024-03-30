import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./Card.css";

function Card(props) {
  return (
    <div className="team-card">
      <div>
        <div className="cardImg">
          <img src={props.img} alt="" />
        </div>
        <div className="content">
          <h4 className="pos" style={{ fontWeight: 500, fontSize: "18px" }}>
            {props.position}
          </h4>
          <h4 className="pos">{props.name}</h4>
          <div className=" flex flex-col justify-center items-center">
            <ul className="flex justify-center py-2">
              <li className="social-links font-sans text-black mx-1 text-l">
                <a href={props.link} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ className: "react-icons", color: "white" }}>
                    <BsLinkedin className="" />
                  </IconContext.Provider>
                </a>
              </li>
              <li className="social-links font-sans text-black mx-1  text-l">
                <a href={props.insta} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ className: "react-icons", color: "white" }}>
                    <BsInstagram className="" />
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Card;
