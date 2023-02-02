import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { useContext } from 'react';
import { CrudContext } from './CrudContext';

const CrudTable = () => {
    const [listUser] = useContext(CrudContext)
    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat',
            key: 'alamat',
        },
        {
            title: 'P/W',
            dataIndex: 'pw',
            key: 'pw',
        },
        {
            title: 'Tanggal Lahir',
            dataIndex: 'tanggal_lahir',
            key: 'tanggal_lahir',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
                <Button style={{backgroundColor: "#13c2c2", color: "white"}}>
                    <EyeFilled />
                </Button>
                <Button style={{backgroundColor: "#a0d911", color: "white"}}>
                    <EditFilled/>
                </Button>
                <Button style={{backgroundColor: "#f5222d", color: "white"}}>
                    <DeleteFilled/>
                </Button>
            </Space>
          ),
        },
    ];

    const data = [
        {
            no: '1',
            name: 'John Brown',
            alamat: 'New York No. 1 Lake Park',
            pw: 'P',
            tanggal_lahir: '19 Maret 2000'
        },
    ];
    console.log(listUser)
    return(
        <Table columns={columns} dataSource={data}  />
    )
}

export default CrudTable;