import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import PersonalInfo from '../components/PersonalInfo';
import { Tabs,Form, Button,Spin,message } from 'antd';
import { useNavigate} from "react-router-dom"
import axios from "axios"
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import '../resources/defaultlayout.css'



const Profile = () => {
    const [loading ,setLoading]=useState(false);
    const user =JSON.parse(localStorage.getItem('resume-user'))
    // const navigate = useNavigate();
    const onFinish = async(values) => {
        setLoading(true);
        try{
    
          const result = await axios.post('api/user/update' , { ...values , _id: user._id});
          localStorage.setItem("resume-user" , JSON.stringify(result.data))
          setLoading(false);
          message.success("Profile Updated successfully")
        //   navigate("/home")
        } catch(error){
          setLoading(false);
          message.error("Update failed")
        }
    
      }
    return (
        <DefaultLayout>
            {loading && <Spin size="large"/>}
            <div className='update-profile'>
                <h4><b>Update Profile</b></h4>
                <hr />
                <Form layout="vertical" onFinish = {onFinish} initialValues={user}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Personal Info',
                            key: '1',
                            children: <PersonalInfo/>,
                        },
                        {
                            label: 'Skills and Education',
                            key: '2',
                            children: <SkillsEducation/>,
                           
                        },
                        {
                            label: 'Experience /Projects',
                            key: '3',
                            children: <ExperienceProjects/>,
                        },
                    ]}
                />
                <Button htmlType='submit'>UPDATE</Button>
                </Form>
            </div>
        </DefaultLayout>

    )
}

export default Profile