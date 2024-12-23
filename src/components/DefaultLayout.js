import React from 'react'
import "../resources/defaultlayout.css"
import { Button, Dropdown } from "antd";
import { useNavigate,Link } from 'react-router-dom';
import { UserOutlined  } from '@ant-design/icons';
const DefaultLayout = (props) => {
  const user= JSON.parse(localStorage.getItem('resume-user'))
  const navigate= useNavigate()
  const items = [
    {
      key: '1',
      label: (
        <Link to="/home">Templates</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/profile">Profile</Link>
      ),
    },
    {
      key: '3',
      label: (
       <span onClick={()=>{
        localStorage.removeItem('resume-user')
        navigate('/login')
       }}>Logout</span>
      ),
    },
  ];
  return (
    <div className='layout'>
      <div className='header'>
        <h1 onClick={() => navigate('/')} style={{cursor:'pointer'}} >RESUME BUILDER</h1>
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button icon = {<UserOutlined />} className='user-btn'>{user.username}</Button>
      </Dropdown>


      </div>
      <div className='content'>
        {props.children}
      </div>

    </div>
  )
}

export default DefaultLayout