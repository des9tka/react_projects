import {useState} from "react";
import CStructure from './StructureW';

function AllChar (props) {
    let [char, setChar] = useState([]);

    fetch(props.url)
        .then(response => response.json())
        .then(value => {
            setChar(value.results.splice(0, 6));
        })

    return (<div>
            {char.map(value => <CStructure item={value} key={value.id}/>)}
        </div>
    )
}

export default AllChar;