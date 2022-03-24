import React from 'react'
import { Input } from 'antd'

interface NumberInputTypes {
  value: string,
  onChange: any,
}

const NumberInput = ( { value, onChange }: NumberInputTypes ) => {

  const handleChange = (e: any) => {
    const { value } = e.target;
    const regular = /\d|\//;
    if (regular.test(value)) {
      value.length === 2 ? onChange(value + '/') : onChange(value);
    } else {
      onChange('');
    }
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      maxLength={7} />
  )
}

export default NumberInput