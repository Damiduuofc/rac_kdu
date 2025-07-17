import React from "react";

const galleryImages = [
  // Add image URLs or import images here
  "https://via.placeholder.com/400x300?text=Event+1",
  "https://via.placeholder.com/400x300?text=Event+2",
  "https://via.placeholder.com/400x300?text=Event+3",
];

const GalleryPage = () => (
  <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {galleryImages.map((img, idx) => (
        <img key={idx} src={img} alt={`Gallery ${idx+1}`} className="rounded-xl w-full h-64 object-cover" />
      ))}
    </div>
    <div className="bg-black-100 rounded-xl p-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Instagram Feed</h2>
      <p className="text-secondary">[Embed your Instagram feed here]</p>
    </div>
  </div>
);

export default GalleryPage; 