import React, { useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import { Context } from '../../context/CtxApp'
import Textarea from '../Textarea/Textarea'
import { InfoUserContainer } from './style'

export default function InfoContainer({ title, titleColor, text, inputName, inputPlaceholder, textareaName, buttonLabel }) {
    const { setUsername } = useContext(Context)
    const [btnDisabled, setBtnDisabled] = useState(true)

    const userName = (value) => {
        setUsername(value)
        value === "" ? setBtnDisabled(true) : setBtnDisabled(false)
    }

    return (
        <InfoUserContainer>
            <Title
                label={title}
                titleColor={titleColor}
            />
            {
                text && <p>{text}</p>
            }
            <Input
                name={inputName}
                placeholder={inputPlaceholder}
                onChange={e => userName(e.target.value)}
            />
            {
                textareaName && (
                    <Textarea />
                )
            }
            <Button
                disabled={btnDisabled}
                label={buttonLabel}
            />
        </InfoUserContainer>
    )
}
