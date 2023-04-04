import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { StyledForm, Title, Subtitle, InputGroup, Total } from './styles';
import { SingleValue } from 'react-select';
import { Option } from '../../types/types';

export const Form = () => {
  const options: Option[] = [
    { value: 1.1, label: '10%' },
    { value: 1.15, label: '15%' },
    { value: 1.2, label: '20%' },
  ];

  const [billValue, setBillValue] = useState('');
  const [personsValue, setPersonsValue] = useState('');
  const [tipsValue, setTipsValue] = useState(options[0].value);
  const [total, setTotalValue] = useState<number | string>('0.00');
  const [disabled, setDisabled] = useState(true);

  const handleBillValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBillValue(event.target.value);
  };

  const handlePersonValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonsValue(event.target.value);
  };

  useEffect(() => {
    setDisabled(billValue && personsValue ? false : true);
  }, [billValue, personsValue]);

  const handleTipsValue = (event: SingleValue<Option>) => {
    if (event) {
      setTipsValue(event.value);
    }
  };

  const handleTotal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotalValue(+((+billValue * +personsValue) / tipsValue).toFixed(2));
  };

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          type="number"
          value={billValue}
          onChange={handleBillValue}
          placeholder="Enter bill"
        />
        <Input
          type="number"
          value={personsValue}
          onChange={handlePersonValue}
          placeholder="Enter persons"
        />
        <CustomSelect
          options={options}
          onChange={handleTipsValue}
          defaultValue={options[0]}
        />
      </InputGroup>
      <Total>Total: {total}$</Total>
      <Button disabled={disabled} />
    </StyledForm>
  );
};
