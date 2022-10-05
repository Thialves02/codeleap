import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import { Context } from '../../context/CtxApp'
import CloseBtn from '../CloseBtn/CloseBtn'
import Textarea from '../Textarea/Textarea'
import { InfoUserContainer } from './style'

export default function InfoContainer({ className, type, title, titleColor, text, inputLabel, inputName, inputPlaceholder, textareaLabel, textareaName, textareaPlaceholder, buttonLabel, onClickBtn }) {
    const { username, setUsername, postTitle, postContent, setPostContent, setPostTitle, setOpenUpdateModal } = useContext(Context)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [currentInputName, setCurrentInputName] = useState("")

    useEffect(() => {
        BtnState()
    }, [username, postTitle, postContent])
    //Function to control the state of disabled button
    const BtnState = () => {
        //Check the current input name to verify correctly the button to disable or active
        if (currentInputName === "postTitle" || currentInputName === "postContent") {
            postTitle === "" || postContent === "" ? setBtnDisabled(true) : setBtnDisabled(false)
        } else if (currentInputName === "username") {
            username === "" ? setBtnDisabled(true) : setBtnDisabled(false)
        }
    }

    //Function to set te correct value to the variables
    const setInputValues = (inputElement) => {
        var inputName = inputElement.target.name
        var inputValue = inputElement.target.value

        if (inputName === "username") {
            setUsername(inputValue)
        } else if (inputName === "postTitle") {
            setPostTitle(inputValue)
        } else if (inputName === "postContent") {
            setPostContent(inputValue)
        }

        setCurrentInputName(inputName)
    }

    const closeModal = () => {
        setOpenUpdateModal(false)
    }

    return (
        <InfoUserContainer
            className={className}
        >
            {
                type === 'modal' && <CloseBtn className="close-btn" onClick={closeModal} />
            }
            <Title
                label={title}
                titleColor={titleColor}
            />
            {
                text && <p>{text}</p>
            }
            <Input
                label={inputLabel}
                name={inputName}
                placeholder={inputPlaceholder}
                onChange={setInputValues}
            />
            {
                textareaName && (
                    <Textarea
                        label={textareaLabel}
                        name={textareaName}
                        placeholder={textareaPlaceholder}
                        onChange={setInputValues}
                    />
                )
            }
            <Button
                disabled={btnDisabled}
                label={buttonLabel}
                onClick={onClickBtn}
            />
        </InfoUserContainer>
    )
}
