import styled from "styled-components";


export const WrapperHeaderUser = styled.div`
    display: flex;
    padding: 9px 16px;
    background: #fff;
    margin-top: 12px;
    gap: 10px;
    flex-wrap: wrap; 
`

export const WrapperInfoUser = styled.div`
    flex: 1 1 calc(33.333% - 10px); 
    border: 1px solid #ccc; 
    padding: 10px;
    box-sizing: border-box; 
`

export const WrapperLabel = styled.div`
    text-transform: uppercase;
    margin-bottom: 10px; 
`

export const WrapperContentInfo = styled.div`
    width: 100%; 
    & > div {
        margin-bottom: 10px; /* Tạo khoảng cách giữa các thẻ div con */
    }

    & > div:last-child {
        margin-bottom: 0; /* Loại bỏ khoảng cách dưới cùng của thẻ div cuối */
    }
`
export const WrapperStyleContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`
export const WrapperItemLabel = styled.div`
    width: 200px;
    &:last-child {
        font-weight: bold;
    }
`
export const WrapperProduct = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
`
export const WrapperNameProduct = styled.div`
    display: flex;
    align-items: flex-start;
    width: 670px
`
export const WrapperItem = styled.div`
    width: 200px;
    font-weight: bold;
    &:last-child {
        color: red
    }
`
export const WrapperAllPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end
`