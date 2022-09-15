function Simpsons (props) {
    return (
        <div className={'SimpsonWrap'}>
            <h3>{props.name} - {props.age} years old</h3>
            <img src={props.img} alt="Simpson"/>
        </div>
    )
}

export default Simpsons;