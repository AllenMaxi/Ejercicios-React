import React from 'react';
import { useState, useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';


const CrudApi = () => {
    const [baseDatos, setBaseDatos] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoadig] = useState(false);

   let api = helpHttp();
   let url = "http://localhost:5000/santos";

   useEffect(() => {
       setLoadig(true);
       helpHttp().get(url)
    .then(res => {
     if(!res.err) {
         setBaseDatos(res);
         setError(null);
     } else{
         setBaseDatos(null);
         setError(res)
     }

     setLoadig(false);
    })
   }, [url])

    const createData = (data) => {
        data.id = Date.now();
        let options = {body:data, 
                       headers:{"content-type":"application/json"}}

        api.post(url, options)
        .then(res => {console.log(res);
            if(!res.err) {
                setBaseDatos([...baseDatos, res])
            } else{
                setError(res);
            }
        })
    }
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        let options = {body:data, 
                       headers:{"content-type":"application/json"}}

        api.put(endpoint, options)
        .then(res => {console.log(res);
            if(!res.err) {
                let newData = baseDatos.map(el => el.id === data.id ? data : el);
                setBaseDatos(newData)
            } else{
                setError(res);
            }
        })
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estas seguro que deseas eliminar el registro ${id}?`)
        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {headers:{"content-type":"application/json"}}
    
            api.del(endpoint, options)
            .then(res => {console.log(res);
                if(!res.err) {
                    let newData = baseDatos.filter(el => el.id !== id);
                    setBaseDatos(newData)
                } else{
                    setError(res);
                }
            })
        }    
    }

    return (
        <>
            <h1>Crud Api</h1>
            <HashRouter basename="santos">
                <header>
                    <h2>Crud API</h2>
                    <nav>
                        <NavLink to="/" activeClassName="active"> Santos </NavLink>
                        <NavLink to="/agregar" activeClassName="active"> Agregar </NavLink>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/">
                    {loading && <Loader/>}
                    {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
                    {baseDatos && <CrudTable 
                     data={baseDatos} 
                     setDataToEdit={setDataToEdit}
                     deleteData={deleteData}/>}
                    </Route>
                    <Route exact path="/agregar"> 
                    <CrudForm 
                      createData={createData} 
                      updateData={updateData}
                      dataToEdit={dataToEdit} 
                      setDataToEdit={setDataToEdit}/>
                    </Route>
                    <Route exact path="/editar/:id">
                    <CrudForm 
                       createData={createData} 
                       updateData={updateData}
                       dataToEdit={dataToEdit} 
                       setDataToEdit={setDataToEdit}/>
                    </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

export default CrudApi;
