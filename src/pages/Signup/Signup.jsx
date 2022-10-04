import React from 'react'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import { InfoUserContainer, SignUpContainer } from './style'

export default function Signup() {
    return (
        <SignUpContainer>
            <InfoUserContainer>
                <Title
                    label="Welcome to CodeLeap network!"
                    className="black"
                />
                <p>Please enter your username</p>
                <Input
                    name="username"
                    placeholder="John Doe"
                />
            </InfoUserContainer>
        </SignUpContainer>
    )
}
