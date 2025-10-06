import { faBox, faChartLine, faFileInvoice, faSplotch, faSquarePollVertical, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import { useMemo, useState } from 'react';


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = useMemo(() => [

    { key: 'a', icon: <FontAwesomeIcon icon={faBox} />, label: 'Quản lý sản phẩm', },
    {
      key: 'b', icon: <FontAwesomeIcon icon={faFileInvoice} />, label: 'Quản lý đơn hàng',
      children: [
        { key: 'b1', label: "Tất cả" },
        { key: 'b2', label: "Bàn giao đơn hàng" },
        { key: 'b3', label: "Đơn Hủy/Hoàn tiền" },
        { key: 'b4', label: "Vận chuyển" },
      ]
    },
    {
      key: 'c', icon: <FontAwesomeIcon icon={faChartLine} />, label: 'Quản lý Marketing',
      children: [
        { key: "c1", label: "Tất cả" },
        { key: "c2", label: "Khuyến mãi của Shop" },
        { key: "c3", label: "Flash Sale của Shop" },
        { key: "c4", label: "Mã giảm giá của Shop" },
        { key: "c5", label: "Chương trình Shopee" },
      ]
    },
    { key: 'd', icon: <FontAwesomeIcon icon={faWallet} />, label: 'Quản lý tài chính' },
    { key: 'e', icon: <FontAwesomeIcon icon={faSquarePollVertical} />, label: 'Phân tích dữ liệu' },
    { key: 'f', icon: <FontAwesomeIcon icon={faSplotch} />, label: 'Quản lý cửa hàng' },
    { key: 'f', icon: <FontAwesomeIcon icon={faSplotch} />, label: 'Chăm sóc khách hàng' },
  ], [])

  return (
    <>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu mode="inline" theme="dark" inlineCollapsed={false} items={items} />
    </>
  );
};
export default Sidebar;