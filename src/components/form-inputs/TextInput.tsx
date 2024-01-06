import React from 'react'
import { useForm } from "react-hook-form"

const TextInput = ({ label, name, register, isRequired = true, type = 'text', className = 'sm:col-span-2', errors }: { label: string, name: string, register: any, isRequired?: boolean, type?: string, className?: string, errors: any },

) => {

    const placeholder = `Type the ${label}`

    return (
        <div className={className}>
            <label htmlFor={name} className="block leading-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}</label>
            <input {...register(name, { required: isRequired })} type={type} name={name} id={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
     dark:focus:border-primary-500" autoComplete='given-name' placeholder={placeholder} />
            {errors[`${name}`] && <span className='text-sm text-red-600'>{label} is required</span>}
        </div>
    )
}

export default TextInput