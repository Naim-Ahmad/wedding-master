import PropTypes from 'prop-types'
import { SwiperSlide } from 'swiper/react'

function Slider({ url }) {
    console.log(url)
  return (
      <SwiperSlide>
          <img className="w-full" src="https://i.ibb.co/MGmDWj1/wife-min.jpg" alt="" />
      </SwiperSlide>
  )
}

Slider.propTypes = {
    url: PropTypes.string
}

export default Slider
