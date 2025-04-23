import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeContent = styled.div`
    display: flex;
    align-item: center;
    gap: 16px;
    justify-content: center;
    padding-top: 15px;
    height: 40px
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`
export const WrapperProducts = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 50px;
    flex-wrap: wrap;

`