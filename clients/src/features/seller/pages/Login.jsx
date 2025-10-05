import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, } from 'antd';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-150">
        <div className="text-2xl font-bold text-center mb-10">Đăng nhập tài khoản người bán</div>
        <Form layout="vertical" className="w-full" >
          <Form.Item label="Email" name="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="MatKhau">
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <Link className='text-sm text-blue-500' to="/register">Đăng kí tài khoản</Link>
      </div>
    </div>
  )
}
export default Login