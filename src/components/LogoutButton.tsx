import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LogoutButton: React.FC = () => {
  return <Button className="bg-red-500 text-white">Logout</Button>;
};

export default LogoutButton;
