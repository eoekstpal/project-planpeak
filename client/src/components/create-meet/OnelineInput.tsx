import Input from '../forms/Input';
import React, { useState } from 'react';

interface OnelineInputProps {
  title: string;
  onInputChange: (value: string) => void;
}

function OnelineInput({ title, onInputChange }: OnelineInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onInputChange(inputValue);
    console.log(value);
  };

  return (
    <div>
      {' '}
      <br /> <br />
      <label>{title}</label> <br /> <br />
      {/* <input type="text" value={value} onChange={handleChange} /> */}
      <Input onChange={handleChange} placeholderText={`내용을 입력하세요.`} />
    </div>
  );
}

export default OnelineInput;
