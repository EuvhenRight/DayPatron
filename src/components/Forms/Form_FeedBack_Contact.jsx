import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormField, CheckBoxField, TextField } from './FormField';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import style from './Form_FeedBack_Contact.module.css';
import { useLanguage } from '../Language/LanguageContext';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

const FormFeedBackContact = ({ success, setSuccess }) => {
  const { currentLanguage } = useLanguage();
  const [error, setError] = React.useState(false);
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
      console.log(formik.setErrors);
    } else {
      setError(false);
    }
  }, [formik.setFieldError, error]);

  return (
    <>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <FormField
          type="text"
          name="user_name"
          label={t('form_feedback.user_name')}
          formik={formik}
          errorStyle={style.form__error__name}
        />
        <FormField
          type="email"
          name="user_email"
          label={t('form_feedback.user_email')}
          formik={formik}
          errorStyle={style.form__error__email}
        />
        <FormField
          h="100px"
          type="text"
          name="user_phone"
          label={t('form_feedback.user_phone')}
          formik={formik}
          errorStyle={style.form__error__phone}
        />
        <Text mb={2}>{t('form_feedback.user_message')}</Text>
        <TextField
          name="user_message"
          formik={formik}
          errorStyle={style.form__error__message}
          label={t('form_feedback.user_message')}
        />
        <HStack justifyContent="space-between" alignItems="flex-start" mt={4}>
          <CheckBoxField
            name="user_agreement"
            formik={formik}
            label={t('form_feedback.user_agreement')}
            errorStyle={style.form__error__phone}
          >
            {t('form_feedback.user_agreement')}
          </CheckBoxField>
          <Text>
            <Link
              _hover={{
                textDecoration: 'underline',
              }}
              to={`/${currentLanguage}/help/privacy-policy`}
            >
              {t('form_feedback.privacy')}
            </Link>
          </Text>
        </HStack>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="outline" size="md" type="submit">
            {t('form_feedback.send_button')}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FormFeedBackContact;
