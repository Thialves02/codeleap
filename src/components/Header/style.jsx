import styled from "styled-components"

export const HeaderContainer = styled.div`  
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #000;
    justify-content: space-between;
    padding:0 40px;
    &.main{
        height: 80px;
    }

    &.post{
        height: 50px;

        h1 {
            font-size: 18px;
        }
    }
`

export const AditionalContent = styled.div`  
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;

    p {
        color:#fff;
        font-weight: bold;
        cursor: pointer;
    }

    svg{
        color: #fff;
        margin-left: 20px;
        cursor: pointer;
    }
`
