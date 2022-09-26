const AlbumsBuilder = ({album}) => {
    return (
        <div className={'albumsWrap'}>
            <div>userId: {album.userId}</div>
            <div>id: {album.id}</div>
            <div>title: {album.title}</div>
        </div>
    )
}

export {
    AlbumsBuilder
}