import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';


const EditData = () => {
    const [user] = useContext(UserContext)
    const [editData, setEditData] = useState({
        name: "",
        address: "",
        gender: "",
        born_date: ""
    })
    const [ready, setReady] = useState(false)
    const history = useHistory()
    let {id} = useParams()

    useEffect(()=>{
        const userEdit = async () => {
            await axios.get(`https://cms-admin.ihsansolusi.co.id/testapi/user/${id}`, {headers: {"Authorization" : "Bearer "+ user.token}})
                .then((res) => {
                    setEditData(res.data.data)
                    setReady(true)
                }).catch((err) => {
                    console.log(err)
                })
        } 
        userEdit()
    }, [id, user.token])

    const onFinish = (values) => {
        let formatDate = values.born_date.toISOString().split('T')[0]
        axios.put(`https://cms-admin.ihsansolusi.co.id/testapi/user/${id}`, {...values, born_date: formatDate}, 
        {headers: {"Authorization" : "Bearer "+ user.token}})
            .then(() => {
                history.push("/tpa")
            })
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    console.log(editData.name)

    return (
        <>
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "20px"}}>EDIT DATA USER</h1>
            
            {ready &&
            <Form
            name="tambah_data"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                name: editData.name,
                address: editData.address,
                gender: editData.gender
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            
            <Form.Item
                label="Nama"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input name!'
                    },
                    {
                        min: 8,
                        message: 'Name must be minimum 8 characters.'
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Alamat"
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input address!'
                    }
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Gender"
                name="gender"
                rules={[
                    {
                        required: true,
                        message: 'Please input gender!'
                    }
                ]}
            >
                <Select
                    style={{
                        width: 120,
                    }}
                    options={[
                        {
                        value: 'l',
                        label: 'Pria',
                        },
                        {
                        value: 'p',
                        label: 'Wanita',
                        },
                    ]}
                />
            </Form.Item>

            <Form.Item
                label="Tanggal Lahir"
                name="born_date"
                rules={[
                    {
                        required: true,
                        message: 'Please input birth date!'
                    }
                ]}
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" style={{marginRight: "20px"}}>
                Submit
                </Button>
            </Form.Item>
        </Form>}
        
        </>
        
    )
}

export default EditData