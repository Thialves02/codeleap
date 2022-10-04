import React from 'react'
import { LabelElement } from '../Textarea/style'
import { InputContainer, InputElement } from './style'

export default function Input({ label, ...rest }) {
    return (
        <InputContainer >
            {
                label && <LabelElement>{label}</LabelElement>
            }
            <InputElement {...rest} />
        </InputContainer>
    )
}
