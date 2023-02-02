import { Descriptions } from 'antd';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';


const Profile = () => {
    const [user] = useContext(UserContext)
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        setLoading(true)
        const userLihat = async () => {
            await axios.get(`https://cms-admin.ihsansolusi.co.id/testapi/auth/me`, {headers: {"Authorization" : "Bearer "+ user.token}})
                .then((res) => {
                    setProfile(res.data)
                }).catch((err) => {
                    console.log(err)
                })
        } 
        userLihat()
        setLoading(false)
    }, [user.token])
    console.log(profile)
    var options = {dateStyle: "long", timeStyle: "medium"}
    let tgl_dibuat = new Date(profile.created_at).toLocaleString('id-ID', options);
    return (
        <>
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "20px"}}>PROFILE</h1>
            
            <Descriptions layout='horizontal' bordered>
                <Descriptions.Item label="Nama" span={3}>{profile.name}</Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>{profile.email}</Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>{profile.status}</Descriptions.Item>
                <Descriptions.Item label="Akun dibuat" span={3}>{tgl_dibuat}</Descriptions.Item>
            </Descriptions>
        </>
        
    )
}

export default Profile