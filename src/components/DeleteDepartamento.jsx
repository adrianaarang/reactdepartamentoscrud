import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import loading from './../assets/images/loading.gif';

export default class DeleteDepartamento extends Component {
    service = new ServiceDepartamentos();

    state = {
        departamento: null,
        status: false
    }

    //AL RECIBIR EL ID (PROPS) BUSCAMOS EL DEPARTAMENTO PARA MOSTRARLO
    componentDidMount = () => {
        this.service.findDepartamento(this.props.iddepartamento)
            .then((result) => {
                this.setState({
                    departamento: result
                })
            })
    }

    //CANCELAR: NO HACEMOS NADA, SOLO VOLVEMOS A HOME
    cancelar = () => {
        this.setState({ status: true });
    }

    //ELIMINAR: BORRAMOS Y DESPUES VOLVEMOS A HOME
    eliminar = () => {
        this.service.deleteDepartamento(this.props.iddepartamento)
            .then(() => {
                this.setState({ status: true });
            })
    }

    render() {
        //AL NAVEGAR A "/" HOME SE VUELVE A MONTAR Y
        //SU componentDidMount RECARGA LOS DEPARTAMENTOS
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        }
        if (this.state.departamento == null) {
            return (<img src={loading} alt="loading..." />)
        }
        return (
            <div style={{ margin: "auto", width: "50%" }}>
                <h1>Eliminar departamento</h1>
                <p>¿Seguro que quieres eliminar este departamento?</p>
                <ul className="list-group mb-3">
                    <li className="list-group-item">
                        <b>Número:</b> {this.state.departamento.numero}
                    </li>
                    <li className="list-group-item">
                        <b>Nombre:</b> {this.state.departamento.nombre}
                    </li>
                    <li className="list-group-item">
                        <b>Localidad:</b> {this.state.departamento.localidad}
                    </li>
                </ul>
                <button className="btn btn-danger me-2" onClick={this.eliminar}>
                    Eliminar
                </button>
                <button className="btn btn-secondary" onClick={this.cancelar}>
                    Cancelar
                </button>
            </div>
        )
    }
}
