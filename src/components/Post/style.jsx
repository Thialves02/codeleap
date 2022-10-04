import styled from "styled-components"

export const PostContainer = styled.div`
    width:80%;
    margin-top: 25px;
    border: 1px solid #dddd;
    padding-bottom: 25px;
`

export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:25px 25px 15px;
    color: #777777;

    p:first-child {
        font-weight: bold;
    }
`

export const PostContent = styled.div`
    padding:0 25px;
`