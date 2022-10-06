import React from 'react'
import { LabelElement } from '../Textarea/style'
import { InputContainer, InputElement } from './style'
import PropTypes from 'prop-types'

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

Input.propTypes = {
    label: PropTypes.string.isRequired
}

Input.defaultProps = {
    label: 'CodeLeap',
}