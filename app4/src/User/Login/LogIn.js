import React from 'react'
import Input from '../../Shared/Input'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({saveUserData}) {
    const navigate = useNavigate()
    const userValidationSchema = yup.object({
        email : yup.string().required("Email Is Required").email(),
        password : yup.string().required().min(6, "Must Be At Least 6 Character")
    })
    const onSubmit = async userInfo => {
        const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signin', userInfo)

        if(data.message === "success") {
            localStorage.setItem("userToken", data.token)
            saveUserData();
            navigate("/")
        }       
    }
    const formik = useFormik({
        initialValues : {
            email : "",
            password : "",
        },
        onSubmit,
        validationSchema : userValidationSchema
    })
    const data = [
        {
            id : 'userEmail',
            name : "email",
            type: "email",
            title : "User Email",
            value : formik.values.email
        },
        {
            id : 'userPassword',
            name : "password",
            type: "password",
            title : "User password",
            value : formik.values.password
        },
    ]
    const RenderInputs = data.map((item, i) => 
            <Input 
                key={i}
                id={item.id} 
                title={item.title} 
                name={item.name} 
                type={item.type} 
                value={item.value}
                errors={formik.errors}
                onChange={item.onChange || formik.handleChange}
                onBlur={formik.handleBlur}
                ontouch={formik.touched}
            ></Input>
            )
    return (
        <div className='container py-3'>
            <h1 className='text-center my-3'>Login Page</h1>
            <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                {
                    RenderInputs
                }
                <button type='submit' className='btn btn-primary' disabled={!formik.isValid}>Send</button>
            </form>
        </div>
    )
}

export default Login