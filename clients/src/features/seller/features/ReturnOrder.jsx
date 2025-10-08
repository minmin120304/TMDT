
import { CalendarOutlined, FileTextOutlined, MenuOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Input, Radio, Select, Space, Table, Tabs } from 'antd';
import { useState } from 'react';

const { TabPane } = Tabs;
const { Option } = Select;


function ReturnOrder() {
  const [activeMainTab, setActiveMainTab] = useState('all');
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showAdvanced, setShowAdvanced] = useState(true);

  const columns = [
    { title: 'Sản phẩm', dataIndex: 'product', key: 'product', width: 200, sorter: true },
    { title: 'Số tiền', dataIndex: 'amount', key: 'amount', width: 120, sorter: true },
    { title: 'Lý do', dataIndex: 'reason', key: 'reason', width: 150, sorter: true },
    { title: 'Phương án cho Người mua', dataIndex: 'buyerOption', key: 'buyerOption', width: 180, sorter: true },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 120, sorter: true },
    { title: 'Vận chuyển chiều giao hàng', dataIndex: 'deliveryShipping', key: 'deliveryShipping', width: 180, sorter: true },
    { title: 'Vận chuyển hàng hoàn', dataIndex: 'returnShipping', key: 'returnShipping', width: 180, sorter: true },
    { title: 'Thao tác', dataIndex: 'action', key: 'action', width: 120, sorter: true },
  ];

  const emptyDescription = (
    <div className="flex flex-col items-center py-20">
      <FileTextOutlined className="text-8xl text-gray-300 mb-4" />
      <p className="text-gray-500 text-base">Không tìm thấy đơn hàng</p>
    </div>
  );

  return (
    <div className="m-5">
      {/* Main Tabs */}
      <Tabs activeKey={activeMainTab} onChange={setActiveMainTab} className="flex-1">
        <TabPane tab="Tất cả" key="all" />
        <TabPane tab="Đơn Trả hàng Hoàn tiền" key="return" />
        <TabPane tab="Đơn Hủy" key="cancel" />
        <TabPane tab="Đơn Giao hàng không thành công" key="failed" />
      </Tabs>


      {/* Sub Tabs */}
      <div className="bg-white px-5">
        <Tabs activeKey={activeSubTab} onChange={setActiveSubTab}>
          <TabPane tab="Tất cả" key="all" />
          {/* <TabPane tab="Shopee đang xem xét" key="reviewing" /> */}
          <TabPane tab="Đang trả hàng cho Người bán" key="returning" />
          <TabPane tab="Đã hoàn tiền cho Người mua" key="refunded" />
          {/* <TabPane tab="Đã khiếu nại đến Shopee" key="complained" /> */}
          <TabPane tab="Yêu cầu bị hủy/không hợp lệ" key="invalid" />
          <TabPane tab="Đã gửi yêu cầu cần kiểu nai" key="pending" />
        </Tabs>
      </div>

      {/* Priority Filter */}
      <div className="bg-white px-5 py-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-700">Ưu tiên</span>
          <Radio.Group value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <Radio.Button value="all" >Tất cả</Radio.Button>
            <Radio.Button value="1day">Hết hạn sau 1 ngày</Radio.Button>
            <Radio.Button value="2days">Hết hạn sau 2 ngày</Radio.Button>
          </Radio.Group>
        </div>
      </div>

      {/* Action Tags */}
      <div className="bg-white px-5 py-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-700">HÀNH ĐỘNG QUAN TRỌNG</span>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Thương lượng với Người mua</button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Cần cung cấp bằng chứng</button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Giữ lại kiện hàng</button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Kiểm tra hàng hoàn</button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Phản hồi quyết định hoàn tiền của Shopee</button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="bg-white px-5 py-3">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Tìm yêu cầu
              </label>
              <Input placeholder="Điền Mã yêu cầu trả hàng/ Mã đơn hàng/ Mã vận đơn hàng hoàn/ Tài khoản Người mua" className="flex-1" />
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Trạng thái
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Vận chuyển chiều hoàn hàng
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 shrink-0">
                Phương án cho Người mua
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Dự kiến hoàn tiền
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <div className="flex-1 flex items-center gap-2">
                <Input placeholder="Số tiền hoàn tối thiểu" />
                <span className="text-gray-400">-</span>
                <Input placeholder="Số tiền hoàn tối đa" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Toàn bộ thao tác
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Vận chuyển chiều giao hàng
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Lý do
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 flex items-center gap-1 shrink-0">
                Khiếu nại được cấp bù
                <QuestionCircleOutlined className="text-gray-400 text-xs" />
              </label>
              <Select className="flex-1" placeholder="Vui lòng chọn">
                <Option value="">Vui lòng chọn</Option>
              </Select>
            </div>

            <div className="flex gap-3">
              <label className="w-48 text-gray-700 shrink-0">
                Ngày yêu cầu
              </label>
              <Input placeholder="Vui lòng chọn thời gian yêu cầu Trả hàng/Hoàn tiền" suffix={<CalendarOutlined className="text-gray-400" />} className="flex-1" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <Button type="primary" color="blue" className="px-6">Tìm kiếm</Button>
          <Button className="px-6">Đặt lại</Button>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white ">
        <Table className='p-5' columns={columns} pagination={false} locale={{ emptyText: emptyDescription }} />
      </div>
    </div >
  );
}

export default ReturnOrder