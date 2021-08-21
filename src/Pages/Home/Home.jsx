import HeroSlider from "../../components/HeroSlider";
import useTitle from "../../hooks/useTitle";
import Section from "../../components/Section";
import SectionTitle from "../../components/Section/SectionTitle";
import SectionBody from "../../components/Section/SectionBody";
import PocliyCard from "../../components/PolicyCard/PocliyCard";

import policyData from "../../data/policy-data";
import Grid from "../../components/Grid";
import useStateContext from "../../hooks/useStateContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import getRandomProduct from "../../utils/getRandomProduct";
import Placeholder from "../../components/Placeholder";

const Home = () => {
  useTitle();

  const { state } = useStateContext();
  const status = state.status;
  const products = state.products;

  const womenClothingProduct = products.filter(
    (item) => item.category === `women's clothing`
  );

  const menClothingProduct = products.filter(
    (item) => item.category === `men's clothing`
  );

  const placeholderArray = [1, 2, 3, 4];
  const renderPlaceholder = placeholderArray.map((item, index) => (
    <Placeholder key={index} />
  ));
  return (
    <>
      {/* slider */}
      <HeroSlider />

      {/* policy card */}
      <Section>
        <SectionTitle>
          <h3>Policy</h3>
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {policyData.map((item) => (
              <PocliyCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* women special sale */}
      <Section>
        <SectionTitle>
          <h3>women's clothing special sale</h3>
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {status === "success"
              ? getRandomProduct(womenClothingProduct, 4).map((item) => (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                  />
                ))
              : renderPlaceholder}
          </Grid>
        </SectionBody>
      </Section>

      {/* men special sale */}
      <Section>
        <SectionTitle>
          <h3>men's clothing special sale</h3>
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {status === "success"
              ? menClothingProduct.map((item) => (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                  />
                ))
              : renderPlaceholder}
          </Grid>
        </SectionBody>
      </Section>
    </>
  );
};

export default Home;
