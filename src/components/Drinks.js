import React from "react";
import MenuOption from "./MenuOption";

const Drinks = () => {
  return (
    <div className="md:grid-cols-5">
      <MenuOption nome="Caipirinha" preco="R$ 20,00"></MenuOption>
      <MenuOption nome="Frutas" preco="R$ 25,00"></MenuOption>
      <MenuOption nome="Macunaima" preco="R$ 15,00"></MenuOption>
      <MenuOption nome="Negroni" preco="R$ 25,00"></MenuOption>
      <MenuOption nome="Moscow Mule" preco="R$ 25,00"></MenuOption>
      <MenuOption nome="Gin Tonica" preco="R$ 25,00"></MenuOption>
      <MenuOption nome="Nevada" preco="R$ 30,00"></MenuOption>
    </div>
  );
};

export default Drinks;
