import { useState } from "react"
import { Button, Checkbox, Form, Input } from 'antd';

const Tla = () => {
    const [soalSatu, setSoalSatu] = useState("");

    const onFinish = (values) => {
        let jawabanSatu = values.soalSatu.toLowerCase().replace(/[^\w\s]/gi, '').replaceAll(" ", "-");
        setSoalSatu(jawabanSatu);

        console.log(jawabanSatu);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
            <h1>Tes Logika dan Algoritma</h1>
            <Form
                name="basic"
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <p>Diberikan sebuah string yang dapat mengandung huruf, angka, spasi dan tanda baca.</p>
                <Form.Item
                label="Soal 1"
                name="soalSatu"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <p>Diberikan sebuah string acak, hitunglah berapa jumlah setiap karakter yang ada dalam string
tersebut</p>
                <Form.Item
                label="Soal 2"
                name="soalDua"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <p>Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak
inputan user</p>
                <Form.Item
                label="Soal 3"
                name="soalTiga"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <p>Diberikan sebuah deret angka random oleh user berupa string (dipisahkan oleh spasi atau
koma (,), ex. “20, 21, 80, 21, 55, 31, 22” ) </p>
                <Form.Item
                label="Soal 4"
                name="soalEmpat"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>

            <h1>Jawaban</h1>
            <p>1. {soalSatu}</p>

        </>
    )
}

export default Tla