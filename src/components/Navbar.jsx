import React, { useState } from "react";
import SocialLinks from "/src/components/SocialLinks";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex w-full justify-between items-center text-white">
      <div className="flex items-center">
      

        <img  src="/logo.png" alt="Logo" className="h-14" />
        
      </div>
      {/* Botón de menú para móvil */}
      <button onClick={toggleSidebar} className="md:hidden p-2 text-white">
        <i className="fas fa-bars text-2xl"></i>
      </button>
      {/* Barra lateral */}
      <div
        className={`fixed inset-0 md:hidden  ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full bg-[#014034] text-white w-full p-6 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="h-full flex flex-col justify-between">

        <ul className="flex flex-col items-center space-y-4 uppercase font-semibold text-lg mt-20">
          <li>
            <a href="#apilador-electrico" onClick={toggleSidebar} className="text-white">
              Apilador
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleSidebar} className="text-white">
              Contacto
            </a>
          </li>
        </ul>
        <div className="scale-75 text-white">

        <SocialLinks />
        </div>
        </div>
      </div>

      {/* Menú en desktop */}
      <div className="space-x-2 hidden md:flex">
        <a
          href="#apilador-electrico"
          className="text-white px-4 py-2 cursor-pointer uppercase text-sm font-light"
        >
          Apilador
        </a>
        <a
          href="#contacto"
          className="text-white px-4 py-2 cursor-pointer uppercase text-sm font-light"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
