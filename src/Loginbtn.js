import React from 'react';
import { Link } from 'react-router-dom';

function LoginBtn() {
    return (
        <div className="loginbtn">
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    )

}

export default LoginBtn;