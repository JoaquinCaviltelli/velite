import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "/src/components/Navbar";
import SocialLinks from "/src/components/SocialLinks";
import Button from "/src/components/Button";
import bgDesktop from "/assets/bgDesktop.webp";

function App() {

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

 

  return (
    <div>
      {/* Sección 1 */}
      <section
        id="/"
        className="relative"
        style={{
          height: `${window.innerHeight}px`,
        }}
      >
        <img
          className="object-cover bg w-full  h-full"
          src={bgDesktop}
          alt="Apilador Eléctrico Autocargable"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-between text-white w-full max-w-7xl mx-auto p-6">
          <Navbar />
          <div className="md:max-w-3xl max-w-xl">
            <h1 className="text-5xl md:text-6xl font-[800] lg:mb-6 mb-6">
              Optimiza el transporte de tus cargas
            </h1>
            <p className="lg:text-xl lg:mb-16 mb-6">
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
        className="bg-white w-full  overflow-hidden"
        style={{
          height: `${window.innerHeight}px`,
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full md:gap-20 w-full max-w-7xl md:items-center p-6 md:flex-row flex-col">
          <div className="flex flex-col w-full max-w-xl mx-auto">
            <h2
              className="lg:text-4xl text-3xl font-[800] mb-8 text-[#014034]"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              Descubrí el poder del Apilador Eléctrico Autocargable Velite®
            </h2>
            <p
              className="text-[#999999] mb-8"
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
           
            <iframe
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="video rounded-lg bg-cover"
              src="https://www.youtube.com/embed/cyBuLgkB5zA?si=UUZf775dsdHTq6nk&amp;&mute=1&loop=1&playlist=cyBuLgkB5zA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

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
          height: `${window.innerHeight}px`,
        }}
      >
        <div className="container mx-auto text-center h-full flex flex-col justify-center items-center p-6 max-w-xl">
          <h2
            className="lg:text-4xl text-3xl font-[800] mb-8 text-[#014034]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Sé el próximo en tener el Apilador Velite
          </h2>
          <p
            className="text-[#999999] mb-8"
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
