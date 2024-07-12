import React, { useState } from "react";
import { motion } from "framer-motion";
// a
function MenuOption(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <div>
        <div class=" p-4 w-36 bg-white border-2 rounded-3xl shadow-md my-6 ml-2">
          <img
            onClick={openModal}
            class="w-32 items-center rounded-3xl"
            src={props.local}
            alt=""
          ></img>
          <div class="p-4">
            <h3 class="font-bold">{props.nome}</h3>
            <h5>{props.preco}</h5>
          </div>
        </div>
        <div className="model">
          <img scr={props.local} alt=""></img>
        </div>
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-gray-800 rounded-lg overflow-hidden mx-6 max-w-md">
              <div className="relative">
                <button
                  whileHover={{ backgroundColor: "white" }}
                  className="absolute top-0 right-0 m-2 text-white bg-red-500 rounded-full w-6 h-6 focus:outline-none"
                  onClick={closeModal}
                >
                  x
                </button>
                <img className="w-72 h-72" src={props.local} alt=""></img>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-2xl">{props.nome}</h3>
                <h2 className="text-white font-bold">{props.preco}</h2>
                <p className="text-white"> {props.descricao}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MenuOption;
