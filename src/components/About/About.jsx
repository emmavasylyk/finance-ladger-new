import Button from '../Button/Button';
import css from './About.module.css';

export default function About() {
  return (
    <section id="about" className={css.about}>
      <div className={css.aboutWrapper}>
        <h3 className={css.aboutQuestion}>What you are looking for</h3>
        <h2 className={css.aboutTitle}>We provide bespoke solutions</h2>
        <p className={css.aboutText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button type="button" className={css.aboutButton}>
          Read More
        </Button>
      </div>
    </section>
  );
}
