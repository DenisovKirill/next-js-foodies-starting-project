import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navLink/NavLink';
import MainHeaderBackground from './mainHeaderBackground/MainHeaderBackground';

import logoImage from '@/assets/logo.png';
import styles from './mainHeader.module.scss';

export default function MainHeader() {
  const { header, logo, nav, active } = styles;
  return (
    <>
      <MainHeaderBackground />
      <header className={header}>
        <Link className={logo} href={'/'}>
          <Image src={logoImage} alt={'A plate with food on it'} />
          NextLevel Food
        </Link>

        <nav className={nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
