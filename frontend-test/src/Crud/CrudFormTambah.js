import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';


const TambahData = () => {
    const [user] = useContext(UserContext)
    const history = useHistory()

    const onFinish = (values) => {
        console.log(values);
        let born_date = new Date(values.born_date)
        axios.post("https://cms-admin.ihsansolusi.co.id/testapi/user", {...values, born_date: born_date}, 
        {headers: {"Authorization" : "Bearer "+ user.token, "Accept": "application/json", "Content-Type": "application/json"}})
            .then(() => {
                history.push("/tpa")
            })
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "20px"}}>TAMBAH DATA USER</h1>
            
            <Form
            name="tambah_data"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
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
                    }
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
                        value: 'Pria',
                        label: 'Pria',
                        },
                        {
                        value: 'Wanita',
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
                <Input />
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
        </Form>
        </>
        
    )
}

export default TambahData