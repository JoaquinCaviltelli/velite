import React from "react";

const SocialLinks = () => {
  return (
    <div className="container mx-auto text-center mb-8">
      <h3 className="mb-3 uppercase font-bold tracking-[0.5em]">
        Seguinos
      </h3>
      <div className="flex justify-center">
        <a
        className="xl:hover:scale-150 transition-transform p-5"
          href="https://www.instagram.com/velite.ok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-2xl "></i>
        </a>
        <a className="xl:hover:scale-150 transition-transform p-5"
          href="https://www.linkedin.com/company/velite-máquinas-eléctricas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a className="xl:hover:scale-150 transition-transform p-5" href="https://www.tiktok.com/@velite.ok" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
        <a className="xl:hover:scale-150 transition-transform p-5"
          href="https://wa.me/+5493534210360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a className="xl:hover:scale-150 transition-transform p-5" href="https://www.youtube.com/@Velite-Maquinas" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
