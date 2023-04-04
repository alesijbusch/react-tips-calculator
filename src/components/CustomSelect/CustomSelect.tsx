import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectStyles } from "./styles";
import { Option } from "../../types/types";

interface CustomSelectProps {
  options: Option[];
  onChange: (option: SingleValue<Option>) => void;
  defaultValue: Option;
}

export const CustomSelect = ({
  options,
  onChange,
  defaultValue,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      styles={SelectStyles}
    />
  );
};
