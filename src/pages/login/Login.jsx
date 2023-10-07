
import { Button } from 'flowbite-react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import DividerOr from '../../components/DividerOr'
import Input from '../../components/Input'
import SocialAuth from '../../components/SocialAuth'
import { AuthContext } from '../../contexts/AuthProvider'


export default function Login() {
  const { loginWithEmailAndPassword } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    // create user
    loginWithEmailAndPassword(email, password)
      .then(() => {
        toast.success('Login Successful!')
        navigate('/')
      })
      .catch(err => {
        console.log(err.code)
        if (err.code == 'auth/invalid-login-credentials') {
         return toast.error('Email or Password doesn\'t match!')
        }
        toast.error(err.code)
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
          <div className='border rounded-lg shadow-md p-6'>
              <h1 className="text-3xl font-bold mb-6">Please Login</h1>
            <form onSubmit={handleLogin}>
                    <Input label='Your Email' name="email" required/>
                    <Input type="password" label='Your Password' name="password" required/>
                    <Button type='submit' className='w-full'>
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
