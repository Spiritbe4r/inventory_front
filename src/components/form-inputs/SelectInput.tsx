import React from 'react'

const SelectInput = ({ label, name, register, type = 'text', className = 'sm:col-span-2', options }: { label: string, name: string, register: any, isRequired?: boolean, type?: string, className?: string, options: any },

) => {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <select
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {options.map((option: any, i:number) => {
                        return (
                            <option key={i} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

export default SelectInput




