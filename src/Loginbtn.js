import React from 'react';
import { Link } from 'react-router-dom';

function LoginBtn() {
    return (
        <div className="loginbtn">
            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
        </div>
    )

}

export default LoginBtn;