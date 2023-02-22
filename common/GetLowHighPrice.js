import { carItems } from "../server/cartItems";

const GetLowHighPrice = () => {
  return {
    min: Math.min.apply(
      Math,
      carItems.map(function (o) {
        return o.final_price;
      })
    ),
    max: Math.max.apply(
      Math,
      carItems.map(function (o) {
        return o.final_price;
      })
    ),
  };
};

export default GetLowHighPrice;
