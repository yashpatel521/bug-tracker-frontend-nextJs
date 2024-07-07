import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Role } from "@/types";

interface RoleSelectProps {
  roles: Role[];
  name: string;
  placeholder: string;
}

const RoleSelect: React.FC<RoleSelectProps> = ({
  roles,
  name,
  placeholder,
}) => (
  <Select name={name}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {roles.map((role, index) => (
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
);

export default RoleSelect;
