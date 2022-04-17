import React, { useState } from "react";
import "../Btn.css";

import abt from "../images/About-Us.jpg";
import { hardCodedValues } from "../config/config";

export default function About() {
  const [text, settext] = useState("");
  const [showText, setShowText] = useState(false);
  const { newtext1, newtext2, newtext3 } = hardCodedValues;

  const handleClick = (val) => {
    if (val === "1") {
      settext(newtext3);
    } else if (val === "2") {
      settext(newtext2);
    } else if (val === "3") {
      settext(newtext1);
    }
    setShowText((prev) => !prev);
  };
  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${abt})`,
          height: "102vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100vw",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            top: "25%",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            className="find mx-2"
            title="click it"
            // onClick={aboutt}
            onClick={() => handleClick("1")}
          >
            About Us
          </button>
          <button
            type="button"
            className="btn btn-outline-light mx-2"
            title="click it"
            // onClick={aboutt2}
            onClick={() => handleClick("2")}
          >
            Company-Mission
          </button>
          <button
            type="button"
            className="findd mx-2"
            title="click it"
            // onClick={aboutt3}
            onClick={() => handleClick("3")}
          >
            Foundation
          </button>
        </div>
        {showText && (
          <div className=" container text">
            <p>{text}</p>
          </div>
        )}
        {!showText && (
          <div className=" container text">
            <p>CLICK UPPER Buttons to know more</p>
          </div>
        )}
      </div>
    </>
  );
}

// const aboutt = () => {
//   let newtext =
//     "Coffee Bar, a part of Coffee Day Global Limited, is India's favourite hangout for coffee and conversations. Popularly known as CBR, we strive to provide the best experience to our guests. Our coffees are sourced from thousands of small coffee planters, who made us who we are today and we're glad to be a part of their lives. We opened our first cafe in 1996 at Brigade Road in Bangalore  the youth and the young at heart immediately took to the cafe, and it continues to be one of the most happening places in the city. CBR to the youth is a “hangout” spot where they meet people, make conversations, and have a whole lot of fun over steaming cups of great coffee.It's been an exciting journey since then to becoming the largest organised retail cafe chain in the country";
//   settext(newtext);
// };

// const aboutt2 = () => {
//   let newtext =
//     "Welcome to Cafe Coffee Bar, a coffee shop where the young at heart unwind. We're a division of Coffee Day Global Limited. This coffee goes all over the world to clients across, Europe and Japan, making us one of the top coffee exporters in the country. Our mission is a simple one. To be the best Cafe chain by offering a world class coffee experience at affordable prices.";
//   settext(newtext);
// };

// const aboutt3 = () => {
//   let newtext =
//     "FoundationAt Coffee Bar we believe in giving back. That's why we run the Shankarakudige Veerappa Gangaiah Hegde Education Trust. Setup in 2002 as a non-profit trust with the mission of Education for All , it runs two institutions, Amber Valley Residential School and SVGH Vocational Training College.The SVGH Vocational Training College was established in April 2005 by the Trust with an aim to bridge the gap between the urban and rural youth by training the economically underprivileged and making sure they land placements. Over 1300 students celebrate this opportunity to develop their personal and professional skills in this rapidly changing environment. ";
//   settext(newtext);
// };
