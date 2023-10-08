import { Button } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export default function SocialAuth() {
  const { continueWithGoogle, continueWithFacebook } = useContext(AuthContext)
  const navigate = useNavigate()
  const {state} = useLocation()
    const handleSocialLogin = (socialLoginFunc) => {
      socialLoginFunc()
        .then(() => {
          toast.success('Login Successful!')
          state ? navigate(state) : navigate('/')
        })
        .catch(err => {
          console.log(err)
          toast.error(err.code)
      })
    }
  return (
    <div className='space-y-3'>
          <Button
              pill
              color="light"
            className='w-full'
            onClick={()=> handleSocialLogin(continueWithFacebook)}
            >
                <FaFacebook className='mr-2 text-xl'/>
                  <p>
                      Continue With facebook
                  </p>
            </Button>
          <Button
            color="light"
            pill
            className='w-full'
            onClick={()=> handleSocialLogin(continueWithGoogle)}
            >
                <FcGoogle className='mr-2 text-xl'/> 
                <p>
                    Continue With Google
                </p>
            </Button>
        </div>
  )
}