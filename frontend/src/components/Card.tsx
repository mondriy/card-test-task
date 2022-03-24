import React from 'react'
import { Form, Button } from 'antd';
import CardNumber from './CardNumber';
import Cvv from './Cvv';
import ExpDate from './ExpDate';
import Amount from './Amount';

const Card = () => {
  const [form] = Form.useForm();
  const [active, setActive] = React.useState(true);

  const [error, setError] = React.useState(null);

  const handleFieldChange = () => {
    setActive(!form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length);
  }

  const handleFinish = (values: any) => {
    fetch("http://localhost:5000/api/post", {
      method: 'POST', 
      body: JSON.stringify(values),
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((result: any) => {
      console.log("Sent Successful");
      return result.json();
    })
    .then((data) => alert(JSON.stringify(data)))
    .catch((err) => {
      setError(err);
      console.log(err.message);
    });
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      onFieldsChange={handleFieldChange}>
      <div className='card'>
        <CardNumber />
        <div className='data-container'>
          <Cvv />
          <ExpDate />
        </div>
        <Amount />
      </div>
      <Button 
        disabled={active} 
        style={{margin: '2em 0', width: '50%'}} 
        htmlType='submit'
        type='primary'>Buy</Button>
    </Form>
  )
}

export default Card