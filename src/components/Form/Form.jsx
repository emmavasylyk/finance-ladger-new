import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { sendFormNetlify } from '../../services/formNetlify';
import css from './Form.module.css';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
});

export default function FormContact() {
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
  );
}
