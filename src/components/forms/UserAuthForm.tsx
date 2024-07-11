"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlobalContext } from "@/context";
import Cookies from "js-cookie";
import { SECURE_POST } from "@/lib/request";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const initialFormdata = {
  email: "",
  password: "",
};

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialFormdata);
  const context = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!context) return;

    const { isAuthUser } = context;
    if (isAuthUser) {
      router.push("/dashboard");
    }
  }, [context, router]);

  if (!context) {
    // Handle the case where context is null
    return <div>Loading...</div>;
  }

  const { isAuthUser, setIsAuthUser, user, setUser } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      // const res = await login(formData);

      const response = await SECURE_POST("/users/login", formData);

      if (response.success) {
        setIsAuthUser(true);
        setUser(response.data.user);
        setFormData(initialFormdata);
        Cookies.set("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        setIsAuthUser(false);
      }
    } catch (error) {
      setIsAuthUser(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleLogin}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <Button
            className="bg-black border text-white hover:bg-[var(--themeColor)] hover:text-black"
            type="submit"
            disabled={isLoading}
          >
            <div>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
            </div>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
