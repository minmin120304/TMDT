import { DownOutlined, EditOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown, Form, Input, Select, Table } from 'antd';
import FormItem from 'antd/es/form/FormItem';


function AllProduct() {
  const sortItems = [
    { key: 'recommend', label: 'Đề xuất' },
    { key: 'name', label: 'Tên sản phẩm' },
    { key: 'price', label: 'Giá' },
    { key: 'stock', label: 'Kho hàng' }
  ];

  const columns = [
    { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name', width: '30%' },
    { title: 'Doanh số', dataIndex: 'sales', key: 'sales', sorter: true },
    { title: 'Giá', dataIndex: 'price', key: 'price', sorter: true },
    { title: 'Kho hàng', dataIndex: 'stock', key: 'stock', sorter: true },
    { title: 'Thao tác', dataIndex: 'action', key: 'action' }
  ];

  return (
    <>
      {/* Filters and Actions */}
      < div className='p-5' >
        <Form layout='inline'>
          <Form.Item className='w-100' name="name">
            <Input prefix={<SearchOutlined className="text-gray-400" />} />
          </Form.Item>
          <FormItem className="w-64" name="category">
            <Select placeholder="Category" suffixIcon={<EditOutlined />} />
          </FormItem>
          <FormItem className="w-64" name="program">
            <Select defaultValue="Chương trình Shopee" suffixIcon={<DownOutlined />} />
          </FormItem>
          <FormItem>
            <Button variant='solid' color='blue' >Áp dụng</Button>
          </FormItem>
          <FormItem>
            <Button >Đặt lại</Button>
          </FormItem>
        </Form>
      </div >

      {/* Product List Header */}
      < div className="px-6 pb-4" >
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">0 Sản Phẩm</div>
          <div className="flex items-center gap-4">
            <Dropdown menu={{ items: sortItems }} trigger={['click']}>
              <Button icon={<UnorderedListOutlined />}>
                Sắp xếp theo
              </Button>
            </Dropdown>
          </div>
        </div>
      </div >

      {/* Product Table */}
      < Table className="px-6 pb-6" columns={columns} dataSource={[]}
        locale={{
          emptyText: (
            <div className="py-20 text-center">
              <FontAwesomeIcon icon={faBoxArchive} className="mb-4" size='4x' />
              <p className="text-gray-400 text-xl">
                Không tìm thấy sản phẩm
              </p>
            </div>
          )
        }
        } />
    </>
  )
}

export default AllProduct