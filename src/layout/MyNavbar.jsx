import { Button, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

export default function MyNavbar() {
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
        <Link to="/login">
          <Button>
            Login
          </Button>
        </Link>
        <Navbar.Toggle />
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


