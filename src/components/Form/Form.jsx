import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { sendFormNetlify } from '../../services/formNetlify';
import css from './Form.module.css';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  // .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
});

export default function FormContact() {
  // const createUser = credentials => {
  //   sendFormNetlify(credentials);
  // };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, onSubmitProps) => {
        sendFormNetlify(values);
        onSubmitProps.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form} method="POST" data-netlify="true">
          <div className={css.formField}>
            <Field
              name="name"
              type="text"
              placeholder=" "
              className={css.formInput}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label className={css.formLabel}>Enter your name</label>
          </div>
          <div className={css.formField}>
            <Field
              name="email"
              type="email"
              placeholder=" "
              className={css.formInput}
            />
            {errors.email && touched.email ? (
              <div className={css.formInputRequired}>{errors.email}</div>
            ) : null}
            <label className={css.formLabel}>Enter email*</label>
          </div>

          <button className={css.formButton} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
    // <form name="contact" method="POST" data-netlify="true" className={css.form}>
    //   <div className={css.formField}>
    //     <input
    //       id="name"
    //       className={css.formInput}
    //       type="text"
    //       name="name"
    //       placeholder=" "
    //     />
    //     <label htmlFor="name" className={css.formLabel}>
    //       Enter your name
    //     </label>
    //   </div>
    //   <div className={css.formField}>
    //     <input
    //       id="email"
    //       className={css.formInput}
    //       type="email"
    //       name="email"
    //       placeholder=" "
    //     />
    //     <label htmlFor="email" className={css.formLabel}>
    //       Enter email*
    //     </label>
    //     <p className={`${css.formInputRequired} ${css.visuallyHidden}`}>
    //       This is a required field
    //     </p>
    //   </div>
    //   <button className={css.formButton} type="submit">
    //     Send
    //   </button>
    // </form>
  );
}
