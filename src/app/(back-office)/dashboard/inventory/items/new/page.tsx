"use client"

import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/form-inputs/SubmitButton';
import TextAreaInput from '@/components/form-inputs/TextAreaInput';
import TextInput from '@/components/form-inputs/TextInput';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Units from '../page';
import SelectInput from '@/components/form-inputs/SelectInput';

type Inputs = {
    title: string
    description: string
}

const NewUnits = () => {
    const [loading, setLoading] = useState(false);

    const options = [{
        label: 'Electronics',
        value: 'dggdfgsdfgdfgsd34535243423'
    }, {
        label: 'Clothings',
        value: 'dggdfgsdfgdfgsd3457843423'
    }]

    const units = [{
        label: 'Kg',
        value: 'dggdfgsdfgdfgsd34535243423'
    }, {
        label: 'Pcs',
        value: 'cm'
    }]

    const brands = [{
        label: 'La Roca ',
        value: 'dggdfgsdfgdfgsd343'
    }, {
        label: 'La momia',
        value: 'cm'
    }]

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

            const response = await fetch(`${baseUrl}/api/items`, {
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
                        <TextInput label={'Unit Title'} register={register} name={'title'} errors={errors} className='w-full' />

                        <SelectInput label={'Select the Item Category'} name={'categoryId'} register={register} options={options} className='w-full' />

                        <TextInput label={'Item SKU'} name={'sku'} register={register} errors={errors} className='w-full' />

                        <TextInput label={'Item Barcode'} name={'barcode'} isRequired={false} register={register} errors={errors} className='w-full' />
                        <TextInput label={'Item Quantity'} name={'quantity'} isRequired={false} register={register} errors={errors} className='w-full' />

                        <SelectInput label={'Select the Item Unit'} name={'unitId'} register={register} options={options} className='w-full' />
                        <SelectInput label={'Select the Item Brand'} name={'brandId'} register={register} options={brands} className='w-full' />

                        <TextInput label={'Buying Price'} name={'buying'} isRequired={false} register={register} errors={errors} className='w-full' />
                        <TextInput label={'Price'} name={'price'} isRequired={false} register={register} errors={errors} className='w-full' />

                        <TextInput label={'Re-Order Point'} name={'reOrderPoint'} type='number' isRequired={false} register={register}
                            errors={errors} className='w-full' />


                    </div>

                    <SubmitButton isLoading={loading} title={'Barcode'} />
                </form>
            </div>

        </div>
    )
}

export default NewUnits