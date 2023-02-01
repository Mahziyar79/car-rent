
import { useSelector } from "react-redux";
import CarItem from "./CarItem";


function CarCart({ sliceNubmer }) {
  const cars = useSelector((state) => state.carReducer.cars);
  return (
    <>
      {cars?.slice(0, sliceNubmer).map((carItem) => {
        return <CarItem key={carItem.id} carItem={carItem} />;
      })}
    </>
  );
}

export default CarCart;
