import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

export default function Header() {
  const [addBgtoHeader, setAddBgtoHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setAddBgtoHeader(true);
    }
    if (window.scrollY === 0) {
      setAddBgtoHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [addBgtoHeader]);

  const setBg = () => {
    if (addBgtoHeader) {
      return {
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      };
    }
  };

  const background = setBg();

  return (
    <header id="header" className={css.header} style={background}>
      <div className={css.headerContainer}>
        <nav className={css.headerNav}>
          <Logo />
          <ul className={css.navMenuList}>
            <li className={css.navMenuItem}>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={css.navMenuLink}
              >
                Home
              </Link>
            </li>
            <li className={css.navMenuItem}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={css.navMenuLink}
              >
                About
              </Link>
            </li>
            <li className={css.navMenuItem}>
              <Link
                to="cases"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={css.navMenuLink}
              >
                Cases
              </Link>
            </li>
            <li className={css.navMenuItem}>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={css.navMenuLink}
              >
                Blog
              </Link>
            </li>
            <li className={css.navMenuItem}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={css.navMenuLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
