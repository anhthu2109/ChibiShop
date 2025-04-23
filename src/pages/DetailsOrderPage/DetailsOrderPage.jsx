import React, { useMemo } from "react";
import { WrapperAllPrice, WrapperContentInfo, WrapperHeaderUser, WrapperInfoUser, WrapperItem, WrapperItemLabel, WrapperLabel, WrapperNameProduct, WrapperProduct, WrapperStyleContent } from "./style";
import { useLocation, useParams } from "react-router-dom";
import * as OrderService from '../../service/OrderService'
import { useQuery } from "@tanstack/react-query";
import { orderContant } from "../../contant";
import { convertPrice } from "../../utils";
import Loading from "../../components/LoadingComponent/Loading";

const DetailsOrderPage = () => {
    const location = useLocation()
    const { state } = location
    const params = useParams()
    const { id } = params
    const fetchDetailsOrder = async () => {
        const res = await OrderService.getDetailsOrder(id, state?.token)
        return res.data
    }
    const queryOrder = useQuery({ queryKey: ['orders-details'], queryFn: fetchDetailsOrder }
        // , {
        //     enabled: id
        // }
    )
    const { isPending, data } = queryOrder
    const priceMemo = useMemo(() => {
        const result = data?.orderItems?.reduce((total, cur) => {
            return total + ((cur.price * cur.amount))
        }, 0)
        return result
    }, [data])

    return (
        <Loading isPending={isPending}>
            <div style={{ width: '100%', height: '100%', background: '#f5f5f5', paddingBottom: '50px' }}>
                <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
                    <h4>Chi tiết đơn hàng</h4>
                    <WrapperHeaderUser>
                        <WrapperInfoUser>
                            <WrapperLabel>Địa chỉ người nhận</WrapperLabel>
                            <WrapperContentInfo>
                                <div className='name-info'>{data?.shippingAddress?.fullName}</div>
                                <div className='address-info'><span>Địa chỉ: </span>{`${data?.shippingAddress?.address} ${data?.shippingAddress?.city}`}</div>
                                <div className='phone-info'><span>Điện thoại: </span>{data?.shippingAddress?.phone}</div>
                            </WrapperContentInfo>
                        </WrapperInfoUser>
                        <WrapperInfoUser>
                            <WrapperLabel>Hình thức giao hàng</WrapperLabel>
                            <WrapperContentInfo>
                                <div className='delivery-info'><span className='name-delivery' style={{ color: '#ea8500', fontWeight: 'bold' }}>FAST</span> Giao hàng tiết kiệm</div>
                                <div className='delivery-fee'><span>Phí giao hàng: </span>{convertPrice(data?.shippingPrice)}</div>
                            </WrapperContentInfo>
                        </WrapperInfoUser>
                        <WrapperInfoUser>
                            <WrapperLabel>Hình thức thanh toán</WrapperLabel>
                            <WrapperContentInfo>
                                <div className='payment-info'>{orderContant.payment[data?.paymentMethod]}</div>
                                <div className='status-payment' style={{ color: '#ea8500' }}>{data?.isPaid ? 'Đã thanh toán ' : 'Chưa thanh toán'}</div>
                            </WrapperContentInfo>
                        </WrapperInfoUser>
                    </WrapperHeaderUser>
                    <WrapperStyleContent>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ width: '610px' }}>Sản phẩm</div>
                            <WrapperItemLabel>Giá</WrapperItemLabel>
                            <WrapperItemLabel>Số lượng</WrapperItemLabel>
                            <WrapperItemLabel>Giảm giá</WrapperItemLabel>
                        </div>
                        {data?.orderItems?.map((order) => {
                            return (
                                <WrapperProduct>
                                    <WrapperNameProduct>
                                        <img src={order?.image}
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                objectFit: 'cover',
                                                border: '1px solid rgb(238, 238, 238)',
                                                padding: '5px'
                                            }}
                                        />
                                        <div style={{
                                            width: 260,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            marginLeft: '10px',
                                            height: '70px',
                                        }}>{order?.orderItems}</div>
                                    </WrapperNameProduct>
                                    <WrapperItem>{convertPrice(order?.price)}</WrapperItem>
                                    <WrapperItem>{order?.amount}</WrapperItem>
                                    <WrapperItem>{order?.discount ? convertPrice(priceMemo * order?.discount / 100) : '0 VND'}</WrapperItem>
                                </WrapperProduct>
                            )
                        })}
                        <WrapperAllPrice>
                            <WrapperItemLabel>Tạm tính</WrapperItemLabel>
                            <WrapperItemLabel>{convertPrice(priceMemo)}</WrapperItemLabel>
                        </WrapperAllPrice>
                        <WrapperAllPrice>
                            <WrapperItemLabel>Phí vận chuyển</WrapperItemLabel>
                            <WrapperItemLabel>{convertPrice(data?.shippingPrice)}</WrapperItemLabel>
                        </WrapperAllPrice>
                        <WrapperAllPrice>
                            <WrapperItemLabel>Tổng cộng</WrapperItemLabel>
                            <WrapperItem>{convertPrice(data?.totalPrice)}</WrapperItem>
                        </WrapperAllPrice>
                    </WrapperStyleContent>
                </div>
            </div>
        </Loading>
    )
}

export default DetailsOrderPage