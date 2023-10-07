
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import DividerOr from '../../components/DividerOr'
import Input from '../../components/Input'
import SocialAuth from '../../components/SocialAuth'

export default function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
          <div className='border rounded-lg shadow-md p-6'>
              <h1 className="text-3xl font-bold mb-6">Please Login</h1>
            <form>
                    <Input label='Your Email' name="email" required/>
                    <Input type="password" label='Your Password' name="password" required/>
                    <Button className='w-full'>
                        Login   
                    </Button>
                    <div className='mt-6'>
                        <p>Don’t have an account? <Link to='/register' className='text-cyan-700'>Create an account</Link></p>
                    </div>
              </form>
              <DividerOr />
              <SocialAuth/>
          </div>
    </div>
  )
}
