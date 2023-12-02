import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Index from './users/index';
import Create from './users/Create';
import Home from './users/Home';
import Details from './users/Details';
import NotFound from './users/NotFound';
import Edite from './users/Edite';

function SideBar() {
    return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to='/' className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item"><Link to={"/components/users/index"} className='text-white text-decoration-none mb-2'>Users List</Link></li>
                <li className="nav-item"><Link to={"/components/users/Create"} className='text-white text-decoration-none mb-2npm '>Create</Link></li>
            </ul>
            <hr />
        </div>
        </div>
        <div className="col py-3">
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/components/users/index' element={<Index></Index>}></Route>
                <Route path='/components/users/Create' element={<Create></Create>}></Route>
                <Route path='/components/users/Details/:id' element={<Details></Details>}></Route>
                <Route path='/components/users/Edite/:id' element={<Edite></Edite>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    </div>
    </div>

    )
}

export default SideBar