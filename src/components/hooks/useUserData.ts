import { LoginUser } from "@/types";
import { useState, useEffect } from "react";

const useUserData = (): LoginUser | null => {
  const [user, setUser] = useState<LoginUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return user;
};

export default useUserData;
