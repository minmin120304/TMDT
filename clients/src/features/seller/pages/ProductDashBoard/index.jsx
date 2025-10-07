import { Button, Tabs } from 'antd';

import AllActiveProduct from './pages/AllActiveProduct';
import AllProduct from './pages/AllProduct';
import RestockProduct from './pages/RestockProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ProductDashBoard() {


  const topTabs = [
    { key: 'all', label: <p className='px-3'>Tất cả</p>, children: <AllProduct /> },
    {
      key: 'active', label: <p className='px-3'>Đang hoạt động</p>,
      children: (
        <div className='bg-white px-5'>
          <Tabs items={[
            { key: 'all', label: <p className='px-3'>Tất cả</p>, children: <AllActiveProduct /> },
            { key: 'need-produce', label: <p className='px-3'>Cần bổ sung hàng</p>, children: <RestockProduct /> },
          ]} />
        </div>
      )
    },
    // {
    //   key: 'violation', label: <p className='px-3'>Vi phạm</p>, children: (
    //     <div className='bg-white px-5'>
    //       <Tabs items={[
    //         { key: 'all', label: <p className='px-3'>Đã tạm khóa</p>, children: <AllActiveProduct /> },
    //         { key: 'need-produce', label: <p className='px-3'>Bị ẩn</p>, children: <AllActiveProduct /> },
    //       ]} />
    //     </div>
    //   )
    // },
    { key: 'not-logged', label: <p className='px-3'>Chưa được đăng</p>, children: <AllProduct /> }
  ];

  return (
    <div className="p-5 h-full">
      <div className='flex justify-end gap-5'>
        <Button size='large' variant='solid' color='blue' icon={<FontAwesomeIcon icon={faPlus} />}>
          Thêm sản phẩm
        </Button>
      </div>
      <Tabs mode='horizontal' items={topTabs} />
    </div>
  );
};

export default ProductDashBoard;