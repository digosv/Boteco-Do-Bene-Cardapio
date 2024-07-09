import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import PorcoesQuentes from "./components/PorcoesQuentes";
import Cervejas from "./components/Cervejas";

function App() {
  return (
    <Router>
      <div className="bg-amber-100 pt-24 min-h-screen">
        <Header />
        <Buttons />
        <Routes>
          <Route
            path="/porcoesquentes"
            element={
              <AnimatePresence>
                <motion.div
                  key="porcoesquentes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PorcoesQuentes />
                </motion.div>
              </AnimatePresence>
            }
          ></Route>
          <Route
            path="/cervejas"
            element={
              <AnimatePresence>
                <motion.div
                  key="porcoesquentes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Cervejas />
                </motion.div>
              </AnimatePresence>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
