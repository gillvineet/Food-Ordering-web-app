import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems,setshowIndex  }) => {
  const handleclick = () => {
    // setShowItems(!showItems);
    setshowIndex();
  };

  return (
    <div>
     
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
          <div className="flex justify-between cursor-pointer" onClick={handleclick}>
            <span className="font-bold text-lg">
              {data.title}({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          { showItems&&<ItemList items={data.itemCards}/>
          }       
        </div>
        </div>
    
   
  );
  };

export default RestaurantCategory;