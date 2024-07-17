import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Buttons = () => {
  const location = useLocation();

  return (
    <div className="rounded-3xl text-1xl bg-white text-black grid grid-flow-col auto-cols-max w-5/7 mt-5 mr-2 ml-2 overflow-x-scroll scroll-persistent md:text-1xl md:items-center md:justify-center shadow-lg">
      <span className="absolute right-4 top-38 text-3xl z-40 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </span>
      <span className="absolute left-4 top-38 text-3xl z-40 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </span>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/bolinhos"
          className={`text-1xl p-1 ${
            location.pathname === "/bolinhos"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Bolinhos
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/porcoesquentes"
          className={`text-1xl p-1  ${
            location.pathname === "/porcoesquentes"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Porções Quentes
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/porcoesfrias"
          className={`text-1xl p-1  ${
            location.pathname === "/porcoesfrias"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Porções Frias
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/lanches"
          className={`text-1xl p-1  ${
            location.pathname === "/lanches"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Lanches
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/drinks"
          className={`text-1xl p-1  ${
            location.pathname === "/drinks"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Drinks
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/cervejas"
          className={`text-1xl p-1  ${
            location.pathname === "/cervejas"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Cervejas
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/semalcool"
          className={`text-1xl p-1 ${
            location.pathname === "/semalcool"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Sem Alcool
        </Link>
      </motion.div>
    </div>
  );
};

export default Buttons;
