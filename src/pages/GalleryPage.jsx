import React, { useEffect } from "react";

const galleryImages = [
  // Add image URLs or import images here
  "https://via.placeholder.com/400x300?text=Event+1",
  "https://via.placeholder.com/400x300?text=Event+2",
  "https://via.placeholder.com/400x300?text=Event+3",
];

const GalleryPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="bg-black-100 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <a href={img} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-64 object-cover" />
            </a>
          </div>
        ))}
      </div>
      <div className="bg-black-100 rounded-xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Instagram Feed</h2>
        <p className="text-secondary mb-4">Follow us on Instagram for more updates!</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/rac_kdusc/embed"
            width="320"
            height="400"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Instagram Feed"
            className="rounded-lg border-none"
          ></iframe>
        </div>
      </div>
      {/* TikTok Feed Embed */}
      <div className="bg-black-100 rounded-xl p-6 text-center mt-8">
        <h2 className="text-2xl font-semibold mb-2">TikTok Feed</h2>
        <p className="text-secondary mb-4">Check out our TikTok for more videos!</p>
        <div className="flex justify-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@rotaract_kdusc"
            data-unique-id="rotaract_kdusc"
            data-embed-from="embed_page"
            data-embed-type="creator"
            style={{ maxWidth: 780, minWidth: 288 }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@rotaract_kdusc?refer=creator_embed"
              >
                @rotaract_kdusc
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 