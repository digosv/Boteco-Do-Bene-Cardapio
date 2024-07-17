import React from "react";
import MenuOption from "./MenuOption";

import polvovinagrete from "../assets/porcaofria/polvoavinagrete.jpeg";

const PorcoesFrias = () => {
  return (
    <div className="grid grid-cols-2 ml-4 md:grid-cols-5">
      <MenuOption
        nome="Polvo a Vinagrete"
        preco="R$ ?,00"
        local={polvovinagrete}
      ></MenuOption>
      <MenuOption nome="Ovo de Codorna" preco="R$ ?,00"></MenuOption>
      <MenuOption nome="Azeitona" preco="R$ ?,00"></MenuOption>
      <MenuOption nome="Batata de Festa" preco="R$ ?,00"></MenuOption>.
    </div>
  );
};

export default PorcoesFrias;
