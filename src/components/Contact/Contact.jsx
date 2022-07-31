import FormContact from '../Form/Form';
import css from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={css.contact}>
      <div className={css.contactContainer}>
        <div className={css.contactWrapper}>
          <h2 className={css.contactTitle}>Request Callback</h2>
          <FormContact />
        </div>
      </div>
    </section>
  );
}
