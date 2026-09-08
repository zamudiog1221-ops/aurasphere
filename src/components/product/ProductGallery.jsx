import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";

/**
 * ProductGallery — main image + thumbnail rail with cross-fade transitions.
 * Switches the main image when a variant changes (via imageId on variants).
 *
 * @param {object} product
 * @param {string} activeImageId - image id forced by variant selection
 */
export default function ProductGallery({ product, activeImageId }) {
  const images = product.images;
  const initialId = activeImageId || images[0]?.id;
  const [selectedId, setSelectedId] = useState(initialId);

  // When the variant forces a different image, switch to it.
  React.useEffect(() => {
    if (activeImageId && activeImageId !== selectedId) {
      setSelectedId(activeImageId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageId]);

  const selected = useMemo(
    () => images.find((i) => i.id === selectedId) || images[0],
    [images, selectedId]
  );

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible md:max-h-[640px]">
        {images.map((img) => {
          const active = img.id === selectedId;
          return (
            <button
              key={img.id}
              onClick={() => setSelectedId(img.id)}
              className={`relative shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden transition-all duration-300 ${
                active
                  ? "ring-1 ring-amber opacity-100"
                  : "opacity-50 hover:opacity-90"
              }`}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                fittingType="fill"
              />
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-secondary group">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={selected.url}
              alt={selected.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              fittingType="fill"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover-to-ignite subtle amber vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}