import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ height: '100%', width: '100%', background: '#efefef', paddingBottom: '70px' }}>
            <div style={{ width: '1270px', height: '100%', margin: '0 auto' }}>
                <h5 style={{ paddingTop: '15px', fontSize: '15px' }}><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
                <ProductDetailsComponent idProduct={id} />
            </div>
        </div>
    )
}

export default ProductDetailsPage