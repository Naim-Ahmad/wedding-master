
import { Button } from 'flowbite-react'
import { Link, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()

  return (
      <div className='flex justify-center items-center space-y-3 flex-col min-h-screen'>
          <h1 className="text-8xl font-extrabold">{error.status}</h1>
          <p className="text-3xl font-semibold">{error.statusText}</p>
          <Button>
              <Link to="/">Go Home</Link>
          </Button>
    </div>
  )
}