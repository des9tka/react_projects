import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {carService} from "../../sevices";

const Cars = () => {
    let [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    },[])

    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            {cars.map(car => <Car car={car} key={car.id} setCars={setCars} setUpdateCar={setUpdateCar}/>)}
        </div>
    )
}

export {
    Cars
}