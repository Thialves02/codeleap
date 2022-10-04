import React from 'react'
import { TitleContent } from './style'
import PropTypes from 'prop-types'

export default function Title({ label, ...rest }) {
    return (
        <TitleContent {...rest}>{label}</TitleContent>
    )
}

Title.propTypes = {
    label: PropTypes.string.isRequired
}

Title.defaultProps = {
    label: 'CodeLeap Text'
}
