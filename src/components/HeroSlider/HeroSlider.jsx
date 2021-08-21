import { useCallback, useEffect, useState } from "react";
import fakeData from "../../data/fake-data";
import HeroSliderItem from "../HeroSliderItem/HeroSliderItem";
import SliderControler from "../SliderControler/SliderControler";

const HeroSlider = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderLength = fakeData.length;

  const handlePervSlideClick = () => {
    const pervSlide =
      activeSlider - 1 < 0 ? sliderLength - 1 : activeSlider - 1;
    setActiveSlider(pervSlide);
  };

  const handleNextSlideClick = useCallback(() => {
    const nextSlide =
      activeSlider + 1 > sliderLength - 1 ? 0 : activeSlider + 1;
    setActiveSlider(nextSlide);
  }, [activeSlider, sliderLength]);

  useEffect(() => {
    const autoChangeSlider = setInterval(() => {
      handleNextSlideClick();
    }, [3000]);
    return () => {
      clearInterval(autoChangeSlider);
    };
  }, [handleNextSlideClick]);

  return (
    <>
      <div className="hero-slider">
        {fakeData.map((item, index) => (
          <HeroSliderItem
            key={item.id}
            {...item}
            active={index === activeSlider}
          />
        ))}
      </div>
      <SliderControler
          activeSlider={activeSlider}
          sliderLength={sliderLength}
          pervSlider={handlePervSlideClick}
          nextSlider={handleNextSlideClick}
        />
    </>
  );
};

export default HeroSlider;
