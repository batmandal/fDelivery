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
};

export type CartFood = {
  food: FoodType;
  quantity: number;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [basketFood, setBasketFood] = useState<CartFood[]>([]);

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

  const addFoodToCart = ({ food, quantity }: CartFood) => {
    setBasketFood((prev) => {
      return [...prev, { food, quantity }];
    });
  };

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
