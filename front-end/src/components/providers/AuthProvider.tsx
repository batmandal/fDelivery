import { api } from "@/common/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type User = {
  email: string;
  _id: string;
  name: string;
  password: string;
};

type AuthContextType = {
  isLogged: boolean;
  userData: object;
  signup: (email: String, password: String, name: String) => void;
  login: (email: String, password: String) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});
  console.log(userData, "user Data shuu");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const login = async (email: String, password: String) => {
    try {
      const { data } = await api.post("/logIn", {
        email,
        password,
      });

      const { token, user } = data;

      localStorage.setItem("token", token);
      console.log(data.message, user, token);

      setUserData(user);
      useEffect(() => {
        userData;
      }, []);

      toast.success(data.message);

      // setIsLogged(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message ?? error.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setIsLogged(false);
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
      // console.log(data.message);
      toast.success(data.message);
    } catch (error) {
      console.log("login error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        userData,
        // user: {},
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);