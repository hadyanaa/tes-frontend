import { useState } from "react"
import { Button, Form, Input } from 'antd';

const Tla = () => {
    const [jawaban, setJawaban] = useState(false);
    const [soalSatu, setSoalSatu] = useState("");
    const [soalDua, setSoalDua] = useState([]);
    const [soalTiga, setSoalTiga] = useState("");
    const [soalEmpat, setSoalEmpat] = useState([]);

    function hitung_huruf(str){
        let result = [];
        for (let i=0; i<str.length; i++){
            let count = 0;
            for (let j=0; j<str.length; j++){
                if(str[i] == str[j] && i > j){
                    break;
                }
                if( str[i] == str[j]){
                    count++;
                }
            }
            if (count > 0)
            result.push(`${str[i]} = ${count}, `); 
        }
        setSoalDua(result);
    }

    function deret_angka(arr){
        let nilai_terbesar = 0
        let nilai_terkecil = arr[0]
        let rata_rata = 0
        for (var i = 0; i < arr.length; i++){
            if(arr[i] > nilai_terbesar){
                nilai_terbesar = arr[i]
            }
            if(arr[i] < nilai_terkecil){
                nilai_terkecil = arr[i]
            }
            rata_rata += Number(arr[i])
        } 
        var res = rata_rata/arr.length;
        console.log(nilai_terbesar)
        console.log(nilai_terkecil)
        console.log(res)
        setSoalEmpat([nilai_terbesar, nilai_terkecil, res]);
    }

    const onFinish = (values) => {
        let jawabanSatu = values.soalSatu.toLowerCase().replace(/[^\w\s]/gi, '').replaceAll(" ", "-");
        setSoalSatu(jawabanSatu);

        hitung_huruf(values.soalDua);

        let jawabanEmpat = values.soalEmpat.split(/[\s,]+/);
        deret_angka(jawabanEmpat);
        setJawaban(true);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const Jawaban = () => {
        return(
            <>
                <h1>Jawaban</h1>
                <p>1. {soalSatu}</p>
                <p>2. {soalDua}</p>
                <p>3. {soalTiga}</p>
                <p>4. Deret angka random<ol type="a">
                    <li> Nilai terbesar = {soalEmpat[0]}</li>
                    <li> Nilai terkecil = {soalEmpat[1]}</li>
                    <li> Nilai rata-rata = {soalEmpat[2]}</li>
                </ol></p>
            </>
        )
    }

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
                    message: 'Please input your string',
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
                    message: 'Please input your string',
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
                    message: 'Please input your numbers',
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
                    message: 'Please input your numbers',
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

            {jawaban ? <Jawaban/> : ''}
        </>
    )
}

export default Tla