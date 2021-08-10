import React from 'react';
import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon"
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne"
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andromeda"
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fenix"
    }

]

const CrudApp = () => {
    const [baseDatos, setBaseDatos] = useState(initialDB)
    const [dataToEdit, setDataToEdit] = useState(null)
    const createData = (data) => {
        data.id = Date.now();
    setBaseDatos([...baseDatos, data])
    }
    const updateData = (data) => {
        let newData = baseDatos.map(el => el.id === data.id ? data : el);
        setBaseDatos(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estas seguro que deseas eliminar el registro ${id}?`)
        if(isDelete){
        let newData = baseDatos.filter(el => el.id !== id)
        setBaseDatos(newData);
    } else{
        return;
    }
    }

    return (
        <>
            <h1>Crud App</h1>
        <article className="grid-1-2">
            <CrudForm 
            createData={createData} 
            updateData={updateData}
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}/>
            <CrudTable 
            data={baseDatos} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>
            </article>
        </>
    )
}

export default CrudApp;
