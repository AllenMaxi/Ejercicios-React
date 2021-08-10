/*import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectsAnidados = () => {
     const [provincia, setProvincia] = useState("");
     const [towns, setTowns] = useState("");
     const [suburb, setSuburb] = useState("");
   
     const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>Mexico</h3>
            <SelectList 
            title="estado"
            url= {`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
            handleChange={(e) => {setProvincia(e.target.value)}}/>
           {provincia && <SelectList 
            title="municipios" 
            url= {`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${provincia}?token=${TOKEN}`}
            handleChange={(e) => {setTowns(e.target.value)}}/> }
            {towns && <SelectList 
            title="colonia" 
            url= {`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${towns}?token=${TOKEN}`}
            handleChange={(e) => {setSuburb(e.target.value)}}/>}
            <pre>
                <code>
                    {provincia} - {towns} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados; */
