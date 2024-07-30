import React from "react";
import MenuOption from "./MenuOption";

import pastelzinho from "../assets/porcaoquente/pastelzinho.jpeg";
import batatadobene from "../assets/porcaoquente/batatadobene.jpeg";
import iscadetilapia from "../assets/porcaoquente/iscadetilapia.jpeg";

const PorcoesQuentes = () => {
  return (
    <div className=" ml-3 md:grid-cols-5">
      <MenuOption
        local={pastelzinho}
        nome="Pastelzinho"
        preco="R$ 46,00"
      ></MenuOption>
      <MenuOption
        local={batatadobene}
        nome="Batata Do Bene"
        preco="R$ 30,00"
      ></MenuOption>
      <MenuOption nome="Fritas" preco="R$ 22,00"></MenuOption>
      <MenuOption nome="Isca de Frango" preco="R$ 22,00"></MenuOption>
      <MenuOption
        nome="Isca de Tilapia"
        preco="R$ 22,00"
        local={iscadetilapia}
      ></MenuOption>
      <MenuOption nome="Provolone" preco="R$ 52,00"></MenuOption>
      <MenuOption nome="Camarao Bigodinho" preco="R$ 72,00"></MenuOption>
    </div>
  );
};

export default PorcoesQuentes;
