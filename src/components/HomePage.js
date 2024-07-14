import React from "react";
import logo from "../assets/icon2.jpg";
import front from "../assets/frontbar.jpeg";
import Test from "../components/Test";

const HomePage = () => {
  return (
    <div className="min-h-screen mt-4 h-96 w-80  justify-center ml-5">
      <div className="flex items-center justify-center ">
        <img
          className="border-white border-2 rounded-3xl w-64 shadow-2xl"
          src={front}
          alt=""
        ></img>
        <img
          className="rounded-full w-16 absolute mt-40 h-auto"
          src={logo}
          alt=""
        ></img>
      </div>
      <div className="bg-white mt-9 h-72 rounded-3xl shadow-2xl abs">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-black font-medium- p-5">
            Boteco Do Bene
          </h1>
          <img className="w-12 mr-5" src={logo} alt=""></img>
        </div>
        <h2 className="text-xl text-black font-medium- pl-5 ">Descrição:</h2>
        <p className="p-5">
          Boteco Do Bene Bla bla bla bla bla bla bla blaa bla bla bla blaa bla
          bla bla blaa bla bla bla blaa bla bla bla blaa bla bla bla blaa bla
          bla bla blaa bla bla bla blaa bla bla bla blaa bla bla bla bla
        </p>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl h-24 mt-5">
        <Test></Test>
      </div>
    </div>
  );
};

export default HomePage;
