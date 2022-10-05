import React from 'react'
import { ButtonContainer, ButtonContent } from './style'
import PropTypes from 'prop-types'

export default function Button({ label, ...rest }) {
    return (
        <ButtonContainer >
            <ButtonContent {...rest}>{label}</ButtonContent>
        </ButtonContainer>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}

Button.defaultProps = {
    label: 'CodeLeap',
    className: 'default',
}
