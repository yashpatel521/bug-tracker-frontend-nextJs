"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SECURE_POST } from "@/lib/request";
import { useFetchRoles } from "@/components/hooks/useFetchRoles";
import RoleSelect from "../RoleSelect";

const AddSubRoleForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { roleResponse, errorMessage: fetchError } = useFetchRoles();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    setSuccessMessage("");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subRoleName = formData.get("roleName");
    const selectedRole = formData.get("selectRole");

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
          <div className="mb-4">
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
          <div className="mb-4">
            <label
              htmlFor="selectRole"
              className="block text-sm font-medium mb-1"
            >
              Select Role
            </label>
            <RoleSelect
              roles={roleResponse.data}
              name="selectRole"
              placeholder="Select a Role"
            />
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
