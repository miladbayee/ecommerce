import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const SliderControler = ({
  pervSlider,
  nextSlider,
  activeSlider,
  sliderLength,
}) => {

  return (
    <div className="hero-slider__controler">
      <div className="hero-slider__controler__perview" onClick={pervSlider}>
        <BiChevronLeftCircle />
      </div>
      <div className="hero-slider__controler__counter">
        <span>
          {activeSlider + 1}/{sliderLength}
        </span>
      </div>
      <div className="hero-slider__controler__next" onClick={nextSlider}>
        <BiChevronRightCircle />
      </div>
    </div>
  );
};

export default SliderControler;
