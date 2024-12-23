import React , {useState, useEffect}from 'react'
import '../resources/authentication.css'
import { Button, Form, Input , message, Spin} from 'antd';
import {Link , useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async (values)=>{
    //  console.log(values)
    setLoading(true);
    try{
      const user = await axios.post('api/user/login' , values)
      message.success("Login successfull")
      localStorage.setItem('resume-user',JSON.stringify(user.data))
      setLoading(false);
      navigate("/home")
    } catch(error){
      setLoading(false);
      message.error("Login failed")
    }

  };

  useEffect(() => {
    if(localStorage.getItem("resume-user")){
      navigate('/home');
    }
  })
  
  return (
    <div className='auth-parent'>
      {loading && (<Spin size="large"/>)}
      <Form layout='vertical' onFinish={onFinish} >
        <h1>Login</h1>
        <hr />
        <Form.Item name='username' label="Username">
          <Input />
        </Form.Item>
        <Form.Item name='password' label="Password">
          <Input type='password' />
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between auth-btn'>
          <Link to="/register">
           <p>Click here to register</p> 
          </Link>
        <Button type="primary" htmlType='submit'>Login</Button>
        </div>
      </Form>
    </div>
  )
}

export default Login