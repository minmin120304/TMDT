import { faBagShopping, faGift, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, DatePicker, Form, Input, Select, Table, Tabs } from 'antd';
import { useState } from 'react';

import EmptyList from '$/components/EmptyList';

const { RangePicker } = DatePicker;
const { Option } = Select;

function LayoutA() {
  const statsData = [
    { label: 'Doanh Số', value: '₫ 0', change: 'so với 7 ngày trước', percent: '0.00%' },
    { label: 'Đơn hàng', value: '0', change: 'so với 7 ngày trước', percent: '0.00%' },
    { label: 'Số lượng đã bán', value: '0', change: 'so với 7 ngày trước', percent: '0.00%' },
    { label: 'Người mua', value: '0', change: 'so với 7 ngày trước', percent: '0.00%' }
  ];

  const columns = [
    { title: 'Tất cả', dataIndex: 'name', key: 'name', },
    { title: 'Loại khuyến mãi', dataIndex: 'type', key: 'type', },
    { title: 'Sản phẩm', dataIndex: 'products', key: 'products', },
    { title: 'Thời Gian', dataIndex: 'time', key: 'time', },
    { title: 'Thao tác', dataIndex: 'actions', key: 'actions', },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className='flex flex-col gap-3'>
        <h2 className="text-lg font-semibold text-gray-800">
          Hiệu quả Khuyến Mãi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-gray-600 text-sm">{stat.label}</span>
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">
                {stat.change} <span className="text-gray-600">{stat.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Campaign List Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-800">Danh sách chương trình</h2>

        {/* Filters */}
        <Form layout='inline'>
          <Form.Item label="Tìm kiếm">
            <Input placeholder="Input" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="Thời gian khuyến mãi">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item>
            <div className='flex gap-3'>
              <Button className='w-20' variant='outlined' color='blue' >Tìm</Button >
              <Button className='w-20'>Đặt lại</Button>
            </div>
          </Form.Item>
        </Form>

        {/* Table */}
        <Table columns={columns} dataSource={[]} locale={{ emptyText: <EmptyList /> }} />
      </div>
    </div>
  )
}

export default function DiscountDashboard() {
  const [activeTab, setActiveTab] = useState('all');



  const tabItems = [
    { key: 'all', label: 'Tất cả', children: <LayoutA /> },
    { key: 'shop', label: 'Chương Trình Của Shop', children: <LayoutA /> },
    { key: 'combo', label: 'Combo Khuyến Mãi', children: <LayoutA /> },
    { key: 'flash', label: 'Mua Kèm Deal Sốc', children: <LayoutA /> }
  ];

  return (
    <div className="flex flex-col p-5 gap-5">
      <div className="bg-white p-5 grid grid-cols-1 md:grid-cols-3 gap-5 rounded shadow">
        <div className='col-span-3'>

          <h1 className="text-lg font-semibold text-gray-800 mb-2">Tạo Khuyến Mãi</h1>
          <p className="text-gray-500">
            Thiết lập các chương trình khuyến mãi riêng của Shop để tăng Doanh Số và cải thiện tỉ lệ chuyển đổi{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600">Tìm hiểu thêm</a>
          </p>
        </div>
        <div className="h-full flex flex-col border p-3 rounded-xl border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faGift} className='text-blue-400' size='xl' />

            <h3 className="font-semibold text-gray-800">Chương Trình Của Shop</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Tạo Chương trình của Shop để thiết lập các chương trình giảm giá sản phẩm
          </p>
          <Button variant='solid' color='blue' className="w-20 self-end">Tạo</Button>
        </div>

        <div className="h-full flex flex-col border p-3 rounded border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faTags} className='text-blue-400' size='xl' />
            <h3 className="font-semibold text-gray-800">Combo Khuyến Mãi</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Tạo Combo Khuyến Mãi để tăng giá trị đơn hàng trên mỗi Người mua
          </p>
          <Button variant='solid' color='blue' className="w-20 self-end">Tạo</Button>
        </div>

        <div className="h-full flex flex-col border p-3 rounded border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faBagShopping} className='text-blue-400' size='xl' />
            <h3 className="font-semibold text-gray-800">Mua Kèm Deal Sốc</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Tạo Mua Kèm Deal Sốc để tăng đơn hàng
          </p>
          <Button variant='solid' color='blue' className="w-20 self-end">Tạo</Button>
        </div>

      </div>

      {/* Tabs */}
      <div className="bg-white p-5 rounded shadow flex flex-col gap-5">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
      </div>
    </div>
  );
}