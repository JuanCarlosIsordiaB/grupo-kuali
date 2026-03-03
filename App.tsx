import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  ChevronRight,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NAV_LINKS,
  SERVICES,
  UNIQUE_FEATURES,
  BENEFITS,
  VALUES,
  IconMap,
} from "./constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Calculamos la posición con offset para el navbar
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenu(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`relative flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${scrolled ? "bg-white shadow-xl border border-stone-200" : "bg-stone-900/40 backdrop-blur-md border border-white/10"}`}
        >
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${scrolled ? "bg-white" : "bg-transparent"}`}
            >
              <img
                src="/images/logo/WhatsApp_Image_2026-02-15_at_10.16.33_AM-removebg-preview.png"
                alt="Grupo Kuali"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tighter transition-colors ${scrolled ? "text-stone-900" : "text-white"}`}
            >
              GRUPO KUALI<span className="text-amber-600">.</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-[12px] uppercase tracking-[0.1em] font-bold hover:text-amber-600 transition-colors cursor-pointer ${scrolled ? "text-stone-600" : "text-white"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, "#contacto")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${scrolled ? "bg-stone-900 text-white hover:bg-amber-700" : "bg-white text-stone-900 hover:bg-stone-100"}`}
            >
              CONTACTAR
            </a>
          </div>

          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden p-2 focus:outline-none"
          >
            <Menu className={scrolled ? "text-stone-900" : "text-white"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-stone-950 z-[110] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-white font-bold text-2xl tracking-tighter uppercase">
                Kuali<span className="text-amber-600">.</span>
              </span>
              <button
                onClick={() => setMobileMenu(false)}
                className="text-white p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-4xl font-bold text-white hover:text-amber-500 uppercase tracking-tighter transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/10">
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
                className="block w-full text-center bg-amber-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionTitle = ({
  label,
  title,
  light = false,
}: {
  label: string;
  title: string;
  light?: boolean;
}) => (
  <div className="mb-12">
    <span
      className={`text-[12px] font-bold uppercase tracking-[0.4em] mb-4 block ${light ? "text-amber-400" : "text-amber-700"}`}
    >
      {label}
    </span>
    <h2
      className={`text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-balance ${light ? "text-white" : "text-stone-900"}`}
    >
      {title}
    </h2>
  </div>
);

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.16 1.6 5.98L0 24l6.33-1.66a11.86 11.86 0 005.73 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44zm-8.45 18.3h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.22-3.76.98 1-3.66-.24-.38a9.88 9.88 0 01-1.52-5.24c0-5.45 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.9 7c0 5.46-4.44 9.9-9.86 9.9zm5.43-7.43c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.5a8.95 8.95 0 01-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.46 1.08 2.88 1.23 3.08.15.2 2.12 3.23 5.13 4.53.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35z" />
  </svg>
);

const App: React.FC = () => {
  const [showFloatingWhatsapp, setShowFloatingWhatsapp] = useState(true);
  const contactPhone = "4448035790";
  const whatsappMessage =
    "Hola Grupo Kuali, me gustaría recibir información sobre sus servicios de alimentación.";
  const whatsappHref = `https://wa.me/52${contactPhone}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailSubject = "Solicitud de información - Grupo Kuali";
  const emailBody =
    "Hola Grupo Kuali,\n\nMe gustaría recibir información sobre sus servicios de alimentación.\n\nGracias.";
  const emailHref = `mailto:ventas@grupokuali.com.mx?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const allianceLogos = [
    {
      fileName: "WhatsApp Image 2026-02-15 at 10.10.01 AM (1).jpeg",
      alt: "Logo aliado 1",
    },
    {
      fileName: "WhatsApp_Image_2026-02-15_at_10.10.01_AM-removebg-preview.png",
      alt: "Logo aliado 2",
    },
    {
      fileName: "WhatsApp_Image_2026-02-15_at_10.10.02_AM-removebg-preview.png",
      alt: "Logo aliado 3",
    },
    {
      fileName:
        "WhatsApp_Image_2026-02-15_at_10.10.02_AM__1_-removebg-preview.png",
      alt: "Logo aliado 4",
    },
    {
      fileName:
        "WhatsApp_Image_2026-02-15_at_10.10.02_AM__2_-removebg-preview.png",
      alt: "Logo aliado 5",
    },
  ];
  const extendedAllianceLogos = [
    ...allianceLogos,
    ...allianceLogos,
    ...allianceLogos,
  ];

  return (
    <div className="overflow-x-hidden selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
            alt="Fondo Gourmet Industrial"
          />
          <div className="absolute inset-0 bg-stone-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] tracking-tighter mb-8 uppercase">
                ALTA <span className="text-amber-500">INGENIERÍA</span> <br />
                GASTRONÓMICA.
              </h1>
              <p className="text-stone-200 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light text-balance">
                Elevamos la productividad de su industria a través de soluciones
                de alimentación inteligente, certificada y de alta escala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-2xl"
                >
                  SOLICITAR PROPUESTA
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("servicios")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-white/40 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  EXPLORAR SERVICIOS <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clientes"
        className="py-20 bg-white border-b border-stone-100 relative scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 text-center">
            ALIANZAS ESTRATÉGICAS
          </h2>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-4 md:gap-8 animate-infinite-scroll whitespace-nowrap items-center py-6">
            {extendedAllianceLogos.map((logo, i) => (
              <div
                key={`${logo.fileName}-${i}`}
                className="h-28 md:h-32 w-64 md:w-72 flex items-center justify-center"
              >
                <img
                  src={encodeURI(`/images/alianzas/${logo.fileName}`)}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="quienes-somos" className="py-32 bg-[#fcfaf7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionTitle
                label="EXPERIENCIA KUALI"
                title="CALIDAD QUE SE SIENTE EN CADA SERVICIO."
              />
              <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
                <div className="p-8 bg-stone-900 rounded-2xl text-white relative overflow-hidden group">
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-amber-500/10 transition-colors" />
                  <p>
                    Somos una empresa del ramo alimenticio que ofrece
                    innovación, proyectos a la medida y diversidad de menús con
                    los más altos estándares de calidad.
                  </p>
                  <p className="text-xl font-bold uppercase tracking-tight relative z-10 leading-tight mt-7">
                    "Buscamos la máxima satisfacción a través de un equipo
                    calificado y procesos industriales rigurosos."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-16">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200">
                  <h3 className="font-bold text-2xl md:text-3xl lg:text-[40px] uppercase tracking-[0.25em] md:tracking-widest leading-none text-amber-700 mb-2 text-balance">
                    VISIÓN
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    "Ser la empresa lider para comedores corporativos
                    multinacionales, reconocida por versatilidad culinaria y
                    cumplimiento de normas globales."
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200">
                  <h3 className="font-bold text-2xl md:text-3xl lg:text-[40px] uppercase tracking-[0.25em] md:tracking-widest leading-none text-amber-700 mb-2 text-balance">
                    MISIÓN
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    "Nutrir talento global con una propuesta que integra sazon
                    local y cocina internacional, bajo estricta seguridad e
                    higiene, impulsando bienestar y productividad."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/extras/{BADF8567-697A-4D54-A31B-04FF896348D5}.png"
                  className="w-full h-full object-cover"
                  alt="Infraestructura Kuali"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-600 rounded-full flex items-center justify-center p-6 text-center shadow-2xl">
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  ALTOS ESTANDARES DE CALIDAD E HIGIENE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="" title="NUESTROS SERVICIOS" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[300px] ${i === 0 ? "bg-stone-900 text-white border-stone-900" : "bg-stone-50 text-stone-900 border-stone-200"}`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${i === 0 ? "bg-amber-600" : "bg-white shadow-md"}`}
                  >
                    {IconMap[s.iconName]}
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tighter mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p
                    className={`leading-snug text-[12px] font-light ${i === 0 ? "text-stone-400" : "text-stone-600"}`}
                  >
                    {s.description}
                  </p>
                </div>
                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${i === 0 ? "text-amber-500" : "text-stone-900"}`}
                >
                  CONSULTAR DISPONIBILIDAD <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section
        id="unicos"
        className="py-32 bg-stone-900 text-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <SectionTitle
                label="VALOR AGREGADO"
                title="POR QUÉ SOMOS LA OPCIÓN NÚMERO 1."
                light
              />
              <p className="text-stone-400 font-light text-lg leading-relaxed">
                En Kuali, no solo servimos platos; diseñamos experiencias
                nutricionales que optimizan el rendimiento operativo y
                fortalecen la cultura organizacional de empresas globales.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
              {UNIQUE_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-stone-800/40 rounded-xl border border-white/5 hover:bg-stone-800 transition-all hover:translate-x-2"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-[12px] font-bold uppercase tracking-widest text-stone-200">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <SectionTitle
              label="RESULTADOS"
              title="ALIMENTAR BIEN ES INVERTIR EN PRODUCTIVIDAD."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="group p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 hover:bg-stone-900 hover:border-stone-900 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all">
                  <div className="group-hover:text-white text-amber-600 transition-colors">
                    {IconMap[b.iconName]}
                  </div>
                </div>
                <h3 className="text-[13px] font-bold uppercase tracking-widest text-stone-900 group-hover:text-white leading-tight">
                  {b.title}
                </h3>
                <p className="mt-4 text-[12px] leading-relaxed text-stone-500 group-hover:text-stone-300">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section / Contact */}
      <footer
        id="contacto"
        className="bg-stone-950 text-white pt-32 pb-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-4">
              <span className="text-4xl font-bold tracking-tighter mb-8 block uppercase">
                Kuali<span className="text-amber-600">.</span>
              </span>
              <p className="text-stone-400 font-light leading-relaxed mb-10 max-w-sm">
                Expertos en servicios de alimentación que impulsan el
                crecimiento y bienestar del sector industrial mexicano a través
                de la excelencia operativa.
              </p>
              <div className="flex gap-4">
                <a
                  href={`tel:${contactPhone}`}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer border border-white/10 group"
                >
                  <Phone className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </a>
                <a
                  href={emailHref}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer border border-white/10 group"
                >
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/grupokuali?igsh=bzF6aXZuYm4yYWl0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Grupo Kuali"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer border border-white/10 group"
                >
                  <Instagram className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/grupo-kuali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Grupo Kuali"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer border border-white/10 group"
                >
                  <Linkedin className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.facebook.com/share/1E7HVXGERL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Grupo Kuali"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer border border-white/10 group"
                >
                  <Facebook className="w-4 h-4 text-stone-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600 mb-8">
                NAVEGACIÓN
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-4 font-bold text-xs tracking-widest">
                  {NAV_LINKS.slice(0, 3).map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(l.href.replace("#", ""))
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-stone-500 hover:text-white transition-colors uppercase"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 font-bold text-xs tracking-widest">
                  {NAV_LINKS.slice(3).map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(l.href.replace("#", ""))
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-stone-500 hover:text-white transition-colors uppercase"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600 mb-8">
                CONTACTO DIRECTO
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-stone-300 text-sm font-light uppercase tracking-wider leading-relaxed">
                    Zona Industrial, Eje 102 104, <br /> San Luis Potosí, SLP.
                    México.
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 text-amber-600 shrink-0" />
                  <p className="text-white text-3xl font-bold tracking-tighter">
                    444.803.5790
                  </p>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-600 text-[10px] font-bold uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} GRUPO KUALI • ALIMENTACIÓN
              PROFESIONAL
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-600">
              <a href="#" className="hover:text-white transition-colors">
                AVISO DE PRIVACIDAD
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TÉRMINOS
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showFloatingWhatsapp && (
        <div className="fixed bottom-6 right-6 z-[120]">
          <div className="relative">
            <button
              onClick={() => setShowFloatingWhatsapp(false)}
              aria-label="Cerrar botón de WhatsApp"
              className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-stone-900 text-white border border-white/20 hover:bg-stone-800 transition-colors flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp"
              className="w-16 h-16 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl flex items-center justify-center transition-colors"
            >
              <WhatsAppIcon className="w-9 h-9" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
