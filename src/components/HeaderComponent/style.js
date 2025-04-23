import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    height: 80px;
    padding: 25px 150px 10px;
    background-color: rgb(209, 157, 146);
    align-item: center;
    gap: 20px;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`

export const WrapperIconHeader = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 10px
`
export const WrapperTextHeaderSmall = styled.span`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 5px;
    font-size: 12px
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: #2C3E85;
    }
`