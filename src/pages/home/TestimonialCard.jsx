import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';


function TestimonialCard({ testimonial, animation }) {
    const { wife, husband, testimonial: text, name } = testimonial;
  return (
      <div data-aos={animation} className=' h-[60vh] flex items-center'>
            <div className="w-full backdrop-blur border rounded-3xl relative px-12 pt-16">
              <div className='absolute -top-10 left-44 flex items-center gap-6'>
                  <Avatar img={husband} size="lg" rounded />
                  <AiOutlinePlus  className='text-white text-4xl'/>
              <Avatar img={wife} size="lg"  rounded/>
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
