import { Radio } from 'antd';
import styled from 'styled-components';

export const WrapperLeft = styled.div`
    width: 800px;
`
export const WrapperRight = styled.div`
    width: 320px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`
export const WrapperInfo = styled.div`
    padding-top: 20px;
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    width: 100%;
`
export const WrapperTotal = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 17px 20px;
    background: #fff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`
export const Lable = styled.span`
    font-size: 14px;
    color: #000;
    font-weight: bold;
`
export const WrapperRadio = styled(Radio.Group)`
    margin-top: 6px;
    background: rgb(240, 248, 255);
    border: 1px solid rgb(194, 225, 225);
    width: 500px;
    border-radius: 4px;
    height: 100px;
    padding: 16px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`