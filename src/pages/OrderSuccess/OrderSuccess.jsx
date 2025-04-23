import React from 'react';
import { Lable, WrapperInfo, WrapperContainer, WrapperValue, WrapperItemOrder } from './style';
import Loading from '../../components/LoadingComponent/Loading';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';

const OrderSuccess = () => {
    const location = useLocation()
    const { state } = location

    return (
        <div style={{ background: '#f5f5fa', width: '100%', height: '100%', paddingBottom: '100px' }}>
            <Loading isPending={false}>
                <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
                    <h3>Đơn hàng đặt thành công</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <WrapperContainer>
                            <WrapperInfo>
                                <div>
                                    <Lable>Phương thức giao hàng</Lable>
                                    <WrapperValue>
                                        <span style={{ color: '#ea8500', fontWeight: 'bold' }}>{orderContant.delivery[state?.delivery]}</span> Giao hàng tiết kiệm
                                    </WrapperValue>
                                </div>
                            </WrapperInfo>
                            <WrapperInfo>
                                <div>
                                    <Lable>Phương thức thanh toán</Lable>
                                    <WrapperValue>{orderContant.payment[state?.payment]}</WrapperValue>
                                </div>
                            </WrapperInfo>
                            <>
                                {state?.orders?.map((order, index) => (
                                    <WrapperItemOrder key={index}>
                                        <div style={{ width: '500px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <img src={order.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                                            <div style={{
                                                width: 260,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>{order?.name}</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                            <span style={{ fontSize: '13px', color: '#242424' }}>Số lượng: {order?.amount}</span>
                                            <span style={{ fontSize: '13px', color: '#242424' }}>Giá tiền: {convertPrice(order?.price)}</span>
                                        </div>
                                    </WrapperItemOrder>
                                ))}
                            </>
                            <div>
                                <span style={{ fontSize: '16px', color: 'red', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>Tổng tiền: {convertPrice(state?.totalPriceMemo)}</span>
                            </div>
                        </WrapperContainer>
                    </div>
                </div>
            </Loading>
        </div>
    )
}

export default OrderSuccess