import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const FunctionTime = () => {
  const date = new Date().getDay();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  let estado = "";

  if (date === 1 || date === 2 || date === 3 || date === 4 || date === 5) {
    if (hour >= 16 && hour <= 22 && minute <= 30) {
      estado = <p className="text-green-600">Aberto</p>;
    } else {
      estado = <p className="text-red-600">Fechado</p>;
    }
  } else if (date === 6) {
    if (hour >= 12 && hour <= 18) {
      estado = <p className="text-green-600">Aberto</p>;
    } else {
      estado = <p className="text-red-600">Fechado</p>;
    }
  } else if (date === 0) {
    estado = <p className="text-red-600">Fechado</p>;
  }

  const [isOpen, setIsOpen] = useState(false);

  function toggleBox() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <h1 className="pt-3 pl-3">Horario De Funcionamento: </h1>
        <div className="flex items-center justify-evenlys">
          <p className="pl-3 ">{estado}</p>
          <button onClick={toggleBox} className="pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={toggleBox}
              className="absolute top-[300px] right-11 mt-4 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
            <div className="bg-white w-64 p-4 rounded-xl">
              {" "}
              <p>Segunda-Feira: 16:00 - 22:30</p>
              <p>Terça-Feira: 16:00 - 22:30</p>
              <p>Quarta-Feira: 16:00 - 22:30</p>
              <p>Quinta-Feira: 16:00 - 22:30</p>
              <p>Sexta-Feira: 16:00 - 22:30</p>
              <p>Sabado: 12:00 - 18:00</p>
              <p>Domingo: Fechado</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FunctionTime;
