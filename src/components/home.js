import React from "react";
import { Parallax } from "react-parallax";
import First from "./images/main.jpeg";
import Second from "./images/piro.jpeg";
import Third from "./images/fourth.jpeg";
import Fourth from "./images/kxa.jpeg";
import Header from "./header";
import "./home.css";

export default function Home() {
  return (
    <div className="main">
      <Parallax
        strength={300}
        bgImage={First}
        className="parallax1"
        bgImageStyle={{ objectFit: "cover" }}
      >
        <Header />
      </Parallax>
      <Parallax
        strength={300}
        bgImage={Second}
        className="parallax2"
        bgImageStyle={{ objectFit: "cover" }}
      ></Parallax>
      <Parallax
        strength={300}
        bgImage={Third}
        className="parallax3"
        bgImageStyle={{ objectFit: "cover" }}
      ></Parallax>
      <Parallax
        strength={300}
        bgImage={Fourth}
        className="parallax4"
        bgImageStyle={{ objectFit: "cover" }}
      ></Parallax>
    </div>
  );
}
