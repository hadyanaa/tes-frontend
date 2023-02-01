import { Button, Form, Input, Alert, Row, Col } from 'antd';
import { useContext, useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { UserContext } from './UserContext';


const Login = () => {
    const [, setUser] = useContext(UserContext)
    const [error, setError] = useState()
    const history = useHistory()

    const onFinish = (values) => {
        axios.post("https://cms-admin.ihsansolusi.co.id/testapi/auth/login", {...values})
            .then((res) => {
                let dataUser = res.data.user
                let token = res.data.token
                setUser({...dataUser, token})
                localStorage.setItem("user", JSON.stringify({...dataUser, token}))
                history.push("/tpa")
            }).catch((err) => {
                setError(err.response.data.error)
            })
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const HandleRegister = () => {
        history.push("/register")
      }

    return (
        <>
            
            <h1 style={{fontSize: "30px", textAlign: "center", marginTop: "100px"}}>LOGIN</h1>
            <Row justify="center" style={{marginBottom: "30px"}}>
                <Col span={9}>
                    {
                         error && <Alert message="Your password or email is wrong!" type="error" closable showIcon/>
                    }
                </Col>
            </Row>
            
            <Form
            name="login"
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
                <Button type="primary" htmlType="submit" style={{marginRight: "20px"}}>
                Submit
                </Button>
                Or <a onClick={HandleRegister} >register now!</a>
            </Form.Item>
        </Form>
        </>
        
    )
}

export default Login