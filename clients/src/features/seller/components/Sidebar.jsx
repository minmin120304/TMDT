import { faBox, faChartLine, faFileInvoice, faHome, faPeopleGroup, faSplotch, faSquarePollVertical, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ConfigProvider, Menu } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePaths } from '../routes';

const theme = {
  components: {
    Menu: {
      /* here is your component tokens */
      darkItemSelectedBg: "#000c17",

    },
  },
}

const Sidebar = () => {
  const navigate = useNavigate();
  const items = useMemo(() => [
    { key: routePaths.management.root, icon: <FontAwesomeIcon icon={faHome} />, label: "Trang Chủ" },
    {
      key: routePaths.management.product.root, icon: <FontAwesomeIcon icon={faBox} />, label: 'Quản Lý Sản Phẩm',
      children: [
        { key: routePaths.management.product.root, label: "Tất Cả Sản Phẩm" },
        { key: routePaths.management.product.insert, label: "Thêm Sản Phẩm" },
      ]
    },
    {
      key: 'b', icon: <FontAwesomeIcon icon={faFileInvoice} />, label: 'Quản Lý đơn hàng',
      children: [
        { key: 'b1', label: "Tất Cả" },
        { key: 'b2', label: "Bàn Giao Đơn Hàng" },
        { key: 'b3', label: "Đơn Hủy/Hoàn Tiền" },
        { key: 'b4', label: "Vận Chuyển" },
      ]
    },
    {
      key: 'c', icon: <FontAwesomeIcon icon={faChartLine} />, label: 'Quản Lý Marketing',
      children: [
        { key: "c1", label: "Tất Cả" },
        { key: "c2", label: "Khuyến Mãi Của Shop" },
        { key: "c3", label: "Flash Sale Của Shop" },
        { key: "c4", label: "Mã Giảm Giá Của Shop" },
        { key: "c5", label: "Chương Trình Shopee" },
      ]
    },
    {
      key: 'd', icon: <FontAwesomeIcon icon={faWallet} />, label: 'Quản Lý tài chính',
      children: [
        { key: "d1", label: "Doanh thu" },
        { key: "d2", label: "Tài Khoản Ngân Hàng" },
        { key: "d3", label: "Số Dư Tài Khoản" },
      ]
    },
    {
      key: 'e', icon: <FontAwesomeIcon icon={faSquarePollVertical} />, label: 'Phân tích dữ liệu',
      children: [
        { key: "e1", label: "Phân Tích Bán Hàng" },
        { key: "e2", label: "Hiệu Quả Hoạt Động" },
      ]
    },
    {
      key: 'f', icon: <FontAwesomeIcon icon={faSplotch} />, label: 'Quản Lý cửa hàng',
      children: [
        { key: "f1", label: "Hồ Sơ Shop" },
        { key: "f2", label: "Trang Trí Shop" },
      ]
    },
    {
      key: 'g', icon: <FontAwesomeIcon icon={faPeopleGroup} />, label: 'Chăm sóc khách hàng',
      children: [
        { key: "g1", label: "Quản Lý Chat" },
        { key: "g2", label: "Quản Lý Đánh Giá" },
        { key: "g3", label: "Quản Lý Khiếu Nại" },
      ]
    },
  ], [])
  function onClick(e) {
    console.log(e)
    navigate(e.key)
  }
  return (
    <ConfigProvider theme={theme}>
      <Menu className='h-full overflow-y-scroll' mode="inline" theme="dark" inlineCollapsed={false} items={items} onClick={onClick} />
    </ConfigProvider>
  );
};
export default Sidebar;