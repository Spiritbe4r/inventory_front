"use client"

import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/form-inputs/SubmitButton';
import TextAreaInput from '@/components/form-inputs/TextAreaInput';
import TextInput from '@/components/form-inputs/TextInput';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Units from '../page';

type Inputs = {
    title: string
    description: string
}

const NewUnits = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        console.log(data)
        setLoading(true);
        try {
            const baseUrl = 'http://localhost:3000';

            const response = await fetch(`${baseUrl}/api/units`, {
                method: 'POST', headers: {
                    'contentType': 'application/json'
                }, body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log(response);
                reset();
                setLoading(false)
            }


        } catch (error) {
            setLoading(false);
        }

    }
    return (
        <div>

            {/* header */}
            <FormHeader title='New Unit' href='/dashboard/inventory/' />
            {/* htmlForm */}

            <div className='w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700
         dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto my-3'>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="grid gap 4 sm:grid-cols-2 sm:gap-6">
                        <TextInput label={'Unit Title'} register={register} name={'title'} errors={errors} />

                        <TextAreaInput label={'Unit Abbrevation'} name={'abbrevation'} register={register} errors={errors} />
                    </div>

                    <SubmitButton isLoading={loading} title={'Unit'} />
                </form>
            </div>

        </div>
    )
}

export default NewUnits