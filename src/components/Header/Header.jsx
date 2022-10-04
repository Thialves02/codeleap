import React, { useContext } from 'react'
import Title from '../Title/Title'
import { AditionalContent, HeaderContainer } from './style'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/CtxApp'

export default function Header({ title, type, userPost, ...rest }) {
    const { username, userNameRemove } = useContext(Context)
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        userNameRemove()
    }

    console.log(userPost)
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
                    type == 'main' ? (
                        <p onClick={logout}>Logout</p>
                    ) : (
                        userPost == username && (
                            <>
                                <FontAwesomeIcon icon={faTrash} />
                                <FontAwesomeIcon icon={faPenToSquare} />
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

