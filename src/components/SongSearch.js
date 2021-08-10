import React, { useState, useEffect } from 'react';
import { helpHttp } from "../helpers/helpHttp";
import SongForm from './SongForm';
import Loader from "./Loader";
import SongDetails from './SongDetails';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
          if(search === null) return;

    const fetchData = async() => {
         const { artist } = search;
         let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
         
         setLoading(true)

         const resArtist = await helpHttp().get(artistURL); 
         
        setBio(resArtist);
         setLoading(false)
    }
    fetchData();
    }, [search])


    const handleSearch = (data) => {
            setSearch(data)
            
    }

    return (
        <div>
            <h2>ArtistSearch</h2>
            <article className="grid-1-2">            
            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch}/>
            {search && !loading && <SongDetails search={search} bio={bio}/>}
            </article>

        </div>
    )
}

export default SongSearch
