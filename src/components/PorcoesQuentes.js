import React from "react";
import MenuOption from "./MenuOption";

import pastelzinho from '../assets/porcaoquente/pastelzinho.jpeg';
import batatadobene from '../assets/porcaoquente/batatadobene.jpeg';

const PorcoesQuentes = () => {
    return (
        <div className="grid grid-cols-2 ml-4 md:grid-cols-5">
            <MenuOption local={pastelzinho} nome="Pastelzinho" preco="R$ 46,00" ></MenuOption>
            <MenuOption local={batatadobene} nome="Batata Do Bene" preco="R$ 30,00" ></MenuOption>
        </div>
    );
}

export default PorcoesQuentes;