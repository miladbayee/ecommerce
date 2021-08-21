import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { HiShoppingCart } from "react-icons/hi";

const HeroSliderItem = ({ active, ...props }) => {
  const { id, title, description, img, color, path } = props;
  return (
    <div className={`hero-slider__item ${active ? "active" : ""}`}>
      <div className="hero-slider__item__info">
        <div className={`hero-slider__item__info__title color-${color}`}>
          <p>{title}</p>
        </div>
        <div className="hero-slider__item__info__description">
          <p>{description}</p>
        </div>
        <div className="hero-slider__item__info__btn">
          <Link to={path}>
            <Button background={color} animate={true} icon={<HiShoppingCart /> }>
              shop
            </Button>
          </Link>
        </div>
      </div>

      <div className="hero-slider__item__img">
        <img src={img} alt={id} />
        <div className={`shape bg-${color}`}></div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
