import { Avatar, Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export default function MyNavbar() {
  const { user, logOut } = useContext(AuthContext)
  
   const  handleLogOut = ()=>{
    logOut()
    .then(() => {
      toast.success('Logout Successful!')
      
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
      className='shadow-lg'
    >
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Wedding <span className='text-cyan-700'>Boss</span>
        </span>
      </Link>
      <div className="flex md:order-2">
        {
         user && (user.photoURL ? <Avatar className='mr-3' img={user?.photoURL} rounded /> : <h1>{ user.displayName.split(' ')[0] }</h1>)
        }
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


