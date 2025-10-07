import { EditOutlined, MessageOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Affix, Avatar, Button, Input, Tabs, Upload } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

function BasicInfoForm() {
  const [imageRatio, setImageRatio] = useState('1:1');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="flex flex-col gap-5 px-5 bg-white rounded">
      <h2 className="text-lg font-medium">Thông tin cơ bản</h2>

      {/* Product Images */}
      <div>
        <label className="block mb-2">
          <span className="text-red-500">* </span>
          Hình ảnh sản phẩm
        </label>
        <div className="flex gap-4">
          <Upload listType="picture-card" showUploadList={false}>
            <div className="text-center">
              <PlusOutlined className="text-2xl text-blue-500 mb-2" />
              <div className="text-blue-500 text-sm">Thêm hình</div>
              <div className="text-blue-500 text-xs">ảnh (0/9)</div>
            </div>
          </Upload>
        </div>
      </div>

      {/* Cover Image */}
      <div>
        <label className="block mb-2">
          <span className="text-red-500">* </span>
          Ảnh bìa
        </label>
        <Upload listType="picture-card" showUploadList={false}        >
          <div className="text-center">
            <PlusOutlined className="text-2xl text-red-500 mb-2" />
            <div className="text-xs text-blue-500">(0/1)</div>
          </div>
        </Upload>
      </div>

      {/* Product Video */}
      <div>
        <label className="block mb-2">Video sản phẩm</label>
        <Upload listType="picture-card" showUploadList={false}>
          <div className="text-center">
            <PlusOutlined className="text-2xl text-blue-500 mb-2" />
            <div className="text-blue-500 text-sm">Thêm video</div>
          </div>
        </Upload>
      </div>

      {/* Product Name */}
      <div>
        <label className="block mb-2">
          <span className="text-red-500">* </span>
          Tên sản phẩm
        </label>
        <Input placeholder="Tên sản phẩm" suffix={<span className="text-gray-400">{productName.length}/120</span>} />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2">
          <span className="text-red-500">* </span>
          Ngành hàng
        </label>
        <Input placeholder="Chọn ngành hàng" value={category} onChange={(e) => setCategory(e.target.value)} suffix={<EditOutlined className="text-gray-400" />} />
      </div>

      {/* Product Description */}
      <div>
        <label className="block mb-2">
          <span className="text-red-500">* </span>
          Mô tả sản phẩm
        </label>
        <TextArea rows={10} maxLength={3000} placeholder="Nhập mô tả sản phẩm..." />
        <div className="text-right text-gray-400 mt-1">{description.length}/3000</div>
      </div>
    </div>
  )
}

function AddProduct() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="grid grid-cols-[1fr_auto] gap-5 p-5" >
      {/* Tabs */}
      <Tabs activeKey={activeTab} onChange={setActiveTab}
        items={[
          { key: 'basic', label: <p className='px-5'>Thông tin cơ bản</p>, children: <BasicInfoForm /> },
          {
            key: 'sales', label: <p className='px-5'>Thông tin bán hàng</p>,
            children: <div className="py-8 text-center text-gray-500">
              Có thể điều chỉnh sau khi chọn ngành hàng
            </div>
          },
          {
            key: 'shipping', label: <p className='px-5'>Vận chuyển</p>,
            children: <div className="py-8 text-center text-gray-500">
              Có thể điều chỉnh sau khi chọn ngành hàng
            </div>
          },
          {
            key: 'other', label: <p className='px-5'>Thông tin khác</p>,
            children: <div className="py-8 text-center text-gray-500">
              Có thể điều chỉnh sau khi chọn ngành hàng
            </div>
          },
        ]} />


      {/* Preview Section */}
      <Affix offsetTop={100} className='w-90'>
        <div className='h-min p-5 bg-white shadow rounded flex flex-col gap-5'>
          <h3 className="font-medium">Xem trước</h3>

          {/* Product Preview Card */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <ShoppingCartOutlined className="text-5xl mb-2" />
              </div>
            </div>

            <p className='p-3'>ddddddddddddddd</p>
          </div>

          {/* User Info */}
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar src="/api/placeholder/40/40" size={40} />
              <span className="text-sm">ducminh16082004</span>
            </div>
            <Button variant='outlined' color='blue'>Xem</Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-between">
            <Button icon={<MessageOutlined />} variant='solid' color='cyan' className=" border-teal-500 text-teal-500">
              Chat
            </Button>
            <Button icon={<ShoppingCartOutlined />} className="">
              Giỏ hàng
            </Button>
            <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
              Mua Ngay
            </Button>
          </div>
        </div>
      </Affix >
    </div >
  );
}

export default AddProduct