import { InputNumber } from 'antd';
import styled from 'styled-components';

export const WrapperStyleHeader = styled.div`
    background: rgb(255, 255, 255);
    padding: 9px 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    span {
        color: rgb(36, 36, 36);
        font-weight: 400;
        font-size: 15px
    }
`
export const WrapperStyleHeaderDelivery = styled.div`
    background: rgb(255, 255, 255);
    padding: 9px 16px;
    margin-bottom: 5px;
    span {
        font-size: 10px
    }
`
export const WrapperLeft = styled.div`
    width: 910px;
`
export const WrapperListOrder = styled.div`

`
export const WrapperItemOrder = styled.div`
    display: flex;
    padding: 9px 16px;
    align-items: center;
    background: #fff;
    margin-top: 12px
`
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 40px;
        border-top: none;
        border-bottom: none;
    }
`
export const WrapperCountOrder = styled.div`
    display: flex;
    align-items: center;
    width: 84px;
    border: 1px solid #ccc;
    border-radius: 4px
`
export const WrapperRight = styled.div`
    width: 320px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center
`
export const WrapperInfo = styled.div`
    padding: 17px 20px
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    width: 100%
`
export const WrapperTotal = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 17px 20px;
    background: #fff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`