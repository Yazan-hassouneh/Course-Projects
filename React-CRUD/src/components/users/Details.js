import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Tr from '../Shared/tableRow'
import {Data}  from '../../Data/usaerData'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Lodding'

function Details() {
    const [userData, setdata] = useState([])
    const [loader, setLoader] = useState(true)
    const {id} = useParams("id")
    const getData = async () => {
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
        if(data.message === "success") {
            setLoader(false)
        }
        setdata(Data(data.user))
    }
    useEffect(() => {
        getData()
    }, [])

    if(loader) {
        return (
            <Loading></Loading>
        )
    }else {
        return (
            <Fragment>
                <h1 className='mb-3'>User Info</h1>
                <table className='table table-bordered table-striped'>
                    <tbody>
                        {
                            userData.map((item, i) => <Tr key={i} name={item.name} value={item.value}></Tr>)
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }

}

export default Details