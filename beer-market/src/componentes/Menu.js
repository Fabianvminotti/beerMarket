import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Menu = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-warning ' >
            <div className='container-fluid justify-content-around'>
                <a className='navbar-brand'>
                    <img src="https://i.ibb.co/TgcK0SZ/beerMark.png" height='35px' />
                </a>
                <form class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscá tu birra" aria-label="Search"/>
                    <button className="btn btn-outline-dark ml-2" type="submit">Buscar</button>
                </form>
                <button className='btn btn-danger'><FontAwesomeIcon icon={faUser} /></button>
            </div>
            <div className='row'>

            </div>
        </nav>
        
    )
}

export default Menu