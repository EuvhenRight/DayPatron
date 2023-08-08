import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import style from './Form_FeedBack_Contact.module.css';

const FormFeedBackContact = ({ success, setSuccess }) => {
  const form = useRef();
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(t('form_feedback.user_error_name')),
    user_email: Yup.string()
      .email(t('form_feedback.user_error_email'))
      .required(t('form_feedback.user_error_email_2')),
    user_message: Yup.string().required(t('form_feedback.user_error_message')),
    user_agreement: Yup.boolean().oneOf(
      [true],
      t('form_feedback.user_error_agreement')
    ),
  });

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      user_message: '',
      user_agreement: false, // Initialize the checkbox value
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .sendForm(
          'service_jw7bv65',
          'template_0pkmusj',
          form.current, // Use the ref to access the form element
          '88xJY5NkpjvnKQzBs'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            resetForm(); // Reset the form after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  React.useEffect(() => {
    if (formik.setErrors) {
      formik.setFieldError('user_name', t('form_feedback.user_error_name'));
      formik.setFieldError('user_email', t('form_feedback.user_error_email'));
      formik.setFieldError(
        'user_message',
        t('form_feedback.user_error_message')
      );
      formik.setFieldError(
        'user_agreement',
        t('form_feedback.user_error_agreement')
      );
    }
  }, [t, formik.setFieldError]);

  return (
    <>
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className={style.contact__form}
      >
        <FormField
          className={style.contact__form__name}
          type="text"
          name="user_name"
          label={t('form_feedback.user_name')}
          formik={formik}
          errorStyle={style.form__error__name}
        />
        <FormField
          className={style.contact__form__email}
          type="email"
          name="user_email"
          label={t('form_feedback.user_email')}
          formik={formik}
          errorStyle={style.form__error__email}
        />
        <FormField
          className={style.contact__form__phone}
          type="text"
          name="user_phone"
          label={t('form_feedback.user_phone')}
          formik={formik}
          errorStyle={style.form__error__phone}
        />
        <FormField
          className={style.contact__form__message}
          type="text"
          name="user_message"
          label={t('form_feedback.user_message')}
          formik={formik}
          errorStyle={style.form__error__message}
        />
        <div className={style.contact__agreement__wrapper}>
          <FormField
            className={style.contact__form__agreement}
            type="checkbox"
            name="user_agreement"
            label={t('form_feedback.user_agreement')}
            formik={formik}
            errorStyle={style.form__error__agreement}
          />
        </div>
        <div className={style.contact__bottom__wrapper}>
          <span>
            Я прочитав
            <Link to="/privacy-policy">політику конфіденційності</Link> та
            погоджуюся.
          </span>
          <button className={style.contact__form__button} type="submit">
            {t('form_feedback.send_button')}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFeedBackContact;
