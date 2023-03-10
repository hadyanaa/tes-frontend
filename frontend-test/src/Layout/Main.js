import { BrowserRouter as Router } from 'react-router-dom';
import { Layout} from 'antd';
import Routes from "../Route";
import Navbar from './Header';
import Footer2 from './Footer';
const { Content} = Layout;

const Main = () => {
    return (
        <Router>
            <Layout>
                <Navbar/>
                <Content
                    style={{
                        padding: '0 50px',
                        minHeight: '620px'
                    }}
                    >
                    <Layout
                        className="site-layout-background"
                        style={{
                        padding: '24px 0',
                        }}
                        >
                        <Content
                            style={{
                                padding: '0 50px',
                            }}
                        >
                            <Routes/>
                        </Content>
                    </Layout>
                </Content>
                <Footer2/>
            </Layout>
        </Router>
    )
}

export default Main