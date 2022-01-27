import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-format";
import { addToBasket , removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({ id, title, price, description, category, image, hasPrime , rating}) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
          id,
          title,
          price,
          description,
          category,
          image,
          rating,
          hasPrime,
        };
        //Push items into redux store
        dispatch(addToBasket(product));
    }
    const removeItemFromBasket = ()=>{
        //remove the item from redux store
        dispatch(removeFromBasket({id}));
    }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, idx) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3 ">{description}</p>
        <Currency value={price} displayType={"text"} prefix={"$"} />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
          </div>
        )}
      </div >
      <div className="flex flex-col space-y-2 my-5 justify-self-end"> 

      <button onClick={addItemToBasket}  className="button">Add to Basket</button>
      <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
