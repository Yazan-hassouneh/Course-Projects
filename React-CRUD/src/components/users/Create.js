import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userValidation } from '../../Validation/userInfoValidation'
import Input from '../Shared/Input'
import { InputData } from '../../Data/InputData'
import Loading from '../Shared/Lodding'

function Create() {
    const navigate = useNavigate()
    const [InputInfo, setInputInfo] = useState([])
    const [loder, setLoder] = useState(false)
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
    useEffect(() => {
        setInputInfo(InputData(errors, info))
    }, [errors, info])
    const sendData = async (e) => {
        e.preventDefault()
        setLoder(true)
        if(Object.keys(userValidation(info)).length > 0) {
            setErrors(userValidation(info))
        }else {
            try{
                const {data} = await axios.post("https://crud-users-gold.vercel.app/users", info)
                navigate("/components/users/index")
                if(data.message === "success") {
                    setLoder(false)
                }
            }catch(error) {
                setErrors({...errors, nameError: error.response.data.message})
                setLoder(false)
            }
        }
    }
    if(loder) {
        return (
            <Loading></Loading>
        )
    }else {
        return (
            <div className="col py-3">
                <form className='border p-3 border-2 mt-3 ms-3' onSubmit={sendData}>
                    {
                        InputInfo.map((item) => 
                            <Input key={item.id} value={item.value} name={item.name} type={item.type} id={item.id} title={item.title} error={item.error} updateDta={setDataOnChange} ></Input>
                        )
                    }
                    <div className="mb-3">
                        <input type='submit' className='btn btn-primary' value='Add User'/>
                    </div>
                </form>
            </div>
        )
    }

}

export default Create