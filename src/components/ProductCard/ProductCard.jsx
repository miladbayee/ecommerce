import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { addProductItemToCartdAction, addProductListToCartdAction } from "../../context/stroeAction";
import useDispatchContext from "../../hooks/useDispatchContext";
import Button from "../Button";

const ProductCard = ({ ...props }) => {
  const { id, title, image, price } = props;

  const { dispatch } = useDispatchContext();

  const addToCartHandlerClick = (id,title,price,image) => {
    dispatch(addProductItemToCartdAction(id));
    dispatch(addProductListToCartdAction(id,title,price,image));
  };
  return (
    <div className="product-card">
      <div className="product-card__img">
        <Link to={`/catalog/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>

      <div className="product-card__content">
        <div className="product-card__title">
          <h3>{title}</h3>
        </div>
        <div className="product-card__price">
          <p>{price} $</p>
          <del className="color-red">90 $</del>
        </div>
        <div className="product-card__btn">
          <Button
            animate={true}
            icon={<HiOutlineShoppingCart />}
            onClick={() => addToCartHandlerClick(id,title,price,image)}
          >
            add to basket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
