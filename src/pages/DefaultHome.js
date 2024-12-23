import React from 'react'
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import "../resources/defaultlayout.css"
import "../resources/template.css"
import image from '../resources/(1).png'
import image1 from '../resources/step-img.jpg'

const DefaultHome = () => {
  const navigate = useNavigate()
  return (
    <div className='main'>
      <div className='header'>

        <h3>Resume Builder</h3>
        <div className='button'>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </div>
      </div>
      <div className='upperContainer d-flex justify-content-center align-items-center'>
        <div className='image'>
          <img src={image} height={400} />
        </div>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <p>An Online Resume Builder</p>
          <h1>Let's Create Your First Resume!</h1>
          <Button onClick={() => navigate("/register")}>Create My Resume</Button>
        </div>

      </div>
      <div className='d-flex justify-content-center align-items-center'>

        <div className='stepContainer d-flex justify-content-between align-items-center  '>
          
          <div className='d-flex align-content-start flex-wrap flex-column my-3'>
          <h2>Steps For Creating Resume</h2>

            <p> 1. Register yourself</p>
            <p> 2. Then login with your register credentials</p>
            <p> 3. Make your profile by filling up details</p>
            <p> 4. select the template you want</p>
            <p> 5. Print your resume </p>

          </div>
          <div className=''>
            <img src={image1} height={300}/>
          </div>
        </div>

      </div>
      <div className='footer d-flex justify-content-center align-items-center '>
        <p>Copyright @Resume-Builder All Rights Reserved... </p>
      </div>
    </div>
  )
}

export default DefaultHome