import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { StyledForm, Title, Subtitle, InputGroup, Total } from "./styles";
import { Option } from "../../types/types";

const options: Option[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tips, setTips] = useState<Option>(options[0]);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleBill = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const handlePerson = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value);
  };

  useEffect(() => {
    setIsDisabled(bill && persons ? false : true);
  }, [bill, persons]);

  const handleTotal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotal((+bill + (+bill * tips.value) / 100) / +persons);
  };

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          type="number"
          value={bill}
          onChange={handleBill}
          placeholder="Enter bill"
        />
        <Input
          type="number"
          value={persons}
          onChange={handlePerson}
          placeholder="Enter persons"
        />
        <CustomSelect
          options={options}
          setTips={setTips}
          defaultValue={options[0]}
        />
      </InputGroup>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button disabled={isDisabled} />
    </StyledForm>
  );
};
