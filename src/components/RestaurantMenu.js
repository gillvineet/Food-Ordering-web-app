import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resinfo = useRestaurantMenu(resID);
  const [showIndex,setshowIndex]=useState(null);
  if (resinfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;
  //   const { itemCards } =
  //     resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categoties =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
 

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      {categoties.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index==showIndex&&true}
          setshowIndex={()=>setshowIndex(index)}
         
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
