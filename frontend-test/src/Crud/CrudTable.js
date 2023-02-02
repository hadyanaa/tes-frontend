import { Space, Table } from 'antd';
import { useContext } from 'react';
import { CrudContext } from './CrudContext';

const CrudTable = () => {
    const [listUser] = useContext(CrudContext)
    const columns = [
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
              <a>Invite</a>
              <a>Delete</a>
            </Space>
          ),
        },
    ];

    const data = [
        {
            key: '1',
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