import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos de AOS
import Navbar from "/src/components/Navbar";
import SocialLinks from "/src/components/SocialLinks";
import Button from "/src/components/Button";

function App() {
  // Inicializa AOS
  AOS.init({
    duration: 1000, // Duración de la animación
    once: false, // La animación ocurre solo una vez
  });

  const openWhatsApp = () => {
    const phoneNumber = "+5493534210360"; // Reemplázalo con tu número de teléfono
    const message =
      "¡Hola! Estoy interesado en el apilador eléctrico autocargable VELITE.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Sección 1 */}
      <section
        id="/"
        className="relative h-screen bg-cover bg-left bg-[url('/public/bgMobile.jpg')] lg:bg-[url('/public/bgMain.jpg')]"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-between text-white w-full max-w-7xl mx-auto p-6">
          <Navbar />
          <div className="md:max-w-3xl max-w-xl">
            <h1  className="text-5xl md:text-6xl font-[800] lg:mb-6 mb-3">
              Optimiza el transporte de tus cargas
            </h1>
            <p className="lg:text-xl mb-16">
              Transporta el Apilador Eléctrico Autocargable junto con tu carga,
              y lleva la productividad al siguiente nivel.
            </p>
            <Button
              onClick={openWhatsApp}
              text="Contáctanos"
              className="lg:mb-28 mb-10"
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section
        id="apilador-electrico"
        className="bg-white h-screen w-full flex justify-center items-center"
      >
        <div className="container mx-auto grid grid-cols-12 gap-3 max-w-7xl w-full p-6 overflow-hidden">
          <div
            
            className="lg:col-span-6 md:col-span-7 col-span-12 sm:mr-20"
          >
            <h2 className="lg:text-4xl text-3xl font-[800] mb-8 text-[#014034]" data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom">
              Descubrí el poder del Apilador Eléctrico Autocargable Velite®
            </h2>
            <p className="text-[#999999] mb-8" data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom">
              Mueve tus cargas con eficiencia y confianza. Llévalo donde lo
              necesites junto con tu carga.
            </p>
            <div data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom">

            <Button
              onClick={openWhatsApp}
              text="Quiero mi apilador"
              className="hidden md:block lg:mb-28 mb-10"
              />
              </div>
          </div>
          <div  className="lg:col-span-6 md:col-span-5 col-span-12 max-w-xl">
            <iframe
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
              className="video rounded-lg"
              src="https://www.youtube.com/embed/YcmrFzPNGmY?autoplay=1&mute=1&loop=1&playlist=YcmrFzPNGmY&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <Button
              onClick={openWhatsApp}
              text="Quiero mi apilador"
              className="md:hidden mt-8 w-full"
            />
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section
        id="contacto"
        className="bg-[#EEEEEE] h-screen w-full flex flex-col text-center justify-between"
      >
        <div className="container mx-auto text-center h-full flex flex-col justify-center items-center p-6 " >
          <h2 className="lg:text-4xl text-3xl font-[800] mb-8 text-[#014034] max-w-xl" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            Sé el próximo en tener el Apilador Velite
          </h2>
          <p className="text-[#999999] mb-8 max-w-xl" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            Contáctanos para obtener más información sobre precios y
            disponibilidad del Apilador Eléctrico que está revolucionando la
            manera de trabajar de las empresas que transportan cargas.
          </p>
          <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">

          <Button  text="Más Información" className="md:max-w-xs" />
          </div>
        </div>

        <div className="text-[#999999]">
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}

export default App;
