import React, {useState} from "react";
import './LoginForm.css';
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const usernameChangeHandler = (event) => {
        let username = event.target.value;
        setEnteredUsername(username);
    };
    const passwordChangeHandler = (event) => {
        let password = event.target.value;
        setEnteredPassword(password);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {
            username: enteredUsername,
            password: enteredPassword,
        };

        console.log(formData);

        setEnteredUsername('');
        setEnteredPassword('');
    };

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='title'>
                    <span>Login</span>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <div className='row'>
                        <i className='bx bxs-user'></i>
                        <input type='text'
                               placeholder='Email or Username'
                               onChange={usernameChangeHandler}
                               value={enteredUsername}/>
                    </div>
                    <div className='row'>
                        <i className='bx bxs-lock-alt'></i>
                        <input type='password'
                               placeholder='Password'
                               onChange={passwordChangeHandler}
                               value={enteredPassword}/>
                    </div>
                    <div className='forgot-password-link'>
                        <a href='test.com'>
                            Forgot Password?
                        </a>
                    </div>
                    <div className='row button'>
                        <SubmitButton>Login</SubmitButton>
                    </div>
                    <div className='signup-link'>
                        <span>Not a member? </span>
                        <a href='test.com'>
                            Signup now
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;