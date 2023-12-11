import { useContext, useEffect, useState } from 'react'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
  } from "react-router-dom";
  import Navbar from './Components/navbar/navbar.jsx';
  import LeftBar from './Components/leftBar/leftBar.jsx';
  import Rightbar from './Components/rightBar/rightBar.jsx';
  import Home from './pages/home/home.jsx';
  import Profile from './pages/profile/profile.jsx';
  import './style.scss';
import { DarkModeContext } from './context/context.jsx';
import { AuthContext } from './context/authContext.jsx';

function App() {

    const {currentUser} = useContext(AuthContext);

    const {darkMode} = useContext(DarkModeContext);
    
    const Layout = () => {
        return(
            <div className= {`theme-${darkMode ? "dark" : "light"}`}>
                <Navbar />
                <div style={{display: "flex"}}>
                    <LeftBar />
                    <div style={{flex: 6}}>
                        <Outlet />
                    </div>
                    <Rightbar />
                </div>
            </div>
        );
    };

    const ProtectedRoute = ({children}) => {
        if(!currentUser) {
            return <Navigate to= "/login" />
        }
        return children;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element:(
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/profile/:id",
                    element: <Profile />
                }

            ]

        },
        {
          path: "/login",
          element: <Login />,
        },
        {
            path: "/register",
            element: <Register />
        }
      ]);

    return(
        <div>
            <RouterProvider router={router} />
        </div>
    );

}

export default App;
