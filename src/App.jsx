import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "/src/components/Navbar";
import SocialLinks from "/src/components/SocialLinks";
import Button from "/src/components/Button";
import bgMobile from "/public/assets/bgMobile.webp";
import bgDesktop from "/public/assets/bgDesktop.webp";
import video from "/public/assets/2e4dc237951972f429efee418b7488d6064c1b26.mp4";
import thumbnail from "/public/assets/capturaVideo.png";

function App() {
  const [bgImage, setBgImage] = useState(bgMobile);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // Estado del video
  const videoRef = useRef(null); // Crear la referencia para el video

  const estilosh2 = "lg:text-4xl text-3xl font-[800] mb-8 text-[#014034]";
  const estilosp = "text-[#999999] mb-8";

  // Calcular altura de la ventana
  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "+5493534210360";
    const message =
      "¡Hola! Estoy interesado en el apilador eléctrico autocargable VELITE.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 768) {
        setBgImage(bgDesktop);
      } else {
        setBgImage(bgMobile);
      }
    };

    updateBgImage();

    window.addEventListener("resize", updateBgImage);
    return () => window.removeEventListener("resize", updateBgImage);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [bgImage]);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
    }
  };



  return (
    <div>
      {/* Sección 1 */}
      <section
        id="/"
        className="relative"    
        style={{
          height: `${windowHeight}px`,
        }}    
      >
        {imageLoaded && (<img className="object-cover object-left w-full  h-full" src={bgImage} alt=""  />)}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-between text-white w-full max-w-7xl mx-auto p-6">
      
        </div>
      </section>

      {/* Sección 2 */}
      <section
        id="apilador-electrico"
        className="bg-white w-full  overflow-hidden"
        style={{
          height: `${windowHeight}px`,
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full md:gap-20 w-full max-w-7xl md:items-center p-6 md:flex-row flex-col">
          <div className="flex flex-col w-full max-w-xl mx-auto">
            <h2
              className={estilosh2}
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              Descubrí el poder del Apilador Eléctrico Autocargable Velite®
            </h2>
            <p
              className={estilosp}
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              Mueve tus cargas con eficiencia y confianza. Llévalo donde lo
              necesites junto con tu carga.
            </p>
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="150"
            >
              <Button
                onClick={openWhatsApp}
                text="Quiero mi apilador"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="relative w-full max-w-xl mx-auto">
            {!videoLoaded && ( // Mostrar miniatura mientras carga el video
              <img
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
                src={thumbnail}
                alt="Miniatura del video"
                className="absolute video w-full object-cover rounded-lg"
              />
            )}
            <video
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              ref={videoRef}
              className="video rounded-lg bg-cover"
              autoPlay
              muted
              loop
              playsInline
              onClick={handleFullScreen}
              onLoadedData={() => setVideoLoaded(true)} // Ocultar la miniatura cuando el video carga
            >
              <source src={video} type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>

            <div
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="150"
            >
              <Button
                onClick={openWhatsApp}
                text="Quiero mi apilador"
                className="md:hidden mt-8 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section
        id="contacto"
        className="bg-[#EEEEEE] w-full flex flex-col text-center justify-between"
        style={{
          height: `${windowHeight}px`,
        }}
      >
        <div className="container mx-auto text-center h-full flex flex-col justify-center items-center p-6 max-w-xl">
          <h2
            className={estilosh2}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Sé el próximo en tener el Apilador Velite
          </h2>
          <p
            className={estilosp}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Contáctanos para obtener más información sobre precios y
            disponibilidad del Apilador Eléctrico que está revolucionando la
            manera de trabajar de las empresas que transportan cargas.
          </p>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="150"
            className="w-full"
          >
            <Button text="Contactar ahora" onClick={openWhatsApp} />
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
