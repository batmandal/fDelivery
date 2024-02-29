"use client";

import { api } from "@/common/axios";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { FoodType } from "../Foods";

type DataContextType = {
  categoryPost: (categoryName: String) => void;
  basketFood: CartFood[];
  setBasketFood: Dispatch<SetStateAction<CartFood[]>>;
  addFoodToCart: (params: CartFood) => void;
  imageUrl: any;
  setImageUrl: any;
  foodPost: (props: FoodPostType) => Promise<void>;
  totalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  // addPrice: any;
};

export type CartFood = {
  food: FoodType;
  quantity: number;
};

export type FoodPostType = {
  name: string;
  categoryName: string;
  ingredient: string;
  price: string;
  onSale: boolean;
  image: string;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [basketFood, setBasketFood] = useState<CartFood[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [imageUrl, setImageUrl] = useState<null | any>("/default.webp");

  const categoryPost = async (categoryName: String) => {
    try {
      const { data } = await api.post("/categories", {
        categoryName,
      });

      toast.success(data.message);
    } catch (error) {
      console.log("add category error");
    }
  };

  const foodPost = async (props: FoodPostType) => {
    const { name, categoryName, ingredient, price, onSale, image } = props;
    try {
      const { data } = await api.post("/foods", {
        name,
        categoryName,
        ingredient,
        price,
        onSale,
        image,
      });

      toast.success(data.message);
    } catch (error) {
      console.log("createFood error");
    }
  };

  const addFoodToCart = ({ food, quantity }: CartFood) => {
    setBasketFood((prev) => {
      return [...prev, { food, quantity }];
    });
  };

  // let currentPrice = 0;
  // const addPrice = basketFood.forEach(
  //   (element) => (currentPrice = +element.food.price)
  // );

  useEffect(() => {
    if (!basketFood.length) return;
    const data = JSON.stringify(basketFood);
    localStorage.setItem("cart", data);
  }, [basketFood]);

  useEffect(() => {
    const rawData = localStorage.getItem("cart");
    if (!rawData) return;
    const data = JSON.parse(rawData);
    setBasketFood(data);
  }, []);

  return (
    <DataContext.Provider
      value={{
        categoryPost,
        basketFood,
        setBasketFood,
        addFoodToCart,
        imageUrl,
        setImageUrl,
        foodPost,
        totalPrice,
        setTotalPrice,
        // addPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
