export default function DataShow (props) {
    let {item: user} = props;
    let userInfo = JSON.stringify(user)


    return (
        <div>
            {userInfo}
        </div>
    )
}