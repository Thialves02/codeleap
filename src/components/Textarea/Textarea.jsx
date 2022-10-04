import React from 'react'
import { LabelElement, TextareaContainer, TextareaElement } from './style'

export default function Textarea({ label, ...rest }) {
    return (
        <TextareaContainer>
            {
                label && <LabelElement>{label}</LabelElement>
            }
            <TextareaElement {...rest} />
        </TextareaContainer>
    )
}
