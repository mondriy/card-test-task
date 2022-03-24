import React from 'react'
import { Input } from 'antd'

interface NumberInputTypes {
  value: string,
  onChange: any,
  length: number
}

const NumberInput = ( { value, onChange, length }: NumberInputTypes ) => {

  const handleChange = (e: any) => {
    const { value } = e.target;
    const regular = /^[0-9]+$/;
    if (regular.test(value)) {
      onChange(value);
    } else {
      onChange('');
    }
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      maxLength={length} />
  )
}

export default NumberInput