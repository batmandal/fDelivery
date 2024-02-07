import { api } from "@/common/axios";
import { AxiosError } from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

type User = {
  email: string;
  _id: string;
};

type AuthContextType = {
  isLogged: boolean;
  signup: (email: String, password: String, name: String) => void;
  login: (email: String, password: String) => void;
  //   logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const login = async (email: String, password: String) => {
    try {
      const { data } = await api.post("/logIn", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);
      console.log(data.message);

      setIsLogged(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message ?? error.message);
      }
    }
  };

  const signup = async (email: String, password: String, name: String) => {
    try {
      const { data } = await api.post("signUp", {
        email,
        password,
        name,
      });

      const { token } = data;
      router.push("/");
      localStorage.setItem("token", token);
      console.log(data.message);
      toast.success(data.message);
    } catch (error) {
      console.log("login error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        // user: {},
        signup,
        login,
        // logout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
