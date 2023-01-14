
import { useState } from "react";
import Slider from "react-slick";
import img from '../assets/naruto01.jpg'
import img2 from '../assets/naruto02.jpg'
import img3 from '../assets/naruto03.jpg'
export const Carrusel3 = () => {


  const [selectt, setselectt] = useState(0)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <Slider
      vertical
      dots
      slidesToShow={1}
      arrows={false}
      autoplay
      fade
      autoplaySpeed={5000}
      className="raa"
      dotsClass="ree"
      appendDots={dots => <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div style={{ margin: "0px", color: "blue" }}> {dots} </div>
      </div>}

      customPaging={i => <div
        className={i == selectt ? "bottoms b-select" : "bottoms"}

      >
        {" "}
      </div>}

      afterChange={current => setselectt(current)}
    >
      <div>
        <img src={img} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Slider>
  );
}