'use client';

import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./page.css";

export default function SignIn() {
    return (
        <div className="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create account</h1>
                    <div className="social-icons">
                        <Link href="https://google.com" className="icon">
                        <i className="fa-brands fa-google" style={{color: "#000000"}}></i>                        </Link>
                    </div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign up</button>
                </form>
            </div>

            <div className="form-container slogin">
                <form>
                    <h1>Login</h1>
                    {/* <div className="social-icons">
                        <Link href="https://google.com" className="icon">
                        <i className="fa-brands fa-google" style={{color: "#000000"}}></i>                        </Link>
                    </div> */}
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Login</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your details and start journey with us</p>
                        <button className="hidden" id="login">Login</button>
                    </div>

                    <div className="toggle-panel right">
                        <h1>Welcome!</h1>
                        <p>Enter your details and start journey with us</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}