import { Spinner as Loading } from "flowbite-react"
import PropTypes from 'prop-types'

export default function Spinner({className}) {
  return (
      <div className={`flex justify-center text-center items-center min-h-screen ${className}`}>
          <Loading size="xl" />
      </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string
}
