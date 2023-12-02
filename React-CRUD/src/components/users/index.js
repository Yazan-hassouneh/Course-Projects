import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Shared/Lodding'

function Index() {
    const [useres, setUseres] = useState([])
    const [loader, setLoader] = useState(false)
    const getData = async () => {
        const request = await fetch("https://crud-users-gold.vercel.app/users")
        const data = await request.json()
        if(request.status === 200) {
            setLoader(true)
        }
        setUseres(data.users)
    }
    useEffect(() => {
        getData()
    }, [])
    const DeleteItem = async (id) => {
        setLoader(false)
        await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`)
        getData()
    }
    if(!loader) {
        return <Loading></Loading>
    }else {
        return (
            <Fragment>
                <div className='my-3 py-2'>
                    <h1>Users Info</h1>
                </div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            useres.map((item, i) => 
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td className='d-flex justify-content-around align-items-center'>
                                        <i onClick={() => DeleteItem(item._id)} className="bi bi-trash3 text-danger fs-4"></i>
                                        <Link to={`/components/users/Details/${item._id}`} ><i className="text-success fs-4 bi bi-eye-fill"></i></Link>
                                        <Link to={`/components/users/Edite/${item._id}`} ><i className="bi bi-pencil-square fs-4"></i></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Index