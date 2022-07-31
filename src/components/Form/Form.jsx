import css from './Form.module.css';

export default function Form() {
  return (
    <form name="contact" method="POST" data-netlify="true" className={css.form}>
      <div className={css.formField}>
        <input
          id="name"
          className={css.formInput}
          type="text"
          name="name"
          placeholder=" "
        />
        <label htmlFor="name" className={css.formLabel}>
          Enter your name
        </label>
      </div>
      <div className={css.formField}>
        <input
          id="email"
          className={css.formInput}
          type="email"
          name="email"
          placeholder=" "
        />
        <label htmlFor="email" className={css.formLabel}>
          Enter email*
        </label>
        <p className={`${css.formInputRequired} ${css.visuallyHidden}`}>
          This is a required field
        </p>
      </div>
      <button className={css.formButton} type="submit">
        Send
      </button>
    </form>
  );
}
