import css from './Car.module.css'
import {carService} from "../../sevices";

const Car = ({car, setCars}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id)
        setCars(cars => {
            const index = cars.findIndex(cars => cars.index = id);
            cars.splice(index, 1)
            return ([...cars])
        })

    }

    
    return (
        <div className={css.Car}>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={css.but}>
                <button>update</button>
                <button onClick={() => deleteCar()}>delete</button>
            </div>
        </div>
    )
}

export {
    Car
}