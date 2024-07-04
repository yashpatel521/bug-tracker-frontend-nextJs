"use client";
import { Button } from "@/components/ui/button";
import { SECURE_POST } from "@/lib/request";
import React from "react";

const AddRoleForm = () => {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [successMessage, setSuccessMessage] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    setSuccessMessage("");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const roleName = formData.get("roleName");

    console.log("Role Name:", roleName);

    const response = await SECURE_POST("/roles", { name: roleName });
    if (response.success) {
      setSuccessMessage("Role added successfully!");
    } else {
      console.error("Failed to add role:", response.error);
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row border m-5">
      <div className="p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">
          Add New Role
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="roleName" className="block text-sm font-medium">
              Role Name
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
            Add Role
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddRoleForm;
