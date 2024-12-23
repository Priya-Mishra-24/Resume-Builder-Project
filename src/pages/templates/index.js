
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Template1 from './Template1'
import DefaultLayout from '../../components/DefaultLayout'
import Template2 from './Template2'
import {useParams , useNavigate} from 'react-router-dom'
import {Button} from 'antd'

const Templates = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams()
  const navigate = useNavigate()

  const getTemplate = () => {
    switch(params.id)
    {
      case '1' : {
        return <Template1 />
      }

      case '2':{
        return <Template2 />
      }
    }
  }

  return (
    <div>
        <DefaultLayout>
          <div className='d-flex justify-content-end my-5 mx-5'>
           
            <Button onClick={() => navigate('/home')} >Back</Button>
            <Button className='mx-5' onClick ={handlePrint}>Print</Button>

          </div>
          <div ref={componentRef}>
            {getTemplate()}
          </div>
        
        </DefaultLayout>
    </div>
  )
}

export default Templates