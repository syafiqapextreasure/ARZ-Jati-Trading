import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  title?: string;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
  caption,
}) => {
  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Papar Imej Bersaiz Penuh"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Container - Stop propagation on image card click */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <div className="text-sm sm:text-base font-medium truncate max-w-md">
            {title && <span className="font-semibold">{title}</span>}
            {images.length > 1 && (
              <span className="ml-2 text-neutral-400">
                ({currentIndex + 1} daripada {images.length})
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Tutup Paparan Imej (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image with Natural Colors Preserved */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-neutral-900 shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={caption || title || `Foto projek ${currentIndex + 1}`}
            referrerPolicy="no-referrer"
            className="w-full max-h-[72vh] object-contain select-none"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Imej Sebelumnya (Anak Panah Kiri)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Imej Seterusnya (Anak Panah Kanan)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <div className="w-full text-center pt-3 text-neutral-300 text-sm sm:text-base">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
