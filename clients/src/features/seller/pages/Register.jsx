import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, } from 'antd';
import { Link } from 'react-router-dom';

function Register() {

  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-200">
        <div className="text-2xl font-bold text-center mb-10">Đăng ký tài khoản người bán</div>
        <Form layout="vertical" className="w-full" >
          <Form.Item label="Họ tên" name="HoTen">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="SoDienThoai">
            <Input />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="MatKhau">
            <Input />
          </Form.Item>
          <Form.Item label="Xác nhận mật khẩu" name="XacNhanMatKhau">
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <Link className='text-sm text-blue-500' to="/login">Đăng nhập tài khoản</Link>
      </div>
    </div>
  )
}
export default Register