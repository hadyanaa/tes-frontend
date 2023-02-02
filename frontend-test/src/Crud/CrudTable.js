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
            render: (text) => {
                let index = listUser.data.indexOf(text)
                return(
                    <>{index+1}</>
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'P/W',
            dataIndex: 'gender',
            key: 'gender',
            render: (record) => {
                if (record == "l"){
                    return(
                        <>Pria</>
                    )
                }else{
                    return(
                        <>Wanita</>
                    )
                }
            }
        },
        {
            title: 'Tanggal Lahir',
            dataIndex: 'born_date',
            key: 'born_date',
            render: (record) => {
                var options = {dateStyle: "medium"}
                let input = new Date(record).toLocaleString('id-ID', options);
                return(
                    <>{input}</>
                )
            }
        },
        {
            title: 'Tanggal Input',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (record) => {
                var options = {dateStyle: "medium", timeStyle: "short"}
                let input = new Date(record).toLocaleString('id-ID', options);
                return(
                    <>{input}</>
                )
            }
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
    return(
        <Table columns={columns} dataSource={listUser.data}  />
    )
}

export default CrudTable;