import React from "react";
import concrete from '../../assets/images/concrete-1.png';
import drywall from '../../assets/images/drywall-1.png';
import earth from '../../assets/images/earth-1.png';
import electric from '../../assets/images/electric-1.png';
import flooring from '../../assets/images/Flooring-1.png';
import heavycivilheader from '../../assets/images/heavy-civil-header 1.png';
import masonry from '../../assets/images/masonry-1.png';
import lumber from '../../assets/images/lumber-1.png';
import paint from '../../assets/images/paint-1.png';

function Services() {
  const images = [
    { src: concrete, title: 'Concrete' },
    { src: drywall, title: 'Drywall' },
    { src: earth, title: 'Earthwork' },
    { src: electric, title: 'Electrical' },
    { src: flooring, title: 'Flooring' },
    { src: heavycivilheader, title: 'Heavy Civil' },
    { src: lumber, title: 'Lumber' },
    { src: masonry, title: 'Masonry' },
    { src: paint, title: 'Painting' }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">Estimation Services We Offer</h1>
          <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600 max-w-4xl mx-auto">
            No matter the size, scale, or complexity, QTO Solutions tackles every construction project with ease. We're experts in all CSI divisions, handling general contractor (GC) scopes, subcontractor scopes, and everything in between. Our all-inclusive approach ensures nothing falls through the cracks, delivering a seamless experience for your construction project.
          </p>
        </div>

        {/* Images Carousel Section */}
        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-marquee">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Services;
