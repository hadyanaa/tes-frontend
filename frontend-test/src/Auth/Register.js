import { Button, Form, Input, Row, Col, Alert } from 'antd';
import { useContext, useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserOutlined, KeyOutlined, MailOutlined } from '@ant-design/icons'
import { UserContext } from './UserContext';


const Register = () => {
    const [, setUser] = useContext(UserContext)
    const [error, setError] = useState()
    const history = useHistory()

    const onFinish = (values) => {
        console.log(values);
        axios.post("https://cms-admin.ihsansolusi.co.id/testapi/auth/register", {...values})
            .then((res) => {
                let dataUser = res.data.user
                let token = res.data.token
                setUser({...dataUser, token})
                localStorage.setItem("user", JSON.stringify({...dataUser, token}))
                history.push("/tpa")
            }).catch((err) => {
                let error = JSON.parse(err.response.data)
                setError(error.email[0])
            })
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "100px"}}>REGISTER</h1>
            <Row justify="center" style={{marginBottom: "30px"}}>
                <Col span={9}>
                    {
                         error && <Alert message={error} type="error" closable showIcon/>
                    }
                </Col>
            </Row>
            <Form
                name="register"
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
                    label="Name"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                    ]}
                >
                    <Input prefix={<MailOutlined />}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input your email!'
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined />}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        min: 6,
                        message: 'Please input your password more than 6 character!',
                    },
                    
                    ]}
                >
                    <Input.Password prefix={<KeyOutlined />}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
        
    )
}

export default Register