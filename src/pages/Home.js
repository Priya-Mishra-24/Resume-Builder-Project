import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateImage from '../resources/templates/template1.png'
import template2Image from '../resources/templates/template2.png'
import "../resources/template.css"
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const templates = [
    {
      title: "Simple",
      image: templateImage,
    },
    {
      title: "HighLighted",
      image:template2Image
    }
  ]
  return (
    <>
      <DefaultLayout>
        <div className='row home'>
          {
            templates.map((template , index) => {
              return <div className='col-md-4'>
                <div className='template'>
                  <img src={template.image} height='400' width ="100%" />
                  <hr />
                  <div className='text'>
                    <p>{template.title}</p>
                    <button onClick={() => navigate(`/templates/${index+1}`)}>Try</button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </DefaultLayout>

    </>

  )
}

export default Home