import React from 'react'

function Input({ id, value, type, label, name, register, required, accept, defaultValue }) {
    return (
        <>
            <label htmlFor={id} className="text-sm font-medium text-gray-900 mb-1">{label}</label>
            <input type={type} value={value} defaultValue={defaultValue} id={id} accept={accept} className="border p-2 rounded-lg mb-3" {...register(name, { required })} />

        </>
    )
}

export default Input
