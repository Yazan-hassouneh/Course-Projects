import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { userValidation } from '../../Validation/userInfoValidation'
import Input from '../Shared/Input'
import Loading from '../Shared/Lodding'

function Edite() {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const [info, setInfo] = useState({
        name : "",
        email: "",
        password : ""
    })
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError : ""
    })
    function setDataOnChange (e) {
        const {name, value} = e.target
        setInfo({...info, [name] : value})

    }
    const {id} = useParams("id")
    const getData = async () => {
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
        setInfo(data.user)
        if(data.message === "success") {
            setLoader(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const SaveData = async (e) => {
        setLoader(true)
        e.preventDefault()
        if(Object.keys(userValidation(info)).length > 0 ) {
            setErrors(userValidation(info))
        }else {
            await axios.put(`https://crud-users-gold.vercel.app/users/${id}`, info)
            navigate("/components/users/index")
        }
    }
    if(loader) {
        return(
            <Loading></Loading>
        )
    }else {
        return (
            <div className="col py-3">
                <form className='border p-3 border-2 mt-3 ms-3' onSubmit={SaveData}>
                    <Input name={"name"} value={info.name} type={"text"} id={"name"} title="User Name" updateDta={setDataOnChange} error={errors.nameError}></Input>
                    <Input name={"email"} value={info.email} type={"email"} id={"email"} title="User Email" updateDta={setDataOnChange} error={errors.emailError}></Input>
                    <Input name={"password"} value={info.password} type={"password"} id={"password"} title="User Password" updateDta={setDataOnChange} error={errors.passwordError}></Input>
                    <div className="mb-3">
                        <input type='submit' className='btn btn-primary' value='Edit User' />
                    </div>
                </form>
            </div>
        )
    }
}

export default Edite