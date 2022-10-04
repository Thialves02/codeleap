import React from 'react'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import { SignUpContainer } from './style'

export default function Signup() {
    return (
        <SignUpContainer>
            <InfoContainer
                title="Welcome to CodeLeap network!"
                text="Please enter your username"
                inputName="username"
                inputPlaceholder="John Doe"
                buttonLabel="ENTER"
            />
        </SignUpContainer>
    )
}
