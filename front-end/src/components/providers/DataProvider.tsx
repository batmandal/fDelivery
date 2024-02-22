import { api } from "@/common/axios";
import { PropsWithChildren, createContext, useContext } from "react";
import { toast } from "react-toastify";

type DataContextType = {
  categoryPost: (categoryName: String) => void;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
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

  return (
    <DataContext.Provider value={{ categoryPost }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
