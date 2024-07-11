import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Buttons = () => {
  const location = useLocation();

  return (
    <div className="rounded-3xl text-1xl bg-white text-black grid grid-flow-col auto-cols-max w-5/7 mt-5 mr-2 ml-2 overflow-x-auto overscroll-contain md:text-1xl md:items-center md:justify-center shadow-lg">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="p-1 m-3"
      >
        <Link
          to="/menuprincipal"
          className={`text-1xl p-1 ${
            location.pathname === "/menuprincipal"
              ? "bg-red-500 rounded-3xl text-white p-3"
              : ""
          }`}
        >
          Menu Principal
        </Link>
      </motion.div>
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
