import React from 'react'
import Title from '../Title/Title'
import { AditionalContent, HeaderContainer } from './style'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Header({ title, type, userPost, deletePost, updatePost, ...rest }) {
    const username = useSelector(state => state.getUsername.inputValue)
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        localStorage.removeItem('username');
    }

    return (
        <HeaderContainer
            {...rest}
        >
            <Title
                label={title}
                className="header"
            />
            <AditionalContent>
                {
                    type === 'main' ? (
                        <p onClick={logout}>Logout</p>
                    ) : (
                        userPost === username && (
                            <>
                                <FontAwesomeIcon icon={faTrash} onClick={deletePost} />
                                <FontAwesomeIcon icon={faPenToSquare} onClick={updatePost} />
                            </>
                        )
                    )
                }
            </AditionalContent>
        </HeaderContainer>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    userPost: PropTypes.string.isRequired,
    className: PropTypes.string
}

Header.defaultProps = {
    title: 'CodeLeap',
    type: 'main',
    userPost: 'Thiago',
    className: 'main',
}

