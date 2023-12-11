import { useContext } from "react";
import "./login.scss";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

const login = () => {
    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>SnapSphere</h1>
                    <p>Connect and Share, Your Way.</p>
                    <span>Dont you have an account?</span>
                    <Link to= "/register">
                    Register here.
                    </Link>   
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default login;