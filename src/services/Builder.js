

export default function Builder (props) {
    let {item: user} = props;
    let {data: data} = props;
    return(
        <div>
            <h5>{user.id} - {user.name}</h5>
            <button onClick={() => {
                data(user.username, user.email, user.address.city)
            }}>more info</button>
        </div>
    )
}