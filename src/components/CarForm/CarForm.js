import {useForm} from "react-hook-form";
import {Car} from "../Car/Car";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm();

    const submit = (car) => {
        console.log(car)
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type= 'text' placeholder={'model'} {...register('model')}/>
            <input type= 'number' placeholder={'price'} {...register('price')}/>
            <input type= 'text' placeholder={'year'} {...register('year')}/>
            <button>Save<button/>
        <form/>
    )
}






