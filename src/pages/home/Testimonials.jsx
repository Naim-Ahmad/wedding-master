import { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from "./TestimonialCard";

const animation = ["fade-right", "fade-left"]

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState(null)
    useEffect(() => {
        fetch('./testimonials.json')
            .then(res=> res.json())
        .then(data=> setTestimonials(data))
    }, [])
    

    return (
      <section className=" banner-image testimonial-banner overflow-x-hidden" style={{backgroundImage: `url('${testimonials?.banner}')`}}>
            <div className="max-w-7xl mx-auto">
            <div className="font-bold text-gray-300 text-center pt-10">
                <h2>TESTIMONIALS</h2>
                <h2 className="text-4xl py-8">What Our Customers Say</h2>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        }
                      }}
                >
            
                    {
                        testimonials?.testimonials?.map((test, ind) => (
                            <SwiperSlide  key={ind}>
                                <TestimonialCard testimonial={ test } animation={animation[ind]} />
                            </SwiperSlide>
                        ))
                    }
                
            </Swiper>
      </div>
      </section>
    
  )
}
