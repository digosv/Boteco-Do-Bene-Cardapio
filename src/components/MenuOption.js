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
      <div className="flex items-center justify-center">
        <div class="flex items-center justify-start p-4 w-80  overflow-hidden bg-white border-2 rounded-3xl shadow-md my-6">
          <img
            onClick={openModal}
            class="w-32 items-center rounded-3xl"
            src={props.local}
            alt=""
          ></img>
          <div class="p-4">
            <h3 class="font-bold">{props.nome}</h3>
            <h5 className="">{props.preco}</h5>
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
                  className="absolute top-0 right-0 ml-8 text-red-black rounded-full w-6 h-6 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
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
