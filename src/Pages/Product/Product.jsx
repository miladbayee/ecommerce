import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import Placeholder from "../../components/Placeholder";
import Button from "../../components/Button";
import Grid from "../../components/Grid";
import useStateContext from "../../hooks/useStateContext";
import useDispatchContext from "../../hooks/useDispatchContext";
import { addProductToCartdAction } from "../../context/stroeAction";

const Product = () => {
  const { slug } = useParams();
  const { state } = useStateContext();

  const { dispatch } = useDispatchContext();

  const addToCartHandlerClick = (id) => {
    dispatch(addProductToCartdAction(id));
  };

  const product =
    state.products.length > 0 &&
    state.products.filter((item) => item.id === Number(slug))[0];

  return product ? (
    <div className="product container">
      <Grid smCol={1} mdCol={1} col={2}>
        <div className="product__image">
          <div className="product__image__container">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="product__content">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product__content__pricing">
            <h2 className="product__content__pricing__price color-blue">
              {product.price} $
            </h2>
            <div className="product__content__pricing__rating">
              <p className="product__content__pricing__rating__count">
                <AiFillHeart className="color-red" />
                <span>{product.rating.count}</span>
              </p>
              <p className="product__content__pricing__rating__rate">
                <AiFillStar className="color-yellow" />
                <span>{product.rating.rate}</span>
              </p>
            </div>
          </div>
          <Button
            onClick={() => addToCartHandlerClick(product.id)}
            animate={true}
            icon={<HiOutlineShoppingCart />}
          >
            Add To Card
          </Button>
        </div>
      </Grid>
    </div>
  ) : (
    <Grid smCol={1} mdCol={1} col={1}>
      <Placeholder />
    </Grid>
  );
};

export default Product;
