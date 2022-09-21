import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators/CarValidator";
import {carService} from "../../sevices";
import {useEffect} from "react";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode:'all',
        resolver: joiResolver(carValidator)
    });


    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            {errors.model&&<span>{errors.model.message}</span>}
            <input type='number' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type='number' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    )
}

export {
    CarForm
}