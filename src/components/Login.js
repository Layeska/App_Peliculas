import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const click = () => {
        navigate("/home");
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={click}>Navegate!</button>
        </div>
    );
}

export default Login