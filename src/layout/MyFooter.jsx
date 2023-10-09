'use client';

import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function MyFooter() {
  return (
    <Footer container>
      <Footer.Copyright
        by="Wedding Master"
        href="#"
        year={2023}
        color='dark'
      />
      <Footer.LinkGroup>
          <Link className='mr-3' to="/gallery">
            Gallery
          </Link>
          <Link to="/dashboard">
            Dashboard
          </Link>
      </Footer.LinkGroup>
    </Footer>
  )
}


