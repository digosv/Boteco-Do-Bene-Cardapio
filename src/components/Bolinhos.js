import React from "react";
import MenuOption from "./MenuOption";
import croquetacupim from "../assets/bolinhos/cupim3.jpeg";
import shimeji from "../assets/bolinhos/shimeji2.jpeg";

const Bolinhos = () => {
  return (
    <div className="ml-3 md:grid-cols-5">
      <MenuOption
        local={croquetacupim}
        nome="Croqueta de Cupim"
        preco="R$ 13,00"
      ></MenuOption>
      <MenuOption
        local={shimeji}
        nome="Croqueta de Shimeji"
        preco="R$ 13,00"
      ></MenuOption>
      <MenuOption nome="Croqueta de Mortadela" preco="R$ 13,00"></MenuOption>
      <MenuOption nome="Linguiça Com Queijo" preco="R$ 13,00"></MenuOption>
      <MenuOption nome="Bolovo" preco="R$ 15,00"></MenuOption>
      <MenuOption nome="Disco Voador" preco="R$ 13,00"></MenuOption>
      <MenuOption nome="Tapa Na Cara" preco="R$ 9,00"></MenuOption>
      <MenuOption nome="Tapa Com Catupiry" preco="R$ 11,00"></MenuOption>
      <MenuOption nome="Coxinha de Costela" preco="R$ 9,00"></MenuOption>
      <MenuOption nome="Coxinha de Queijo" preco="R$ 9,00"></MenuOption>
      <MenuOption nome="Aimpim com Carne Seca" preco="R$ 9,00"></MenuOption>
      <MenuOption nome="Bacalhau" preco="R$ 9,00"></MenuOption>
      <MenuOption nome="Kibe" preco="R$ 9,00"></MenuOption>
    </div>
  );
};

export default Bolinhos;
