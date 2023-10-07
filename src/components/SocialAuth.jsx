import { Button } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../contexts/AuthProvider';

export default function SocialAuth() {
    const { continueWithGoogle, continueWithFacebook } = useContext(AuthContext)
    
    const handleSocialLogin = (socialLoginFunc) => {
        socialLoginFunc()
            .then(userCredential => {
                console.log(userCredential.user)
                toast.success('Login Succuss!')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
        })
    }
  return (
    <div className='space-y-3'>
          <Button
                  pill
              className='w-full'
              onClick={()=> handleSocialLogin(continueWithFacebook)}
              >
                    <FaFacebook />
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
                  <FcGoogle /> 
                  <p>
                      Continue With Google
                  </p>
              </Button>
        </div>
  )
}