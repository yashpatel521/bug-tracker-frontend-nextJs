import React, { useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { members } from "@/data/teamMembers";

const avatarStyles: StylesConfig<any> = {
  control: (styles) => ({ ...styles, backgroundColor: "transparent" }),
  menu: (styles) => ({ ...styles, backgroundColor: "black" }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected
      ? "transparent"
      : isFocused
      ? "#f3e8ff"
      : "transparent",
    color: isSelected ? "black" : isFocused ? "black" : styles.color,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "1px solid gray",
    borderRadius: "20px",
    margin: "4px 1px",
    fontSize: "0.9rem",
    padding: "0px",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: styles.color,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      backgroundColor: "red",
      color: "white",
    },
  }),
};

const Option = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={props.data.src} alt={props.data.name} />
        <AvatarFallback>{props.data.name.charAt(0)}</AvatarFallback>
      </Avatar>
      {props.data.name}
    </div>
  </components.Option>
);

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>
    <div className="flex items-center">
      <Avatar>
        <AvatarImage
          src={props.data.src}
          alt={props.data.name}
          className="w-6 h-6 mt-2 rounded-full"
        />
        <AvatarFallback>{props.data.name.charAt(0)}</AvatarFallback>
      </Avatar>
      {props.data.name}
    </div>
  </components.MultiValue>
);

const MultiValueRemove = (props: any) => (
  <components.MultiValueRemove {...props}>
    <span style={{ color: "red", fontWeight: "bold" }}>×</span>
  </components.MultiValueRemove>
);

const ClearIndicator = (props: any) => {
  const {
    innerProps: { ref, ...restInnerProps },
    clearValue,
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={{ cursor: "pointer" }}
      onClick={clearValue}
    >
      <span style={{ color: "red", marginRight: "5px" }}>✕</span>
    </div>
  );
};

const AvatarMultiSelect = ({ selectedUsers }: { selectedUsers: any[] }) => {
  const items = members.map((member) => ({
    ...member,
    value: member.id,
    label: member.name,
  }));
  const [selectedOptions, setSelectedOptions] = useState(selectedUsers || []);

  const animatedComponents = makeAnimated();

  const handleChange = (selected: any) => {
    setSelectedOptions(selected || []);
    // if (onChange) {
    //   onChange(selected || []);
    // }
  };

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={{
          ...animatedComponents,
          MultiValueRemove,
          MultiValue,
          Option,
          ClearIndicator,
        }}
        isMulti
        options={items}
        onChange={handleChange}
        value={selectedOptions}
        styles={avatarStyles}
        className="bg-transparent"
        isClearable={true}
      />
    </div>
  );
};

export default AvatarMultiSelect;
