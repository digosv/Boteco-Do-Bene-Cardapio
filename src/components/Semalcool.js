import React from "react";
import MenuOption from "./MenuOption";
import cocalata from "../assets/semalcool/cocalata.jpeg";
import cocazero from "../assets/semalcool/cocazero.jpeg";
import cocaks from "../assets/semalcool/cocaks.jpeg";
import turbainaks from "../assets/semalcool/turbaina.jpeg";
import soda from "../assets/semalcool/soda.jpeg";
import sprite from "../assets/semalcool/sprite.jpeg";
import fantalaranja from "../assets/semalcool/fantalaranja.jpeg";
import fantauva from "../assets/semalcool/fantauva.jpeg";
import tonica from "../assets/semalcool/tonica.jpeg";
import tonicazero from "../assets/semalcool/tonicazero.jpeg";
import h20 from "../assets/semalcool/h20.jpeg";
import agua from "../assets/semalcool/agua.jpeg";
import aguacomgas from "../assets/semalcool/aguacomgas.jpeg";

const SemAlcool = () => {
  return (
    <div className="grid grid-cols-2  ml-4 md:grid-cols-5">
      <MenuOption
        local={cocalata}
        nome="Coca Cola Lata"
        preco="R$ 7,00"
      ></MenuOption>
      <MenuOption
        local={cocazero}
        nome="Coca Cola Zero"
        preco="R$ 7,00"
      ></MenuOption>
      <MenuOption
        local={cocaks}
        nome="Coca Cola KS"
        preco="R$ 6,00"
      ></MenuOption>
      <MenuOption
        local={turbainaks}
        nome="Itubaína KS"
        preco="R$ 6,00"
      ></MenuOption>
      <MenuOption local={soda} nome="Soda" preco="R$ 7,00"></MenuOption>
      <MenuOption local={sprite} nome="Sprite" preco="R$ 7,00"></MenuOption>
      <MenuOption
        local={fantalaranja}
        nome="Fanta Laranja"
        preco="R$ 7,00"
      ></MenuOption>
      <MenuOption
        local={fantauva}
        nome="Fanta Uva"
        preco="R$ 7,00"
      ></MenuOption>
      <MenuOption local={tonica} nome="Tonica" preco="R$ 7,00"></MenuOption>
      <MenuOption
        local={tonicazero}
        nome="Tonica Zero"
        preco="R$ 7,00"
      ></MenuOption>
      <MenuOption local={h20} nome="H20" preco="R$ 8,00"></MenuOption>
      <MenuOption local={agua} nome="Agua" preco="R$ 4,00"></MenuOption>
      <MenuOption
        local={aguacomgas}
        nome="Agua Com Gas"
        preco="R$ 5,00"
      ></MenuOption>
    </div>
  );
};

export default SemAlcool;
