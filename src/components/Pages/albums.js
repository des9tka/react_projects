import {useEffect, useState} from "react";

import {albumsService} from "../../services/components.services";
import {AlbumsBuilder} from "../Builders/AlbumsBuilder";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums(value.data))
    }, [])

    return (
        <div>
            <br/>
            ALBUMS
            <br/>
            <br/>
            {albums.map(value => <AlbumsBuilder album={value} key={value.id}/>)}
        </div>
    )
}

export {
    Albums
}