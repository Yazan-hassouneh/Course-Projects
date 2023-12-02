import './App.css';
import React, { useEffect }  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './User/Layout/Layout';
import DashbordLayout from './DashBord/Layout/Layout';
import Home from './User/Home/Home';
import DashBordHome from './DashBord/Home/Home';
import Categories from './User/Categories/Categories';
import Register from './User/Register/Register';
import Login from './User/Login/LogIn';
import {jwtDecode} from  'jwt-decode'
import { useState } from 'react';

export const UserInfoContext = React.createContext()

function App() {
  const [user, setUser] = useState(null)
  const saveUserData = () => {
    const token = localStorage.getItem("userToken")
    const decode = jwtDecode(token)
    setUser(decode)
  }
  useEffect(() => {
    if(localStorage.getItem("userToken")) {
      saveUserData()
    }
  }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children : [
        {
          path: "/",
          element : <Home></Home>
        },
        {
          path: "categories",
          element : <Categories></Categories>
        },
        {
          path: "register",
          element : <Register></Register>
        },
        {
          path : "Login",
          element:  <Login saveUserData={saveUserData}></Login>
        },
        {
          path : "*",
          element : <></>
        }
      ],
    },
    {
      path: "/Dashbord",
      element : <DashbordLayout></DashbordLayout>,
      children : [
        {
          path: "home",
          element : <DashBordHome></DashBordHome>
        }
      ],
    }
  ]);
  return (
    <>
      <UserInfoContext.Provider value={{user, setUser}} >
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
      </UserInfoContext.Provider>
    </>
  );
}

export default App;
