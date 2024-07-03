"use client";
import { createContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";
import { LoginUser } from "@/types";
import { useRouter } from "next/navigation";

interface GlobalContextProps {
  showNavModal: boolean;
  setShowNavModal: React.Dispatch<React.SetStateAction<boolean>>;
  commonLoader: boolean;
  setCommonLoader: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthUser: boolean;
  setIsAuthUser: React.Dispatch<React.SetStateAction<boolean>>;
  user: LoginUser | boolean;
  setUser: React.Dispatch<React.SetStateAction<LoginUser | boolean>>;
  logout: () => void;
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [commonLoader, setCommonLoader] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const [user, setUser] = useState<LoginUser | boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token") || "";
    if (token) {
      setIsAuthUser(true);
      try {
        const userData = JSON.parse(localStorage.getItem("user") || "{}");
        if (userData && Object.keys(userData).length !== 0) {
          setUser(userData);
        } else {
          throw new Error("No user data found");
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
        setUser(false);
      }
    } else {
      setIsAuthUser(false);
      setUser(false);
      router.push("/login");
    }
    setLoading(false);
  }, [router]);

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setIsAuthUser(false);
    setUser(false);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        showNavModal,
        setShowNavModal,
        commonLoader,
        setCommonLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
