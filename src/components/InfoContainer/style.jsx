import styled from "styled-components"

export const InfoUserContainer = styled.div`
    position: relative;
    padding: 25px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 1px solid #DDDDDD;
    margin-top: 50px;

    &.main{
        width: 80%;
    }

    &.modal{
        width: 80%;
        max-width: 900px;
    }

    div.close-btn{
        top: -12px;
        right:-12px;
        position: absolute;
    }

    h1 {
        margin-bottom: 20px;
    }

    button {
        margin-left: 70%;
    }
`