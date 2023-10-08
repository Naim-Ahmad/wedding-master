import { Avatar, Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export default function MyNavbar() {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  
   const  handleLogOut = ()=>{
    logOut()
    .then(() => {
      toast.success('Logout Successful!')
      navigate('/')
    })
    .catch(err => {
      console.log(err)
      toast.error(err.code)
  })
   }
  
  return (
    <Navbar
      fluid
      rounded
      className='shadow-lg fixed w-full z-20'
    >
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Wedding <span className='text-cyan-700'>Boss</span>
        </span>
      </Link>
      <div className="flex md:order-2">
        {
         user && (user.photoURL ? <Avatar className='mr-3' img={user?.photoURL} rounded /> : <h1 className='font-bold pt-2'>{ user.displayName }</h1>)
        }
        <div className='ml-4'>
        {
          user ? 
          <Button onClick={handleLogOut}>
            Logout
          </Button>
          : <Link to="/login">
          <Button>
            Login
          </Button>
        </Link>
        }
        </div>
        <Navbar.Toggle  className='ml-3'/>
      </div>
      <Navbar.Collapse>
        <NavLink to="/">
          <p>
            Home
          </p>
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/pricing">
          Pricing
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}


