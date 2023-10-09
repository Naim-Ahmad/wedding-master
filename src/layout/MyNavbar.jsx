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
        <span className="self-center whitespace-nowrap text-sm sm: font-bold text-xl font-semibold dark:text-white">
         Wedding <span className='text-cyan-700'>Master</span>
        </span>
      </Link>
      <div className="flex md:order-2">
        {
         user && (user.photoURL ? <Avatar className='sm:mr-3' img={user?.photoURL} rounded /> : <h1 className='font-bold pt-2'>{ user.displayName }</h1>)
        }
        <div className='ml-4 hidden sm:block'>
        {
          user ? 
          <Button onClick={handleLogOut}>
            Sign out
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
        <NavLink to="/gallery">
          Gallery
        </NavLink>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
        {
          user ? 
          <Button className='sm:hidden' onClick={handleLogOut}>
            Sign out
          </Button>
          : <Link to="/login">
          <Button className='sm:hidden'>
            Login
          </Button>
        </Link>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}


