"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SECURE_GET, SECURE_POST } from "@/lib/request";
import { Role } from "@/types";

const AddSubRoleForm = () => {
  // get roles
  const [response, setResponse] = useState({
    success: false,
    data: [],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // Fetch data from API or local state here
  useEffect(() => {
    const getData = async () => {
      const responseApi = await SECURE_GET("/roles");
      if (responseApi.success) {
        setResponse(responseApi);
      } else {
        console.log("Failed to fetch roles", responseApi);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    setSuccessMessage("");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subRoleName = formData.get("roleName");
    const selectedRole = formData.get("selectRole");

    console.log("Sub Role Name:", subRoleName);
    console.log("Selected Role:", selectedRole);

    if (!subRoleName || !selectedRole) {
      setErrorMessage("Please fill all fields");
      return;
    }

    const response = await SECURE_POST("/subRoles", {
      name: subRoleName,
      roleId: +selectedRole,
    });
    if (response.success) {
      setSuccessMessage("Role added successfully!");
    } else {
      console.error("Failed to add role:", response.error);
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row border m-5">
      <div className="p-6 rounded-lg shadow-lg w-full ">
        <h2 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">
          Add New Sub Role
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label htmlFor="roleName" className="block text-sm font-medium">
              Sub Role Name
            </label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              className="mt-1 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter role name"
              required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="selectRole"
              className="block text-sm font-medium mb-1"
            >
              Select Role
            </label>
            <Select name="selectRole">
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select a Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {response.data.map((role: Role, index) => (
                    <SelectItem
                      key={index}
                      value={role.id.toString()}
                      className="capitalize"
                    >
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {errorMessage && (
            <div className="mb-2 p-2 text-sm text-red-700" role="alert">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-2 p-2 text-sm text-green-700" role="alert">
              {successMessage}
            </div>
          )}
          <Button
            type="submit"
            className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Add Sub Role
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddSubRoleForm;
