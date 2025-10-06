import { Popover } from "antd"

import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import {
  ShoppingOutlined,
  SettingOutlined,
  GlobalOutlined,
  LogoutOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { routePaths } from "../routes";

function AccountPopOver() {
  const menuItems = [
    { key: 'support-shop', icon: <ShoppingOutlined className="text-base" />, label: 'Hỗ Sơ Shop', },
    { key: 'settings', icon: <SettingOutlined className="text-base" />, label: 'Thiết Lập Shop', },
    {
      key: 'language', icon: <GlobalOutlined className="text-base" />,
      label: (
        <div className="flex items-center justify-between w-full">
          <span>Tiếng Việt (Vietnamese)</span>
          <RightOutlined className="text-xs text-gray-400" />
        </div>
      ),
    },
    { type: 'divider', },
    { key: 'logout', icon: <LogoutOutlined className="text-base" />, label: 'Đăng xuất', },
  ];

  return (
    <div className="flex gap-1 flex-col justify-center w-60">
      <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
        <Avatar size={80} className="border-2 border-blue-200" />
        <span className="text-gray-700 font-medium mt-2">ducminh16082004</span>
      </div>

      <div className="flex items-center hover:bg-gray-50 cursor-pointer p-2">
        <ShoppingOutlined className="text-base mr-3 text-gray-600" />
        <span className="text-sm">Hỗ Sơ Shop</span>
      </div>
      <div className="flex items-center hover:bg-gray-50 cursor-pointer p-2">
        <SettingOutlined className="text-base mr-3 text-gray-600" />
        <span className="text-sm">Thiết Lập Shop</span>
      </div>

      <div className="border-t border-gray-200 my-1"></div>
      <div className="flex items-center hover:bg-gray-50 cursor-pointer p-2">
        <LogoutOutlined className="text-base mr-3 text-gray-600" />
        <span className="text-sm">Đăng xuất</span>
      </div>
    </div>

  )
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-10 py-3">
      <div className="flex items-center justify-between">
        <Link className="flex items-center gap-2" to={routePaths.management.root}>
          <div className="size-8 bg-blue-500 rounded flex items-center justify-center">
          </div>
          <span className="text-blue-500 font-semibold text-lg">AAAA</span>
          <span className="text-gray-700 text-base ml-1">Kênh Người Bán</span>
        </Link>

        <Popover trigger="click" content={<AccountPopOver />} placement="bottomRight">
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="size-10 rounded-full bg-blue-400 overflow-hidden">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm">ducminh16082004</div>
          </div>
        </Popover>
      </div>
    </header>
  )
}

export default Header