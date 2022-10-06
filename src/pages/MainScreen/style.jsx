import styled from "styled-components"
import { media } from "../../assets/style/media"

export const MainScreenContainer = styled.main`
    display: flex;
    justify-content: center;
`

export const MainScreenContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    max-width:1200px;
    background-color: #ffff;
    padding-bottom: 50px;
    min-height: 100vh;

    ${media('tablet')}{
        width:80%;
    }

    ${media('mobile')}{
        width:100%;
    }


`
