import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <ul className={css.footerSocialList}>
        <li className={css.socialItem}>
          <a
            href="https://www.facebook.com/"
            target="blank"
            aria-label="facebook"
          >
            <FaFacebook className={css.socialIcon} />
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            href="https://www.twitter.com/"
            target="blank"
            aria-label="twitter"
          >
            <FaTwitter className={css.socialIcon} />
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            href="https://www.youtube.com/"
            target="blank"
            aria-label="youtube"
          >
            <FaYoutube className={css.socialIcon} />
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            href="https://www.linkedin.com/"
            target="blank"
            aria-label="linkedin"
          >
            <FaLinkedinIn className={css.socialIcon} />
          </a>
        </li>
      </ul>
      <p className={css.footerText}>Copyright &#169; 2021 - FinanceLedger</p>
    </footer>
  );
}
