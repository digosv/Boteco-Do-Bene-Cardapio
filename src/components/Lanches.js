import React from "react";
import MenuOption from "./MenuOption";

const Lanches = () => {
  return (
    <div className=" ml-3 md:grid-cols-5">
      <MenuOption nome="Carne Louca" preco="R$ 25,00"></MenuOption>
      <MenuOption nome="Pernil" preco="R$ 25,00"></MenuOption>
    </div>
  );
};

export default Lanches;
