import React from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Corrected module import for Swiper 7+

function Reviews() {
  const reviews = [
    {
      text: "QTO Solutions has been my go-to estimation provider for mechanical projects for over eight months. Their expertise and attention to detail have helped me deliver high-quality results to my clients consistently.",
      name: "Ryan Thompson",
      location: "Illinois, USA - Mechanical Contractor"
    },
    {
      text: "The estimations provided by QTO Solutions have greatly enhanced our project's success rate. Their promptness and precision are unmatched, and they are an integral part of our team.",
      name: "Samantha Green",
      location: "California, USA - Project Manager"
    },
    {
      text: "I appreciate QTO Solutions' dedication and accuracy. They helped us achieve competitive bids with their reliable estimations, saving us both time and money.",
      name: "James Walker",
      location: "Texas, USA - Construction Manager"
    },
    {
      text: "Working with QTO Solutions has been a game changer for us. Their detailed estimations and professional approach make them a leader in the industry.",
      name: "Michael Carter",
      location: "New York, USA - General Contractor"
    },
    {
      text: "Exceptional service and expertise. QTO Solutions has consistently provided accurate estimates, helping us achieve higher profitability on our projects.",
      name: "Emily Johnson",
      location: "Florida, USA - Estimator"
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">Reviews</h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-600">What Our Clients Say About Us</p>
        </div>

        {/* Swiper Carousel for Reviews */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center mx-4 ">
                <FaQuoteLeft className="text-yellow-500 text-4xl mb-4 mx-auto" />
                <p className="text-gray-700 text-xs md:text-sm lg:text-lg text-center mb-4">"{review.text}"</p>
                <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">{review.name}</h3>
                <p className="text-xs md:text-sm lg:text-lg text-gray-500">{review.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
