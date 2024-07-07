import { useEffect, useState } from "react";
import { SECURE_GET } from "@/lib/request";

export const useFetchRoles = () => {
  const [roleResponse, setRoleResponse] = useState({
    success: false,
    data: [],
  });
  const [subRoleResponse, setSubRoleResponse] = useState({
    success: false,
    data: [],
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const roleResponseApi = await SECURE_GET("/roles");
      if (roleResponseApi.success) {
        setRoleResponse(roleResponseApi);
      } else {
        setErrorMessage(roleResponseApi.message || "Failed to fetch roles");
      }
      const subRoleResponseApi = await SECURE_GET("/subRoles");
      if (subRoleResponseApi.success) {
        setSubRoleResponse(subRoleResponseApi);
      } else {
        setErrorMessage(
          subRoleResponseApi.message || "Failed to fetch sub-roles"
        );
      }
    };
    getData();
  }, []);

  return { roleResponse, subRoleResponse, errorMessage };
};
