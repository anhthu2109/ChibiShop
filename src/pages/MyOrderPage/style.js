import { InputNumber } from 'antd';
import styled from 'styled-components';

export const WrapperContainer = styled.div`
    width: 100%;
`
export const WrapperListOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
`
export const WrapperItemOrder = styled.div`
    display: flex;
    padding: 9px 16px;
    align-items: center;
    background: #fff;
    margin-top: 12px;
    flex-direction: column;
    width: 950px;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 12px 12px #ccc;
`
export const WrapperStatus = styled.div`
    display: flex;
    align-item: flex-start;
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(235, 235, 240);
    flex-direction: column;
`
export const WrapperHeaderItem = styled.div`
    display: flex;
    align-items: center;
`
export const WrapperFooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
`