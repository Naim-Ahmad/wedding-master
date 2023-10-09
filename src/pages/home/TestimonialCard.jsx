import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';


function TestimonialCard({ testimonial, animation }) {
    const {  husband, testimonial: text, name } = testimonial;
  return (
      <div data-aos={animation} className='min-h-[90vh] md:h-[60] px-2 flex items-center '>
            <div className="w-full backdrop-blur border rounded-3xl relative px-12 pt-16">
              <div className='absolute -top-10 left-[50%] min-w-fit -translate-x-1/2 flex items-center gap-6'>
                  <Avatar img={husband} size="lg" rounded />
                </div>
                <p className='text-white'>{ text}</p>
                <h1 className='text-cyan-700 text-lg font-bold text-center mt-6 pb-10'>{name}</h1>
            </div>
        </div>
  )
}

TestimonialCard.propTypes = {
    testimonial: PropTypes.object,
    animation: PropTypes.string,
 
}

export default TestimonialCard
