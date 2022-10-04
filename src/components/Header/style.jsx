import styled from "styled-components"

export const HeaderContainer = styled.div`  
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #000;
    justify-content: flex-start;
    padding:0 40px;
    &.main{
        height: 80px;
    }

    &.post{
        height: 50px;
        /* justify-content: space-around; */

        h1 {
            font-size: 18px;
        }
    }
`
