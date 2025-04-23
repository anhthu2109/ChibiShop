import { Col, Image, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import imgProductSmall from '../../assets/images/imgsmall.jpg'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImg, WrapperStyleImgSmall, WrapperStyleNameProduct } from "./style";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as ProductService from '../../service/ProductService'
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/counter/orderSlide";
import { convertPrice } from "../../utils";
import * as message from '../Message/Message'

const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state.user)
    const order = useSelector((state) => state.order)
    const [errorLimitOrder, setErrorLimitOrder] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const onChange = (value) => {
        setNumProduct(Number(value))
    }
    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if (id) {
            const res = await ProductService.getDetailsProduct(id)
            return res.data
        }
    }

    useEffect(() => {
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
        if ((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
            setErrorLimitOrder(false)
        } else if (productDetails?.countInStock === 0) {
            setErrorLimitOrder(true)
        }
    }, [numProduct])

    useEffect(() => {
        if (order.isSucessOrder) {
            message.success('Đã thêm vào giỏ hàng')
        }
        return () => {
            dispatch(resetOrder())
        }
    }, [order.isSucessOrder])

    const handleChangeCount = (type, limited) => {
        if (type === 'increase') {
            if (!limited) {
                setNumProduct(numProduct + 1)
            }
        } else {
            if (!limited) {
                setNumProduct(numProduct - 1)
            }
        }
    }

    const { isPending, data: productDetails } = useQuery({ queryKey: ['product-details', idProduct], queryFn: fetchGetDetailsProduct, enabled: !!idProduct })

    const handleAddOrderProduct = () => {
        if (!user?.id) {
            navigate('/sign-in', { state: location?.pathname })
        } else {
            const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
            if ((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock)) {
                dispatch(addOrderProduct({
                    orderItem: {
                        name: productDetails?.name,
                        amount: numProduct,
                        image: productDetails?.image,
                        price: productDetails?.price,
                        product: productDetails?._id,
                        discount: productDetails?.discount,
                        countInstock: productDetails?.countInStock
                    }
                }))
            } else {
                setErrorLimitOrder(true)
            }
        }
    }

    return (
        <Loading isPending={isPending}>
            <Row style={{ padding: '16px', backgroundColor: '#fff' }}>
                <Col span={10} style={{ padding: '10px' }}>
                    <Image src={productDetails?.image} alt="img product" />
                    <Row style={{ paddingTop: '10px' }}>
                        <WrapperStyleColImg span={4} >
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                        <WrapperStyleColImg span={4}>
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                        <WrapperStyleColImg span={4}>
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                        <WrapperStyleColImg span={4}>
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                        <WrapperStyleColImg span={4}>
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                        <WrapperStyleColImg span={4}>
                            <WrapperStyleImgSmall src={imgProductSmall} alt="img small" />
                        </WrapperStyleColImg>
                    </Row>
                </Col>
                <Col span={14} style={{ paddingLeft: '30px' }}>
                    <WrapperStyleNameProduct>{productDetails?.name}</WrapperStyleNameProduct>
                    <div>
                        <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} />
                        <span>  | Đã bán 1</span>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>{convertPrice(productDetails?.price)}</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        {/* <span>Giao đến </span> */}
                        {/* {user?.address} */}
                        {/* <span className="address">{productDetails?.address}</span>-
                        <span className="change-address"> Đổi địa chỉ</span> */}
                    </WrapperAddressProduct>
                    <div style={{ margin: '10px 0 20px', padding: '10px 0' }}>
                        <div style={{ marginBottom: '10px' }}>Số lượng</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', numProduct === 1)}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <WrapperInputNumber onChange={onChange} defaultValue={1} min={1} max={productDetails?.countInStock} value={numProduct} size="small" />
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase', numProduct === productDetails?.countInStock)}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: 'rgb(247, 202, 181)',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(214, 71, 0)',
                                borderRadius: '4px',
                                paddingBottom: '5px'
                            }}
                            onClick={handleAddOrderProduct}
                            textbutton={'Chọn mua'}
                            styletextbutton={{ color: '#333333', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: 'rgb(224, 136, 94)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                            textbutton={'Mua trả sau'}
                            styletextbutton={{ color: '#fff', fontSize: '15px' }}
                        ></ButtonComponent>
                    </div>
                    {errorLimitOrder && <div style={{ color: 'red', paddingTop: '10px' }}>Sản phẩm đã hết hàng</div>}
                </Col>
            </Row>
        </Loading>
    )
}

export default ProductDetailsComponent