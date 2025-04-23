import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImgSmall = styled(Image)`
    height: 64px;
    width: 64px;
    padding-right: 10px;
`

export const WrapperStyleColImg = styled(Col)`
    flex-basis: unset;
    display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
    color: #43432c;
    font-size: 25px;
    font-weight: 400;
    line-height: 24px;
    overflow-wrap: break-word;
`
export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    color: #2B2B2B;
    border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-left: 40px;
    font-weight: 500;
    padding: 10px
`
export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 40px;
        border-top: none;
        border-bottom: none;
    }
`