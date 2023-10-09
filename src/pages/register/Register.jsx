import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DividerOr from "../../components/DividerOr";
import Input from "../../components/Input";
import SocialAuth from "../../components/SocialAuth";
import { AuthContext } from "../../contexts/AuthProvider";

const filedValidation = {
  email: false,
  password: false
}

const strongPassword = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/

export default function Register() {
  const [failure, setFailure] = useState(filedValidation)
  const { registerWithEmailAndPassword, setUserName } = useContext(AuthContext)
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')

    setFailure(filedValidation)

    // validation

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!')
      return setFailure({ ...failure, password: true })
    }

    if (!strongPassword.test(password)) {
      toast.error(`Password must contain at least one special character (@, #, $, %, ^, &, +, =, or !) and at least one capital letter.`)
      return setFailure({ ...failure, password: true })
    }

    // create user
    registerWithEmailAndPassword(email, password)
      .then(() => {
        setUserName(name)
          .then(() => {
            toast.success('Registration Successful!')
            state ? navigate(state) : navigate('/')
          })
          .catch(err => {
            console.log(err)
            toast.error(err.code)
        })
      })
      .catch(err => {
        console.log(err)
        toast.error(err.code)
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
          <div className='border rounded-lg shadow-md p-6'>
              <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
            <form onSubmit={handleRegister}>
                    <Input label='Your Name' name="name" required/>
                    <Input label='Your Email' name="email" failure={failure.email} required/>
                    <Input type="password" label='Your Password' name="password" failure={failure.password}  required/>
                   
                    <Button type="submit" className='w-full'>
                        Register   
                    </Button>
                    <div className='mt-6'>
                        <p>Already have an account? <Link to='/login' className='text-cyan-700'>Create an account</Link></p>
                    </div>
              </form>
              <DividerOr />
              <SocialAuth/>
          </div>
    </div>
  )
}
