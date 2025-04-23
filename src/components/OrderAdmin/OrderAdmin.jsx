import React, { useState, useEffect } from "react";
import { WrapperHeader } from "./style";
import { Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import * as OrderService from '../../service/OrderService';
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { orderContant } from "../../contant";
import { convertPrice } from "../../utils";
import moment from 'moment';

const OrderAdmin = () => {
    const user = useSelector((state) => state?.user);
    const [totalOrder, setTotalOrder] = useState(0);

    const getAllOrder = async () => {
        const res = await OrderService.getAllOrder(user?.access_token);
        return res;
    };

    const queryOrder = useQuery({ queryKey: ['orders'], queryFn: getAllOrder });
    const { isPending: isPendingOrders, data: orders } = queryOrder;

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <InputComponent
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                        onClick={() => confirm()}
                    >
                        Search
                    </Button>
                    <Button
                        size="small"
                        style={{ width: 90 }}
                        onClick={() => clearFilters && clearFilters()}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                // setTimeout(() => searchInput.current?.select(), 100);
            }
        },
    });

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'User',
            dataIndex: 'userName',
            sorter: (a, b) => a.userName.length - b.userName.length,
            ...getColumnSearchProps('userName')
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            sorter: (a, b) => a.phone.length - b.phone.length,
            ...getColumnSearchProps('phone')
        },
        {
            title: 'Address',
            dataIndex: 'address',
            sorter: (a, b) => a.address.length - b.address.length,
            ...getColumnSearchProps('address')
        },
        {
            title: 'Product Names',
            dataIndex: 'productNames',
            render: (productNames) => productNames.join(', '),
        },
        {
            title: 'Payment method',
            dataIndex: 'paymentMethod',
            sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
            ...getColumnSearchProps('paymentMethod')
        },
        {
            title: 'Total price',
            dataIndex: 'totalPrice',
            sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
            ...getColumnSearchProps('totalPrice')
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
            ...getColumnSearchProps('createdAt', true),
            render: (text) => moment(text).format('MM/DD/YYYY hh:mm:ss'),
        },
    ];

    const dataTable = orders?.data?.length && orders?.data?.map((order) => {
        return {
            ...order,
            key: order._id,
            userName: order?.shippingAddress?.fullName,
            phone: order?.shippingAddress?.phone,
            address: order?.shippingAddress?.address,
            productNames: order?.orderItems?.map(item => item.name),
            paymentMethod: orderContant.payment[order?.paymentMethod],
            totalPrice: convertPrice(order?.totalPrice),
            createdAt: order.createdAt
        };
    });

    useEffect(() => {
        setTotalOrder(orders?.data?.length || 0);
    }, [orders]);

    return (
        <div>
            <WrapperHeader>Quản lý đơn hàng</WrapperHeader>
            <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>Tổng số đơn hàng: {totalOrder}</div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent columns={columns} isPending={isPendingOrders} data={dataTable} />
            </div>
        </div>
    );
};

export default OrderAdmin;
