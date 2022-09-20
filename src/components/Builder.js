export default function Builder (props) {
    let {item : launch} = props;
    return (
        <div className={'launch'}>
            <h3 className={'name'}>Mission name : {launch.mission_name}</h3>
            <p className={'year'}>Launch year - {launch.launch_year}</p>
            <img src= {launch.links.mission_patch_small} alt="img"/>
        </div>
    )
}