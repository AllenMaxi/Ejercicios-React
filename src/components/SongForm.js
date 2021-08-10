import React, { useState } from 'react'


const initialForm = {
    artist: "",
    song: "",
}

const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialForm);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!form.artist){
       alert("datos incompletos");
       return;
        } 
            handleSearch(form);
            setForm(initialForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="artist" 
                placeholder="Nombre del cantante"
                onChange={handleChange}
                value={form.artist}/>
                <input type="submit" value="enviar"/>
            </form>
        </div>
    )
}

export default SongForm
