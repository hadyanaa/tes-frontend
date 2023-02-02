import CrudContainer from "./Crud/CrudContainer"
import { Col, Row, Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Tpa = () => {
    const history = useHistory()
    const HandleTambah = () => {
        history.push("/tpa/tambah-data")
    }
    return(
        <>
        <Row>
            <Col span={18}>
                <h1>Tes Pemrograman Aplikasi</h1>
            </Col>
            <Col span={6}> 
                <Button type="primary" style={{margin: "20px 0 20px 10px"}} onClick={HandleTambah}>
                    <PlusOutlined />
                    Tambah Data
                </Button>
            </Col>
        </Row>
            <CrudContainer/>
        </>
    )
}

export default Tpa