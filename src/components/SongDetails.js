import SongArtist from "./SongArtist"
import Message from "./Message";

const SongDetails = ({ search, bio }) => {
if(!bio) return null;

    return (
        <>
            {bio.artists  ? <SongArtist 
            artist={bio.artists[0]}
            /> : <Message 
            msg={`Error: No existe el artista <em>'${search.artist}'</em>`}
            bgColor="#dc3545"/>}
        </>
    )
}

export default SongDetails
