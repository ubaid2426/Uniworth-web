import React, { useEffect } from 'react';
import './Login.css';
import 'boxicons';

const Login = () => {
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const registerLink = document.querySelector('.register-link');
        const loginLink = document.querySelector('.login-link');

        const handleRegisterClick = () => {
            wrapper.classList.add('active');
        };

        const handleLoginClick = () => {
            wrapper.classList.remove('active');
        };

        registerLink.addEventListener('click', handleRegisterClick);
        loginLink.addEventListener('click', handleLoginClick);

        return () => {
            registerLink.removeEventListener('click', handleRegisterClick);
            loginLink.removeEventListener('click', handleLoginClick);
        };
    }, []);

    return (
        <div className="wrapper">
            <span className="bg-animate"></span>
            <span className="bg-animate1"></span>
            <div className="form-box login">
                <h2 className="animation" style={{ '--i': 0, '--j': 4 }}>Login</h2>
                <form action="#">
                    <div className="input-box animation" style={{ '--i': 1, '--j': 3 }}>
                        <input type="text" required />
                        <label htmlFor="">UserName</label>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box animation" style={{ '--i': 2, '--j': 2 }}>
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                        <i id='password' className='bx bx-lock-alt bx-flip-horizontal bx-tada'></i>
                        {/* <i class='bx bxs-lock-alt bx-tada' ></i> */}
                        {/* <i class='bx bxs-lock-alt bx-tada bx-rotate-90' ></i> */}
                    </div>
                    <button className="btn-login animation" style={{ '--i': 3, '--j': 1 }}>Login</button>
                    <div className="logreg-link animation" style={{ '--i': 4, '--j': 0 }}>
                        <p>Don't Have an account ?<a href="#" className="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div className="info-text login">
                <h2 className="animation" style={{ '--i': 0, '--j': 1 }}>Welcome Back!</h2>
                <p className="animation" style={{ '--i': 1, '--j': 0 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, rem?</p>
            </div>

            <div className="form-box register">
                <h2 className="animation" style={{ '--i': 0, '--j': 5 }}>Sign Up</h2>
                <form action="#">
                    <div className="input-box animation" style={{ '--i': 1, '--j': 4 }}>
                        <input type="text" required />
                        <label htmlFor="">UserName</label>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box animation" style={{ '--i': 2, '--j': 3 }}>
                        <input type="text" required />
                        <label htmlFor="">Email</label>
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box animation" style={{ '--i': 3, '--j': 2 }}>
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                        <i className='bx bx-lock-alt bx-flip-horizontal bx-tada'></i>
                    </div>
                    <button className="btn-login animation" style={{ '--i': 4, '--j': 1 }}>Sign Up</button>
                    <div className="register-link animation" style={{ '--i': 5, '--j': 0 }}>
                        <p>Already Have an account ?<a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>

            <div className="info-text register">
                <h2 className="animation" style={{ '--i': 0, '--j': 1 }}>Welcome Back!</h2>
                <p className="animation" style={{ '--i': 1, '--j': 0 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, rem?</p>
            </div>
        </div>
    );
};

export default Login;
