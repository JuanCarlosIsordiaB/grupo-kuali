
import React from 'react';
import { 
  Utensils, 
  Coffee, 
  Truck, 
  Package, 
  TrendingUp, 
  Heart, 
  ShieldCheck, 
  UserMinus 
} from 'lucide-react';
import { NavItem, ServiceItem, Benefit } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Diferenciadores', href: '#unicos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'COMEDORES INDUSTRIALES',
    description: 'Servicio de alimentación empresarial que ofrece diversidad de menús especializados con base a las necesidades requeridas. Cuidamos la alimentación del recurso más importante de tu empresa.',
    iconName: 'utensils'
  },
  {
    title: 'COFFEE BREAK',
    description: 'Deleitamos tu descanso con el refrigerio de tu agrado, con el fin de mejorar el rendimiento y la productividad de tus actividades sociales o de trabajo.',
    iconName: 'coffee'
  },
  {
    title: 'CATERING SERVICE',
    description: 'Servicio de Catering Empresarial a nivel ejecutivo y operativo. Somos la mejor opción en ofrecer una agradable experiencia a través de un conjunto variado y llamativo de comidas para tu empresa.',
    iconName: 'truck'
  },
  {
    title: 'BOX LUNCH',
    description: 'Expertos en servicios ligeros y accesibles, ideales para reuniones de trabajo, capacitaciones o conferencias.',
    iconName: 'package'
  }
];

export const UNIQUE_FEATURES: string[] = [
  "INGREDIENTES DE EXCELENCIA",
  "MENÚS BALANCEADOS",
  "CONCEPTO INNOVADOR",
  "ESTRUCTURA ORGANIZACIONAL CAPACITADA",
  "AMPLIA INFRAESTRUCTURA CON COCINA DE RESPALDO",
  "5000 SERVICIOS DIARIOS EN CORTO PLAZO",
  "ALTOS ESTÁNDARES DE HIGIENE",
  "DISTINTIVOS DE CALIDAD",
  "BUENAS PRÁCTICAS DE MANUFACTURA",
  "APLICACIÓN DE ENCUESTAS DE SATISFACCIÓN",
  "CONTACTO LOCAL DIRECTO"
];

export const BENEFITS: Benefit[] = [
  { title: "RENDIMIENTO LABORAL", iconName: "trending-up" },
  { title: "SATISFACCIÓN Y BIENESTAR", iconName: "heart" },
  { title: "MEJOR PRODUCTIVIDAD", iconName: "shield-check" },
  { title: "DISMINUCIÓN DE AUSENTISMO Y ROTACIÓN", iconName: "user-minus" }
];

export const VALUES: string[] = [
  "INNOVACIÓN", "CALIDAD", "RESPETO", "PUNTUALIDAD", 
  "RESPONSABILIDAD", "LIMPIEZA", "COMPROMISO", 
  "HONESTIDAD", "TRABAJO DURO", "TRANSPARENCIA", "SERVICIO"
];

export const CLIENTS: string[] = [
  "Honeywell", "Mayco", "International", "TOYODA GOSEI", 
  "METALOR", "R", "Smr", "Remy"
];

export const IconMap: Record<string, React.ReactNode> = {
  utensils: <Utensils className="w-8 h-8 text-amber-600" />,
  coffee: <Coffee className="w-8 h-8 text-amber-600" />,
  truck: <Truck className="w-8 h-8 text-amber-600" />,
  package: <Package className="w-8 h-8 text-amber-600" />,
  'trending-up': <TrendingUp className="w-8 h-8 text-amber-600" />,
  heart: <Heart className="w-8 h-8 text-amber-600" />,
  'shield-check': <ShieldCheck className="w-8 h-8 text-amber-600" />,
  'user-minus': <UserMinus className="w-8 h-8 text-amber-600" />
};
