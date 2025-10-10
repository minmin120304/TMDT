import { CalendarOutlined, CreditCardOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, DatePicker, Input, Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { RangePicker } = DatePicker;

export default function BalanceDashboard() {
  const [cashFlow, setCashFlow] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState([
    'revenue',
    'adjustment',
    'fee',
    'refund',
    'withdraw',
    'seasy'
  ]);

  const filterOptions = [
    { value: 'revenue', label: 'Doanh Thu Đơn Hàng' },
    { value: 'adjustment', label: 'Điều chỉnh' },
    { value: 'fee', label: 'Cắn trừ Số dư TK Shopee' },
    { value: 'refund', label: 'Giá trị hoàn được ghi nhận' },
    { value: 'withdraw', label: 'Rút Tiền' },
    { value: 'seasy', label: 'SEasy Cho Vay Người Bán' },
  ];

  return (
    <div className="m-5 space-y-5">
      {/* Overview Section */}
      <div className="bg-white p-5 rounded shadow">
        <h3 className="text-lg font-semibold mb-5">Tổng Quan</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left - Balance */}
          <div className='border p-3 rounded border-gray-200 flex gap-5 items-center'>
            <div>
              <p className="text-lg text-gray-500">
                Số dư
              </p>
              <p className="font-bold">₫0</p>
            </div>
            <Button variant='outlined' color='primary'>
              Yêu Cầu Thanh Toán
            </Button>
          </div>

          {/* Right - Bank Account */}
          <div className='border p-3 rounded border-gray-200'>
            <p className="text-lg font-medium mb-3">Tài khoản ngân hàng</p>
            <div className="flex items-center gap-5">

              <CreditCardOutlined className="text-gray-400" />

              <p className="text-sm">
                Hủy Liên Kết Tài Khoản Ngân Hàng,{" "}
                <Link to="#" className="text-sm text-blue-500">
                  Thêm Tài khoản Ngân hàng
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white p-5 rounded shadow">
        <h3 className="text-lg font-semibold mb-6">Các giao dịch gần đây</h3>

        {/* Filters Row */}
        <div className="mb-6">
          <div className="flex items-start gap-8">
            <div className="w-48">
              <div className="text-sm mb-3">Thời gian phát sinh giao dịch</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <CalendarOutlined className="text-gray-400" />
                <span className="text-sm">Trong vòng tháng này:</span>
                <Select
                  defaultValue="01/10/2025 - 10/10/2025"
                  className="w-64"
                  suffixIcon={<CalendarOutlined />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cash Flow Tabs */}
        <div className="mb-6">
          <div className="flex items-start gap-8">
            <div className="w-48">
              <div className="text-sm">Dòng tiền</div>
            </div>
            <div className="flex-1">
              <div className="flex gap-3">
                <Button
                  type={cashFlow === 'all' ? 'primary' : 'default'}
                  danger={cashFlow === 'all'}
                  onClick={() => setCashFlow('all')}
                  className={cashFlow === 'all' ? 'bg-red-500' : ''}
                >
                  Tất cả
                </Button>
                <Button
                  type={cashFlow === 'in' ? 'primary' : 'default'}
                  danger={cashFlow === 'in'}
                  onClick={() => setCashFlow('in')}
                  className={cashFlow === 'in' ? 'bg-red-500' : ''}
                >
                  Tiền vào
                </Button>
                <Button
                  type={cashFlow === 'out' ? 'primary' : 'default'}
                  danger={cashFlow === 'out'}
                  onClick={() => setCashFlow('out')}
                  className={cashFlow === 'out' ? 'bg-red-500' : ''}
                >
                  Tiền ra
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Type Filters */}
        <div className="mb-6">
          <div className="flex items-start gap-8">
            <div className="w-48">
              <div className="text-sm">Loại giao dịch</div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-4">
                {filterOptions.map(option => (
                  <Checkbox
                    key={option.value}
                    checked={selectedFilters.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFilters([...selectedFilters, option.value]);
                      } else {
                        setSelectedFilters(selectedFilters.filter(f => f !== option.value));
                      }
                    }}
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-6">
          <Button>Thiết lập lại</Button>
          <Button danger type="primary" className="bg-red-500">
            Áp dụng
          </Button>
        </div>

        {/* Transaction List Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-base">
              <span className="font-semibold">0 giao dịch</span>
              <span className="text-gray-400 ml-2">(Tổng số tiền: 0)</span>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Tìm kiếm đơn hàng"
                prefix={<SearchOutlined />}
                className="w-64"
              />
              <Button>Xuất</Button>
              <Button icon={<UnorderedListOutlined />} />
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="flex justify-center mb-4">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-gray-200">
              <rect x="20" y="30" width="60" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="30" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="55" x2="70" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x="40" y="20" width="20" height="15" rx="2" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
          <p className="text-gray-400 text-base">Không có lịch sử giao dịch</p>
        </div>
      </div>
    </div>
  );
}