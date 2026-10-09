/**
 * Centralized Image Assets
 * All images reside in /public/images/ so they are served directly at /images/...
 * both in local Vite development and when built for Cloudflare Pages/Workers/Vercel.
 */

export const IMAGES = {
  heroBungalow: '/images/hero-bungalow.jpg',
  serviceBinaRumah: '/images/service-bina-rumah.jpg',
  serviceUbahSuai: '/images/service-ubah-suai.jpg',
  serviceCatKemasan: '/images/service-cat.jpg',
  projectSportsCourt: '/images/project-gelanggang.jpg',
  projectPerodua: '/images/project-perodua.jpg',
  projectWismaAudit: '/images/project-wisma-audit.jpg',
  projectVillaPool: '/images/project-villa.jpg',
  projectTilingFlooring: '/images/project-lantai.jpg',
  equipmentRental: '/images/equipment-rental.jpg',
} as const;
