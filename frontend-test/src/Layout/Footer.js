import { GithubOutlined } from "@ant-design/icons"
import { Layout } from "antd"

const{Footer} = Layout

const Footer2 = () => {
    
    return (
        <Footer  
        style={{
            textAlign: 'center',
        }}
        >
            <p>
            Visit this project at <a target={"_blank"} href="https://github.com/hadyanaa/tes-frontend/tree/main/frontend-test"><GithubOutlined/> github</a>
            </p>
            <p>
            Don't forget to visit my little <a target={"_blank"} href="https://hadyanaa.github.io/">portfolio</a>
            </p>
        </Footer>
    )
}

export default Footer2