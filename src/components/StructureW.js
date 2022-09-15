function CStructure (props) {
    let {item: char} = props;

    return (
        <div className={'RaMDiv'}>
            <h3>{char.id} --- {char.name}</h3>
            <p>Status: {char.status} <br/>
                species: {char.species} <br/>
            </p>

            <img src={char.image} alt="img"/>

        </div>
    )
}

export default CStructure;