"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  gallery?: string[];
  productName: string;
}

export function ProductGallery({
  mainImage,
  gallery,
  productName,
}: ProductGalleryProps) {
  const allImages = gallery && gallery.length > 0 ? gallery : [mainImage];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <div className="space-y-4">
      {/* Main Large Display Image */}
      <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl bg-slate-950 overflow-hidden border border-slate-200 shadow-sm">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails if multiple */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(img)}
              aria-label={`View ${productName} image ${idx + 1}`}
              className={`relative h-18 w-18 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                selectedImage === img
                  ? "border-sky-600 ring-2 ring-sky-600/20"
                  : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="72px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
