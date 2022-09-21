import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {carService} from "../../sevices";

const Cars = () => {
    let [cars, setCars] = useState([]);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    },[])
    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            {cars.map(car => <Car car={car} key={car.id} setCars={setCars}/>)}
        </div>
    )
}

export {
    Cars
}