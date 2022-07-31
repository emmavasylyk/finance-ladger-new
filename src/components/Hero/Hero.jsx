import { FaAngleRight } from 'react-icons/fa';
import Button from '../Button/Button';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={css.hero}>
      <h1 className={css.heroTitle}>The Sky Is The Limit</h1>
      <p className={css.heroText}>
        We provide world class financial assistance
      </p>
      <Button type="button" className={css.heroButton}>
        <FaAngleRight />
        Read More
      </Button>
    </section>
  );
}
