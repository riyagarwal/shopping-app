import "./HomePage.css";
import Card from "../card/Card";

const HomePage = () => {
  let products;

  async function fetchData() {
    try {
      const BASE_URL = "https://dummyjson.com/products";
      const result = await fetch(BASE_URL);
      // console.log(result);
      const response = await result.json();
      // console.log(response);
      products = response.products;
      console.log(products); //array of objects
    } 
    catch (err) {
      console.log(err);
    }
  }

  fetchData();

  return (
    <>
      {/* {products.forEach((item) => {
        <Card img_src={item.images[0]} title={item.title} price={item.price} />;
      })} */}
    </>
  );
};

export default HomePage;
