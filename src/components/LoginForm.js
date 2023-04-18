import React, {useState} from "react";
import styles from './LoginForm.module.css';

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
        <div className={`${styles['container']}`}>
            <div className={`${styles['wrapper']}`}>
                <div className={`${styles['title']}`}>
                    <span>Login</span>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <div className={`${styles['row']}`}>
                        <i className='bx bxs-user'></i>
                        <input type='text'
                               placeholder='Email or Username'
                               onChange={usernameChangeHandler}
                               value={enteredUsername}/>
                    </div>
                    <div className={`${styles['row']}`}>
                        <i className='bx bxs-lock-alt'></i>
                        <input type='password'
                               placeholder='Password'
                               onChange={passwordChangeHandler}
                               value={enteredPassword}/>
                    </div>
                    <div className={`${styles['forgot-password-link']}`}>
                        <a href='test.com'>
                            Forgot Password?
                        </a>
                    </div>
                    <div className={`${styles['row']} ${styles['button']}`}>
                        <input type='submit' value='Login'/>
                    </div>
                    <div className={`${styles['signup-link']}`}>
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