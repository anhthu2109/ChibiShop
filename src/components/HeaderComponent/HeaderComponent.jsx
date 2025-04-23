import { Badge, Col, Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall, WrapperContentPopup } from './style'
import * as UserService from '../../service/UserService'
import { resetUser } from '../../redux/counter/userSlide'

import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingComponent/Loading';
import { searchProduct } from '../../redux/counter/productSlide';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [search, setSearch] = useState('')
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const order = useSelector((state) => state.order)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    const content = (
        <div>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Admin</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
            <WrapperContentPopup onClick={() => handleClickNavigate('my-order')}>Đơn hàng của tôi</WrapperContentPopup>
            <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
        </div>
    );

    const handleClickNavigate = (type) => {
        if (type === 'profile') {
            navigate('/profile-user')
        } else if (type === 'admin') {
            navigate('/system/admin')
        } else if (type === 'my-order') {
            navigate('/my-order', {
                state: {
                    id: user?.id,
                    token: user?.access_token
                }
            })
        } else {
            handleLogout()
        }
        setIsOpenPopup(false)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(searchProduct(e.target.value))
    }

    return (
        <div style={{ justifyContent: 'center' }}>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={6}>
                    <WrapperTextHeader to='/'>CHIBI SHOP</WrapperTextHeader>
                </Col>
                {!isHiddenSearch && (
                    <Col span={12}>
                        <ButtonInputSearch
                            size="large"
                            bordered={false}
                            textbutton="Tìm kiếm"
                            placeholder="Nhập tìm kiếm....."
                            onChange={onSearch}
                        />
                    </Col>
                )}
                <Col span={6} style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Loading isPending={loading}>
                        <WrapperHeaderAccout>
                            {userAvatar ? (
                                <img src={userAvatar} alt="avatar"
                                    style={{
                                        height: '40px',
                                        width: '40px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginRight: '-7px'
                                    }} />
                            ) : (
                                <UserOutlined style={{ fontSize: '20px' }} />
                            )}
                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click" open={isOpenPopup}>
                                        <div style={{ cursor: 'pointer' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                    <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                            )}

                        </WrapperHeaderAccout>
                    </Loading>
                    {!isHiddenCart && (
                        <div onClick={() => navigate('/order')} style={{ cursor: 'pointer' }}>
                            <div>
                                <Badge count={order?.orderItems?.length} size="small">
                                    <ShoppingCartOutlined style={{ fontSize: '20px', padding: '0 7px', color: '#fff' }} />
                                </Badge>
                                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                            </div>
                        </div>
                    )}
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent