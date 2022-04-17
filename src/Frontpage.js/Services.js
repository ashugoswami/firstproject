import React from "react";
import coft from "../images/soil2.jpg";
import Craus from "./Craus";
import Crdud from "./Crdud";
import Croussr from "./Croussr";
import Header from "./Header";

export default function Services() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${coft})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "24px",
            fontWeight: "bold",
            paddingTop: "30px",

            color: "white",
            position: "relative",
            top: "80px",
          }}
        >
          <h1>The Origins of Coffee</h1>
          <p>
            Where does coffee come from? And why do different coffees taste
            different? Read our expert guide to where coffee is grown, the types
            of bean and the all-important roasting process.
          </p>
          <h5>
            The humble coffee bean is capable of truly amazing stuff. Starting
            off nestled in the centre of the cherries found on the coffee plant,
            the beans are a hidden treasure cherished by people all over the
            world. But despite this world-renowned love, people rarely stop to
            consider what are the origins of the beans I’m drinking and why do
            different coffees taste so different?
          </h5>
        </div>

        <div
          className="container"
          style={{
            textAlign: "center",

            padding: "44px",
            fontWeight: "bold",
            paddingTop: "30px",
            backgroundColor: "rgb(211, 211, 226)",
            borderTopLeftRadius: "30px",
            position: "relative",
            top: "100px",
          }}
        >
          <h1>Where does coffee come from?</h1>
          <p>
            Coffee is grown in more than 50 countries around “the coffee belt”,
            including locations such as Africa, Latin America and Asia. These
            areas have just the right combination of altitude, soil and weather,
            providing the perfect climate for growing the most delicious beans.
          </p>
          <div className="crd" style={{ padding: "20px" }}>
            <Crdud />
          </div>
        </div>
        <div className="crau" style={{ paddingTop: "140px" }}>
          <Craus />
        </div>
        <div className="crau" style={{ paddingTop: "50px" }}>
          <Croussr />
        </div>
      </div>
      <div className="craau" style={{ position: "relative", top: "230vh" }}>
        <Header />
      </div>
    </>
  );
}
