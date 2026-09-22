

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {



  return (

    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>

          <Image src={logoImg} alt="Logo" priority />
          Music Reviews
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/reviews">Browse Reviews</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>


      </header>
    </>
  );
}
