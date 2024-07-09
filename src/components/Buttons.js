import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Buttons = () => {
    const location = useLocation();

    return (
        <div className=" rounded-3xl text-1xl bg-white text-black grid grid-flow-col auto-cols-max w-5/7 mt-5 mr-2 ml-2 overflow-x-auto overscroll-contain md:text-1xl md:items-center md:justify-center shadow-lg">
            <Link to='/menuprincipal' className={` text-1xl p-1 m-3 ${location.pathname === '/menuprincipal' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Menu Principal</Link>
            <Link to='/bolinhos' className={` text-1xl p-1 m-3 ${location.pathname === '/bolinhos' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Bolinhos</Link>
            <Link to='/porcoesquentes' className={` text-1xl p-1 m-3 ${location.pathname === '/porcoesquentes' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Porções Quentes</Link>
            <Link to='/porcoesfrias' className={` text-1xl p-1 m-3 ${location.pathname === '/porcoesfrias' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Porções Frias</Link>
            <Link to='/drinks' className={` text-1xl p-1 m-3 ${location.pathname === '/drinks' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Drinks</Link>
            <Link to='/cervejas' className={` text-1xl p-1 m-3 ${location.pathname === '/cervejas' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Cervejas</Link>
            <Link to='/bebidasquentes' className={` text-1xl p-1 m-3 ${location.pathname === '/bebidasquentes' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Bebidas Quentes</Link>
            <Link to='/semalcool' className={` text-1xl p-1 m-3 ${location.pathname === '/semalcool' ? 'bg-red-500 rounded-3xl text-white' : ''}`}>Sem Alcool</Link>
        </div>
    );
}

export default Buttons;
