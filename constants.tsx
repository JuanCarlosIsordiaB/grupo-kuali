import React from "react";
import {
  Utensils,
  Coffee,
  Truck,
  Package,
  Building2,
  CalendarDays,
  TrendingUp,
  Heart,
  ShieldCheck,
  UserMinus,
} from "lucide-react";
import { NavItem, ServiceItem, Benefit } from "./types";

export const NAV_LINKS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Diferenciadores", href: "#unicos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "COMEDOR INDUSTRIAL",
    description:
      "Ofrecemos servicio completo en tus instalaciones, que incluye preparación de alimentos, limpieza de la cocina y decoración del comedor para el bienestar de tus colaboradores.",
    iconName: "utensils",
  },
  {
    title: "COMEDOR CORPORATIVO",
    description:
      "Menús personalizados que se adaptan a las necesidades de tu empresa, garantizando calidad, seguridad e higiene.",
    iconName: "building",
  },
  {
    title: "CATERING",
    description:
      "Para empresas sin cocina, llevamos alimentos preparados con la misma calidad y servicio.",
    iconName: "truck",
  },
  {
    title: "BOX LUNCH",
    description:
      "Alimentos ideales para horarios regulares y tiempos extras. Ofrecemos opciones prácticas y fáciles de consumir, adaptadas a las necesidades de tu equipo, incluyendo juntas y reuniones.",
    iconName: "package",
  },
  {
    title: "SNACK Y CAFETERÍA",
    description:
      "Snacks frescos y energizantes para mantener la productividad, con el fin de satisfacer cualquier antojo y las necesidades de cada comensal.",
    iconName: "coffee",
  },
  {
    title: "EVENTOS",
    description:
      "Coffee breaks, banquetes, comidas ejecutivas, buffet, bocadillos, parrilladas, taquizas y posadas navideñas para cualquier tipo de evento.",
    iconName: "calendar",
  },
];

export const UNIQUE_FEATURES: string[] = [
  "Infraestructura de Clase Mundial",
  "Mitigación de Riesgos",
  "Altos Estándares de Higiene",
  "Fusión Local + Global",
  "Ingredientes de Excelencia",
  "Concepto Innovador y Saludable",
  "Escalabilidad de Alto Impacto",
  "Decisiones Basadas en Datos",
  "Atención y Contacto Directo",
  "Atención y Contacto Directo",
];

export const BENEFITS: Benefit[] = [
  {
    title: "RENDIMIENTO LABORAL",
    description:
      "Colaboradores con energía óptima para la complejidad de sus tareas.",
    iconName: "trending-up",
  },
  {
    title: "SATISFACCIÓN Y BIENESTAR",
    description:
      "Mejora el clima organizacional y la satisfacción de los colaboradores.",
    iconName: "heart",
  },
  {
    title: "MEJOR PRODUCTIVIDAD",
    description: "Menos tiempo perdido y mayor enfoque a lo importante.",
    iconName: "shield-check",
  },
  {
    title: "DISMINUCIÓN DE AUSENTISMO Y ROTACIÓN",
    description:
      "Colaboradores saludables y valorados permanecen más tiempo en la empresa.",
    iconName: "user-minus",
  },
];

export const VALUES: string[] = [
  "INNOVACIÓN",
  "CALIDAD",
  "RESPETO",
  "PUNTUALIDAD",
  "RESPONSABILIDAD",
  "LIMPIEZA",
  "COMPROMISO",
  "HONESTIDAD",
  "TRABAJO DURO",
  "TRANSPARENCIA",
  "SERVICIO",
];

export const CLIENTS: string[] = [
  "Honeywell",
  "Mayco",
  "International",
  "TOYODA GOSEI",
  "METALOR",
  "R",
  "Smr",
  "Remy",
];

export const IconMap: Record<string, React.ReactNode> = {
  utensils: <Utensils className="w-8 h-8 text-amber-600" />,
  coffee: <Coffee className="w-8 h-8 text-amber-600" />,
  truck: <Truck className="w-8 h-8 text-amber-600" />,
  package: <Package className="w-8 h-8 text-amber-600" />,
  building: <Building2 className="w-8 h-8 text-amber-600" />,
  calendar: <CalendarDays className="w-8 h-8 text-amber-600" />,
  "trending-up": <TrendingUp className="w-8 h-8 text-amber-600" />,
  heart: <Heart className="w-8 h-8 text-amber-600" />,
  "shield-check": <ShieldCheck className="w-8 h-8 text-amber-600" />,
  "user-minus": <UserMinus className="w-8 h-8 text-amber-600" />,
};
