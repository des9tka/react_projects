import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators";
import {carService} from "../../sevices";
import {useEffect} from "react";


const CarForm = ({setCars, updateCar, setUpdateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode:'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('model', updateCar.model, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year,', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar, setValue])


    const submit = async (car) => {
        if (updateCar) {
            const {data} = await carService.updateById(updateCar.id, car);
            setCars((cars) => {
                const findCar = cars.findIndex(value => value.id = updateCar);
                Object.assign(findCar, data)
                setUpdateCar(null)
                return [...car]
            })
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data])
        }
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
            <button disabled={!isValid}>{updateCar?'Update':'Save'}</button>
        </form>
    )
}

export {
    CarForm
}