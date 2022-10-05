import React from 'react'
import Button from '../Button/Button'
import { ModalContainer, ModalElement, OptionsContainer } from './style'

export default function Modal({ label, closeModal, deletePost }) {
    return (
        <ModalContainer>
            <ModalElement>
                <p>{label}</p>
                <OptionsContainer>
                    <Button
                        label="Cancel"
                        className="modal"
                        onClick={closeModal}
                    />
                    <Button
                        label="OK"
                        className="modal"
                        onClick={deletePost}
                    />
                </OptionsContainer>
            </ModalElement>
        </ModalContainer>
    )
}
