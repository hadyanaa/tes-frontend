import { Layout, Menu, Col, Row } from "antd"
import { UserOutlined } from "@ant-design/icons"
import {useHistory} from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Auth/UserContext"


const{Header} = Layout

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()

    const menuItems = [
        {label: "Tes Logika dan Algoritma", key: "/tla"},
        {label: "Tes Pemrograman Aplikasi", key: "/tpa"}
    ]

    let menuUser = [
        { label: "Login", key: "/login"},
        { label: "Register", key: "/register"},
        { label: "Logout", key: "/logout"}
    ]

    if(user) {
        menuUser = menuUser.filter((data) => data.label === "Logout")
    } else {
        menuUser = menuUser.filter((data) => data.label !== "Logout")
    } 

    const menuUserAuth = [
        {   
            icon: <UserOutlined style={{fontSize: "20px"}} />,
            children: [...menuUser]
        }
    ]

    const HandleNavigate = (props) => {
        history.push(props.key)
    }

    const HandleNavigateAuth = (props) => {
        if(props.key === "/logout") {
            setUser(null)
            localStorage.clear()
            history.push("/login")
        }else {
            history.push(props.key)
        }
    }
    
    return (
        <Header className="header" style={{height: "66px"}}>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" items={menuItems} 
                    onClick={HandleNavigate} key={[menuItems.key]}
                    />
                </Col>
                <Col span={6}>
                    <Row justify="end">
                        <Menu mode="horizontal" theme="dark" items={menuUserAuth} onClick={HandleNavigateAuth} key={[menuUserAuth.key]}/>
                    </Row>
                   
                </Col>
            </Row>           
        </Header>
    )
}

export default Navbar