import React from 'react'
import { CloseBtnContainer } from './style'

export default function CloseBtn({ ...rest }) {
    return (
        <CloseBtnContainer {...rest}>X</CloseBtnContainer>
    )
}
