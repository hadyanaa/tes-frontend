import { Button, DatePicker, Form, Input, Select, message } from 'antd';
import { useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';


const TambahData = () => {
    const [user] = useContext(UserContext)
    const history = useHistory()

    const onFinish = (values) => {
        console.log(values)
        let formatDate = values.born_date.toISOString().split('T')[0]
        axios.post("https://cms-admin.ihsansolusi.co.id/testapi/user", {...values, born_date: formatDate}, 
        {headers: {"Authorization" : "Bearer "+ user.token}})
            .then(() => {
                history.push("/tpa")
                message.success('Data has been added successfully')
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
        </Form>
        </>
        
    )
}

export default TambahData