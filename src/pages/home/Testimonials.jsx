import { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState(null)
    useEffect(() => {
        fetch('./testimonials.json')
            .then(res=> res.json())
        .then(data=> setTestimonials(data))
    }, [])
    

    return (
      <section className=" banner-image testimonial-banner" style={{backgroundImage: `url('${testimonials?.banner}')`}}>
      <div>
        <h2>TESTIMONIALS</h2>
        <h2 className="text-4xl font-bold text-gray-300 text-center mb-16">What Our Customers Say</h2>
    </div>
            <div >
            <Swiper
    spaceBetween={50}
          slidesPerView={2}
          navigation
      pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
      >
          
                {
                    testimonials?.testimonials?.map((test, ind) => (
                        <SwiperSlide key={ind}>
                            <TestimonialCard testimonial={ test } />
                        </SwiperSlide>
                    ))
        }
     
  </Swiper>
    </div>
      </section>
    
  )
}
