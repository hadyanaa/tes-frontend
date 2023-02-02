import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Button, Space, Table, Popconfirm, message } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Auth/UserContext';
import { CrudContext } from './CrudContext';

const CrudTable = () => {
    const [user] = useContext(UserContext)
    const [listUser,,loading,,,setTriggerDelete] = useContext(CrudContext)
    const history = useHistory();


    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (text) => {
                let index = listUser.data.indexOf(text)
                return(
                    <>{index+2}</>
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
          render: (record) => {
            const confirm = (e) => {
                axios.delete(`https://cms-admin.ihsansolusi.co.id/testapi/user/${record.id}`, {headers: {"Authorization" : "Bearer "+ user.token}}).then((res) => {
                    setTriggerDelete(true)
                    message.success('Data has been deleted successfully')
                })
            };
              
            const cancel = (e) => {
                console.log(e);
                message.error('Click on No');
            };
            return(
                <Space size="middle">
                    <Button style={{backgroundColor: "#13c2c2", color: "white"}} onClick={()=> {history.push(`/tpa/lihat-data/${record.id}`)}}>
                        <EyeFilled />
                    </Button>
                    <Button style={{backgroundColor: "#a0d911", color: "white"}} onClick={()=> {history.push(`/tpa/edit-data/${record.id}`)}}>
                        <EditFilled/>
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this Data?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button style={{backgroundColor: "#f5222d", color: "white"}}>
                            <DeleteFilled/>
                        </Button>
                    </Popconfirm>
                </Space>
            )
          }
        },
    ];
    console.log(listUser.data)
    return(
        <Table rowKey='id' columns={columns} dataSource={listUser.data} loading={loading} />
    )
}

export default CrudTable;