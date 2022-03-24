import { Form } from 'antd'
import NumberInput from 'custom/NumberInput'
import React from 'react'

const Amount = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value: string) => {
    setValue(value);
  }
  
  return (
    <Form.Item
      name='Amount'
      label='Amount:'
      rules={[
        {
          required: true,
          message: ''
        },
      ]}>
      <NumberInput 
        value={value} 
        onChange={handleChange} 
        length={16}/>
    </Form.Item>
  )
}

export default Amount