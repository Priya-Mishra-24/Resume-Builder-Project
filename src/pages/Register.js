import React, {useState, useEffect} from 'react'
import '../resources/authentication.css'
import { Button, Form, Input, message ,Spin } from 'antd';
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
const Register = () => {

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const onFinish = async(values) => {
    setLoading(true);
    try{

      await axios.post('api/user/register' , values)
      setLoading(false);
      message.success("Registration successfull")
      navigate("/login")
    } catch(error){
      setLoading(false);
      message.error("Registration failed")
    }

  }

  useEffect(() => {
    if(localStorage.getItem("resume-user")){
      navigate('/home');
    }
  })

  return (
    <div className='auth-parent'>
      {loading && (<Spin size="large"/>)}
      <Form layout='vertical' onFinish = {onFinish}>
        <h1>Register</h1>
        <hr/>
        <Form.Item name='username' label="Username">
          <Input />
        </Form.Item>
        <Form.Item name='password' label="Password">
          <Input type="password"/>
        </Form.Item>
        <Form.Item name='cpassword' label="Confirm Password">
          <Input type='password' />
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between auth-btn'>
          <Link to="/login">
           <p>Click here to login</p> 
          </Link>

        <Button type="primary" htmlType='submit'>Register</Button>
        </div>
      </Form>
    </div>
  )
}

export default Register