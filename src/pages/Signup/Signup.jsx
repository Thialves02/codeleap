import InfoContainer from '../../components/InfoContainer/InfoContainer'
import { SignUpContainer } from './style'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const storeUsername = () => {
        navigate('/main');
    }

    return (
        <SignUpContainer>
            <InfoContainer
                title="Welcome to CodeLeap network!"
                text="Please enter your username"
                inputName="username"
                inputPlaceholder="John Doe"
                buttonLabel="ENTER"
                onClickBtn={storeUsername}
            />
        </SignUpContainer>
    )
}
