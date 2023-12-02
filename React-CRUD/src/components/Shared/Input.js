import React from 'react'
import Error from './error'

function Input({name, type, id, title, updateDta, error, value}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label w-100 text-start">{title}</label>
            <input type={type} value={value} name={name} className="form-control border-dark-subtle" id={id} onChange={updateDta}/>
            <Error error={error}></Error>
        </div>
    )
}

export default Input

