import PropTypes from 'prop-types'

function Input({type, name, id, label, placeholder, required, failure }) {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input type={type} name={name} id={id} className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${failure && "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"}`} placeholder={placeholder} required={required} />
      <label htmlFor={name} className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${failure && "text-red-700 dark:text-red-500"}`}>{label}</label>
    
  </div>
  )
}

Input.defaultProps = {
    type: 'text',
    required: false,
  placeholder: " ",
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    message: PropTypes.string,
    failure: PropTypes.bool,
    required: PropTypes.bool,
    
}

export default Input
