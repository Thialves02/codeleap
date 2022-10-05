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
        color: #000000;
        background-color: #ffff;
        border: 1px solid #000000;

        :not([disabled]):hover {
            color: #ffff;
            background-color:#000000;
        }
    }

    :not([disabled]):hover {
        color: #000000;
        background-color: #ffff;
        border: 1px solid #000000;
    }

    :disabled {
	    background-color: #787878;
        cursor: default;
    }
`
