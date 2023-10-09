'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

export default function MyFooter() {
  return (
    <Footer className='w-full bg-gray-200' container>
      <div className="">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-6">
          <div>
          <Footer.Title title="Office Address"/>
            <Footer.LinkGroup >
              <div className='flex flex-col space-y-2'>
              <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p>Phone: 0192923923</p>
                <p>Email: weddingmaster@gmail.com</p>
               </div>
            </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="pages" />
              <Footer.LinkGroup col>
                <NavLink to="/gallery">
                  Gallery
                </NavLink>
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink to="/register">
                  Register
                </NavLink>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Link>
                  Github
                </Link>
                <Link>
                  Discord
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link>
                  Privacy Policy
                </Link>
                <Link>
                  Terms & Conditions
                </Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Wedding Master™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            
          </div>
        </div>
      </div>
    </Footer>
  )
}


