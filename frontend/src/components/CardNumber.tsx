import { Form } from 'antd'
import NumberInput from 'custom/NumberInput'
import React from 'react'

const CardNumber = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value: string) => {
    setValue(value);
  }

  return (
    <Form.Item
      name='CardNumber'
      label='Card Number:'
      rules={[
        {
          required: true,
          min: 16,
          message: 'Please enter a valid card number'
        },
      ]}>
      <NumberInput 
        value={value} 
        onChange={handleChange} 
        length={16}/>
    </Form.Item>
  )
}

export default CardNumber