import React from "react";

const SocialLinks = () => {
  return (
    <div className="container mx-auto text-center">
      <h3 className=" mb-8 uppercase font-bold tracking-[0.4em]">
        Seguinos
      </h3>
      <div className="flex justify-center space-x-10 mb-10 ">
        <a
          href="https://www.instagram.com/velite.ok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/velite-máquinas-eléctricas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a href="https://www.tiktok.com/@velite.ok" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
        <a
          href="https://wa.me/+5493534210360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a href="https://www.youtube.com/@Velite-Maquinas" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
