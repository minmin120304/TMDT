import { Tabs } from 'antd';
import AllProduct from './AllProduct';

function ProductDashBoard() {
  const topTabs = [
    { key: 'all', label: <p className='px-3'>Tất cả</p>, children: <AllProduct /> },
    { key: 'active', label: <p className='px-3'>Đang hoạt động</p> },
    { key: 'violation', label: <p className='px-3'>Vi phạm</p> },
    { key: 'not-logged', label: <p className='px-3'>Chưa được đăng</p> }
  ];

  return (
    <div className="bg-gray-50 p-5 h-full">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Top Navigation Tabs */}
        <Tabs className='p-5' mode='horizontal' items={topTabs} />

      </div>
    </div>
  );
};

export default ProductDashBoard;