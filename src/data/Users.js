import {useEffect, useState} from "react";
import Builder from "../services/Builder";
import DataShow from "../services/DataShow";


function GetUsers () {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState();

    const showData = (userName, email, address) => {
        setUser([userName, email, address])
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, [])

    return (
        <div>
            <hr/>
                <DataShow item={user}/>
            <hr/>
            {users.map((value, index) => <Builder item={value} key={index} data={showData}/>)}
        </div>
    )
}
export default GetUsers;


