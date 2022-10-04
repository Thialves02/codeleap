import React from 'react'
import Title from '../Title/Title'
import { HeaderContainer } from './style'
import PropTypes from 'prop-types'

export default function Header({ title, ...rest }) {
    return (
        <HeaderContainer
            {...rest}
        >
            <Title
                label={title}
                className="header"
            />
        </HeaderContainer>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: 'CodeLeap',
    className: 'main'
}

