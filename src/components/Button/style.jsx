import styled from "styled-components"

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`

export const ButtonContent = styled.button`
    width:80px;
    height:30px;
    border-radius:3px ;
    background-color:#000000;
    border:none ;
    color: #ffff;
    cursor: pointer;
    font-weight:bold;
    transition: all ease .5s ;

    &.modal{
        width:100%;
    }

    :hover {
        background-color: #0000b5;
    }

    :disabled {
	    background-color: #363638;
        cursor: default;
    }
`
