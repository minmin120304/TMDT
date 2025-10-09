import React, { useState } from 'react';
import { InfoCircleOutlined, CalendarOutlined, SearchOutlined, DownloadOutlined, DownOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { DatePicker, Input, Table } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export default function ProfitDashboard() {
  const [activeTab, setActiveTab] = useState('paid');
  const [dateRange, setDateRange] = useState([dayjs('2025-10-06'), dayjs('2025-10-09')]);

  const columns = [
    { title: 'Đơn hàng', dataIndex: 'order', key: 'order', width: 150, },
    { title: 'Thanh toán đã chuyển vào', dataIndex: 'paymentTransferred', key: 'paymentTransferred', width: 200, },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 150, }, { title: 'Phương thức thanh toán', dataIndex: 'paymentMethod', key: 'paymentMethod', width: 200, },
    { title: 'Số tiền thanh toán', dataIndex: 'amount', key: 'amount', width: 150, align: 'right', },
  ];

  const reports = [
    { key: 1, period: '29 Th09 - 5 Th10 2025', },
    { key: 2, period: '22 Th09 - 28 Th09 2025', },
    { key: 3, period: '15 Th09 - 21 Th09 2025', },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2">
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tổng Quan</h2>

            {/* Info Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
              <InfoCircleOutlined className="text-blue-500 text-lg mt-0.5" />
              <p className="text-sm text-gray-700">
                Các số dưới đây chưa bao gồm điều chỉnh. Vui lòng tải xuống Báo cáo thu nhập để kiểm tra chi tiết các điều chỉnh liên quan.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Unpaid */}
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-4">Chưa thanh toán</h3>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Tổng cộng</p>
                  <p className="text-3xl font-semibold text-gray-800">₫ 0</p>
                </div>
              </div>

              {/* Paid */}
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-4">Đã thanh toán</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Tuần này</p>
                    <p className="text-3xl font-semibold text-gray-800">₫ 0</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm mb-2">Tháng này</p>
                      <p className="text-xl font-semibold text-gray-800">₫ 0</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-2">Tổng cộng</p>
                      <p className="text-xl font-semibold text-gray-800">₫ 0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopee Balance Link */}
            <div className="mt-6 text-right">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Số dư TK Shopee &gt;
              </a>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Chi Tiết</h2>
            </div>

            {/* Tabs */}
            <div className="border-b">
              <div className="flex px-6">
                <button
                  onClick={() => setActiveTab('unpaid')}
                  className={`px-4 py-3 font-medium transition-colors relative ${activeTab === 'unpaid'
                    ? 'text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  Chưa thanh toán
                  {activeTab === 'unpaid' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('paid')}
                  className={`px-4 py-3 font-medium transition-colors relative ${activeTab === 'paid'
                    ? 'text-red-500'
                    : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  Đã thanh toán
                  {activeTab === 'paid' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CalendarOutlined className="text-gray-400" />
                  <span className="text-gray-700 font-medium">Tuần này:</span>
                </div>
                <RangePicker
                  value={dateRange}
                  onChange={setDateRange}
                  format="DD/MM/YYYY"
                  className="w-80"
                  suffixIcon={<DownOutlined className="text-gray-400" />}
                />
                <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 font-medium">
                  Xuất
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <UnorderedListOutlined className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-6 border-b">
              <Input
                placeholder="Tìm kiếm đơn hàng"
                prefix={<SearchOutlined className="text-gray-400" />}
                className="max-w-md"
              />
            </div>

            {/* Table */}
            <div className="p-6">
              <Table
                columns={columns}
                dataSource={[]}
                locale={{
                  emptyText: (
                    <div className="py-12 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-32 h-32 text-gray-300">
                          <svg viewBox="0 0 184 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="42" y="42" width="100" height="68" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M52 62h80M52 78h80M52 94h60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-500">Không có dữ liệu</p>
                    </div>
                  )
                }}
                pagination={false}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Income Reports */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Báo cáo thu nhập</h2>
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Xem thêm &gt;
              </a>
            </div>

            <div className="space-y-3">
              {reports.map((report) => (
                <div
                  key={report.key}
                  className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                >
                  <span className="text-gray-700">{report.period}</span>
                  <button className="text-blue-500 hover:text-blue-600">
                    <DownloadOutlined className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}