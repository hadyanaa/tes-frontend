import { Descriptions } from 'antd';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';


const LihatData = () => {
    const [user] = useContext(UserContext)
    const [lihatData, setLihatData] = useState({
        name: "",
        address: "",
        gender: "",
        born_date: ""
    })
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    let {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        const userLihat = async () => {
            await axios.get(`https://cms-admin.ihsansolusi.co.id/testapi/user/${id}`, {headers: {"Authorization" : "Bearer "+ user.token}})
                .then((res) => {
                    setLihatData(res.data.data)
                }).catch((err) => {
                    console.log(err)
                })
        } 
        userLihat()
        setLoading(false)
    }, [id, user.token])
    var options = {dateStyle: "long"}
    let tgl_lahir = new Date(lihatData.born_date).toLocaleString('id-ID', options);

    return (
        <>
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "20px"}}>LIHAT DATA USER</h1>
            
            <Descriptions title="User Info" layout='vertical' bordered>
                <Descriptions.Item label="Nama">{lihatData.name}</Descriptions.Item>
                <Descriptions.Item label="Alamat" span={2}>{lihatData.address}</Descriptions.Item>
                <Descriptions.Item label="Gender">{lihatData.gender == "l" ? "Pria" : "Wanita"}</Descriptions.Item>
                <Descriptions.Item label="Tanggal Lahir" span={2}>{tgl_lahir}</Descriptions.Item>
            </Descriptions>
        </>
        
    )
}

export default LihatData