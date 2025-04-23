import React from "react"
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from "./style"
import { StarFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { convertPrice } from "../../utils"

const CardComponent = (props) => {
    const { countInStock, image, name, price, rating, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            stylesheader={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            stylesbody={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() => countInStock !== 0 && handleDetailsProduct(id)}
            disabled={countInStock === 0}
        >
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '7px' }}>
                    <span>{rating}</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span>| Đã bán {selled || 1}+</span>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginTop: '8px' }}>{convertPrice(price)}</span>
                <WrapperDiscountText> - {discount || 5} %</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent