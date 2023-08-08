import React from 'react';

function FormField({ type, name, label, formik, className, errorStyle }) {
  return (
    <>
      <input
        className={`${className}`}
        type={type}
        placeholder={label}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <p className={`${errorStyle}`}>{formik.errors[name]}</p>
      ) : null}
    </>
  );
}

export default FormField;
