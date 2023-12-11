import "./register.scss";
import {Link} from 'react-router-dom';

const register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>SnapSphere</h1>
                    <p>Get ready to Snap, Share, and Discover with your friends, family and people worlwide.</p>
                    <span>Do you have an account?</span>
                    <Link to= "/login">
                    <button>Login</button>
                    </Link>    
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                    <input type="name" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder=" Confirm password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default register;