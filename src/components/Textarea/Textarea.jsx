import React from 'react'
import { LabelElement, TextareaContainer, TextareaElement } from './style'
import PropTypes from 'prop-types'

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

Textarea.propTypes = {
    label: PropTypes.string.isRequired
}

Textarea.defaultProps = {
    label: 'CodeLeap'
}