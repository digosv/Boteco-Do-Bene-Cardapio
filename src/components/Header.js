import React from 'react';
import iconbgr from '../assets/iconbgr.png';

const Header = () => {
    return (
        <div className="bg-red-500 p-8 shadow-lg flex items-center w-full fixed top-0 z-50"> {/* Adicionei fixed, top-0 e z-50 */}
            <button className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <a href='/'>
                    <img className="w-16 h-auto" src={iconbgr} alt="Logo" />
                </a>
            </button>
            <div>
                <h1 className="text-3xl text-white font-thin">
                    Boteco Do Bene
                </h1>
                <h2 className="text-xl text-white font-medium">
                    Cardápio
                </h2>
            </div>
        </div>
    );
}

export default Header;
