import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const { _id, image_url, title, details, animation } = service;

    const bgImage = {
        backgroundImage: `url('${image_url}')`
    }
  return (
    <div data-aos={animation}>
      <Card
    imgAlt={ title }
    className={`bg-image text-white`}
    style={bgImage}
  >
    <Link to={`/details/${_id}`}>
      <h5 className="text-xl font-semibold tracking-tight dark:text-white">
        <p className='text-center md:text-xl xl:text-3xl'>
          {title}
        </p>
      </h5>
    </Link>
    <div className="mb-5 mt-2.5 flex items-center">
        <p className='text-justify'>{ details?.description.slice(0, 190)}...</p>
    </div>
    <div className="flex justify-center items-center gap-8">
      
      <Link
        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        to={`/details/${_id}`}
      >
        <p>
          See Details
        </p>
      </Link>
    </div>
    </Card>
    </div>
  )
}

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard
