import styled from "styled-components"

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #060606e0;

    p {
        margin-bottom: 30px;
    }
`

export const ModalElement = styled.div`
    /* width: 50%; */
    /* height: 20%;   */
    padding: 20px;
    background-color: #ffff;
`

export const OptionsContainer = styled.div`
    display: flex;
    width : 100%;
    justify-content: flex-end;

    button {    
        margin-left: 10px;
    }
`