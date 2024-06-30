"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (status === "loading") return; // Do nothing while loading
  //   if (!session) {
  //     router.push("/login");
  //   }
  // }, [session, status, router]);
  // if (status === "loading" || !session) {
  //   return null; // No need to show a separate loader as NextTopLoader will handle it
  // }
  return <>{children}</>;
};

export default AuthenticatedRoute;
