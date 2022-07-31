import { FaBookOpen } from 'react-icons/fa';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <a className={css.logo} href="/">
      <FaBookOpen id="logo" width="40" height="35" className={css.logoIcon} />
      <span className={css.logoText}>Finance</span> Ledger
    </a>
  );
}
