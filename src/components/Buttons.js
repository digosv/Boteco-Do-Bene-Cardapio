import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="rounded-3xl text-1xl bg-white text-black grid grid-flow-col auto-cols-max w-5/7 mt-5 mr-2 ml-2 overflow-x-auto overscroll-contain md:text-1xl md:items-center md:justify-center shadow-lg">
            <Link to='/menuprincipal' className="text-1xl p-1 m-3">Menu Principal</Link>
            <Link to='/bolinhos' className="text-1xl p-1 m-3">Bolinhos</Link>
            <Link to='/porcoesquentes' className="text-1xl p-1 m-3">Porções Quentes</Link>
            <Link to='/porcoesfrias' className="text-1xl p-1 m-3">Porções Frias</Link>
            <Link to='/drinks' className="text-1xl p-1 m-3">Drinks</Link>
            <Link to='/cervejas' className="text-1xl p-1 m-3">Cervejas</Link>
            <Link to='/bebidasquentes' className="text-1xl p-1 m-3">Bebidas Quentes</Link>
            <Link to='/semalcool' className="text-1xl p-1 m-3">Sem Alcool</Link>
        </div>
    );
}

export default Buttons;
