import { Form } from 'antd'
import DateInput from 'custom/DateInput'
import React from 'react'

const ExpDate = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value: string) => {
    setValue(value);
  }

  return (
    <Form.Item
      name='ExpDate'
      label='Date:'
      rules={[
        {
          required: true,
          message: ''
        },
        (() => ({
          validator(_, value){
            const regular = /^[0-1][0-2]\/[2][0][2][1-9]$/;
            if (regular.test(value)) {
              return Promise.resolve();
            } else {
              return Promise.reject('Invalid date')
            }
          }
        }))
      ]}>
      <DateInput value={value} onChange={handleChange} />
    </Form.Item>
  )
}

export default ExpDate