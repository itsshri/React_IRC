import { useRef, useState } from 'react';
import './Form.css';
const Form = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible);
    };

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmpassword = useRef(null);
    const phone = useRef(null);
    const age = useRef(null);

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        age: ''
    });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const Login = (e) => {
        e.preventDefault();
        console.log("Login clicked")
        console.log(errors)
        const data = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword: confirmpassword.current.value,
            phone: phone.current.value,
            age: age.current.value,
        };
        // setErrors(data)
        if (data.username.length === 0) {
            setErrors({ ...errors, username: 'Username is empty!' });
        } else if (data.username.length < 6) {
            setErrors({ ...errors, username: 'Minimum 6 characters for username!' });
        } else {
            setErrors({ ...errors, username: '' });
        }

        if (data.email.length === 0) {
            setErrors({ ...errors, email: 'Email is empty!' });
        } else if (!emailRegex.test(data.email)) {
            setErrors({ ...errors, email: 'Invalid email format!' });
        } else {
            setErrors({ ...errors, email: '' });
        }

        if (data.password.length === 0) {
            setErrors({ ...errors, password: 'Enter the password!' });
        } else if (data.password.length < 6) {
            setErrors({ ...errors, password: 'Minimum 6 characters for password!' });
        } else {
            setErrors({ ...errors, password: '' });
        }

        if (data.confirmpassword !== data.password) {
            setErrors({ ...errors, confirmpassword: 'Passwords do not match!' });
        } else {
            setErrors({ ...errors, confirmpassword: '' });
        }
        // if (data.phone.length === 0) {
        //     setErrors({ ...errors, phone: 'Phone number is empty!' });
        // } else if (data.phone.length !== 10) {
        //     setErrors({ ...errors, phone: 'Phone number should be 10 digits!' });
        // } else {
        //     setErrors({ ...errors, phone: '' });
        // }

    };
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Hello world
                    </div>
                    <ul className="navlinks">

                        <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li onClick={toggle}>
                            Login
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">Login</h2>
                            <form className="auth-container h-30v shadow" onSubmit={Login}>
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={username} />
                                {
                                    errors.username === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {errors.username}
                                        </span>
                                }
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                {
                                    errors.email === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {errors.email}
                                        </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                {
                                    errors.password == '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {errors.password}
                                        </span>
                                }
                                <input type="password" name="" id="confirmpassword" placeholder="ConfirmPassword" className="auth-input" ref={confirmpassword} />
                                <input type="number" name="" id="phone" placeholder="Phone" className="auth-input" ref={phone} />
                                <input type="number" name="" id="age" placeholder="Age" className="auth-input" ref={age} />
                                <span className='btn-container'>
                                    <button type="submit" className="auth-btn w-50">Login</button>
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
        </>
    )
}

export default Form;