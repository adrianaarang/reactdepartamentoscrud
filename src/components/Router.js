import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import CreateDepartamentoOtro from './CreateDepartamentoOtro'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteDepartamento from './DeleteDepartamento'
import HospitalesMultiples from './HospitalesMultiples'

function UpdateDepartamentoElement() {
    let { id, nombre, localidad } = useParams();
    return <UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>
}

function DeleteDepartamentoElement() {
    let { iddepartamento } = useParams();
    return <DeleteDepartamento iddepartamento={iddepartamento}/>
}

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/create" element={<CreateDepartamento/>}/>
                    <Route path="/createotro" element={<CreateDepartamentoOtro/>}/>
                    <Route path="/update/:id/:nombre/:localidad"
                        element={<UpdateDepartamentoElement/>}/>
                    <Route path="/delete/:iddepartamento"
                        element={<DeleteDepartamentoElement/>}/>
                    <Route path="/hospitales" element={<HospitalesMultiples/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}