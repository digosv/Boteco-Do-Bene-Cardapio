import React from "react";
import MenuOption from "./MenuOption";

import heineken from "../assets/cervejas/heineken.png";
import original from "../assets/cervejas/original.avif";
import amstel from "../assets/cervejas/amstel.jpg";
import antartica from "../assets/cervejas/antartica.jpg";
import brahma from "../assets/cervejas/brahma.jpeg";
import corona from "../assets/cervejas/corona.webp";
import duplomalte from "../assets/cervejas/duplomalte.jpg";
import imperio from "../assets/cervejas/imperio.jpg";
import imperiolager from "../assets/cervejas/imperiolager.png";
import spaten from "../assets/cervejas/spaten.webp";
import stella from "../assets/cervejas/stella.png";
import serramalte from "../assets/cervejas/serramalte.webp";
import heinekenlongneck from "../assets/cervejas/heinekenlongneck.png";
//a

const Cervejas = () => {
  return (
    <div className=" ml-3 md:grid-cols-5">
      <MenuOption
        local={heineken}
        nome="Heineken"
        preco="R$ 18,00"
        descricao="Heineken 600ml"
      ></MenuOption>
      <MenuOption
        local={original}
        nome="Original"
        preco="R$ 15,00"
      ></MenuOption>
      <MenuOption local={spaten} nome="Spaten" preco="R$ 15,00"></MenuOption>
      <MenuOption
        local={duplomalte}
        nome="Duplomalte"
        preco="R$ 12,00"
      ></MenuOption>
      <MenuOption local={amstel} nome="Amstel" preco="R$ 12,00"></MenuOption>
      <MenuOption
        local={antartica}
        nome="Antartica"
        preco="R$ 12,00"
      ></MenuOption>
      <MenuOption local={brahma} nome="Brahma" preco="R$ 12,00"></MenuOption>
      <MenuOption local={imperio} nome="Imperio" preco="R$ 12,00"></MenuOption>
      <MenuOption
        local={imperiolager}
        nome="Imperio Lager"
        preco="R$ 12,00"
      ></MenuOption>
      <MenuOption
        local={serramalte}
        nome="Serramalte"
        preco="R$ 16,00"
      ></MenuOption>
      <MenuOption local={spaten} nome="Spaten" preco="R$ 15,00"></MenuOption>
      <MenuOption
        local={stella}
        nome="Stella Artois"
        preco="R$ 15,00"
      ></MenuOption>
      <MenuOption
        local={corona}
        nome="Corona Long Neck"
        preco="R$ 13,00"
      ></MenuOption>
      <MenuOption
        local={heinekenlongneck}
        nome="Heineken Long Neck"
        preco="R$ 13,00"
      ></MenuOption>
      <div className="Model hidden"></div>
    </div>
  );
};

export default Cervejas;
