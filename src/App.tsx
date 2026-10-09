import { ContactPage } from './pages/ContactPage';
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { OwnerLaunchChecklistModal } from './components/OwnerLaunchChecklistModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { RentalPage } from './pages/RentalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  // Client-side routing with browser history support
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // Owner Launch Checklist modal state
  const [checklistOpen, setChecklistOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLightbox = (images: string[], index: number = 0, title: string = '') => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  // Route matching
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} onOpenLightbox={openLightbox} />;
    }
    if (currentPath === '/hubungi-kami') return <ContactPage />;
    if (currentPath === '/tentang-kami') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/perkhidmatan') {
      return <ServicesPage onNavigate={navigate} />;
    }
    if (currentPath === '/projek') {
      return <ProjectsPage onNavigate={navigate} onOpenLightbox={openLightbox} />;
    }
    if (currentPath.startsWith('/projek/')) {
      const slug = currentPath.replace('/projek/', '');
      return (
        <ProjectDetailPage
          slug={slug}
          onNavigate={navigate}
          onOpenLightbox={openLightbox}
        />
      );
    }
    if (currentPath === '/sewa-peralatan') {
      return <RentalPage onNavigate={navigate} />;
    }
    if (currentPath === '/privasi') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-neutral-200 selection:text-neutral-900">
      {/* Top Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Body */}
      <main id="main-content" className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} onOpenChecklist={() => setChecklistOpen(true)} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        title={lightboxTitle}
      />

      {/* Owner Launch Checklist Modal */}
      <OwnerLaunchChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
      />
    </div>
  );
}
