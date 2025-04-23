import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperFooter = styled.div`
    background: rgb(209, 157, 146);
    padding-top: 50px;
`;

export const Footer1 = styled.div`
    margin-bottom: 30px;
    margin-left: 50px;
`;

export const Footer1Left = styled(Link)`
    margin-bottom: 15px;
    display: inline-block;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left
`;

export const Footer1ListItem = styled.li`
    padding-left: 30px;
    font-size: 15px;
    color: #fff;
    line-height: 36px;
    list-style: none; //bỏ gạch dưới
`;

export const Footer2 = styled.div`
    margin-bottom: 25px;
    overflow: hidden;
    padding-left: 100px;
`;

export const Footer2Heading = styled.h3`
    color: #fff;
    padding-bottom: 25px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
`;

export const Footer2List = styled.ul`
    float: left;
`;

export const Footer2ListItem = styled.li`
    list-style: none;
`;

export const Footer2Link = styled.a`
    color: #fff;
    font-size: 15px;
    line-height: 32px;
    text-decoration: none; //bo gach chan
`;

export const Footer3 = styled.div`
    margin-bottom: 25px;
    overflow: hidden;
    padding-left: 50px;
`;

export const Footer3Heading = styled.h3`
    color: #fff;
    padding-bottom: 25px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
`;

export const Footer3Form = styled.form`
    position: relative;
`;

