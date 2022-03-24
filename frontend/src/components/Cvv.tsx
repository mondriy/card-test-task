import { Form } from 'antd'
import NumberInput from 'custom/NumberInput'
import React from 'react'

const Cvv = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value: string) => {
    setValue(value);
  }

  return (
    <Form.Item
      wrapperCol={{span: 10}}
      name='Cvv'
      label='CVV:'
      rules={[
        {
          required: true,
          message: '',
          min: 3,
        }
      ]}>
      <NumberInput value={value} onChange={handleChange} length={3}/>
    </Form.Item>
  )
}

export default Cvv