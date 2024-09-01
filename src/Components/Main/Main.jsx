import React, { useEffect } from "react";

import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import "./Mian.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Main = () => {
  return (
    <div className="main">
      <div className="con">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Main;
