import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';

export function FormField({ name, label, formik }) {
  return (
    <FormControl mb={8} isInvalid={formik.touched[name] && formik.errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Input
        _focusVisible={{
          borderColor: 'gray.700',
          _dark: {
            borderColor: 'whiteAlpha.100',
          },
        }}
        name={name}
        {...formik.getFieldProps(name)}
      />
      <FormErrorMessage position="absolute" mb={2}>
        {formik.errors[name]}
      </FormErrorMessage>
    </FormControl>
  );
}

export function CheckBoxField({ name, label, formik }) {
  return (
    <FormControl
      mb={8}
      w="40%"
      isInvalid={formik.touched[name] && formik.errors[name]}
    >
      <Checkbox
        _focusVisible={{
          borderColor: 'gray.700',
          _dark: {
            borderColor: 'whiteAlpha.100',
          },
        }}
        name={name}
        colorScheme="red"
        isChecked={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {label}
      </Checkbox>
      <FormErrorMessage position="absolute">
        {formik.errors[name]}
      </FormErrorMessage>
    </FormControl>
  );
}

export function TextField({ name, formik }) {
  return (
    <FormControl mb={8} isInvalid={formik.touched[name] && formik.errors[name]}>
      <Textarea
        _focusVisible={{
          borderColor: 'gray.700',
          _dark: {
            borderColor: 'whiteAlpha.100',
          },
        }}
        resize="none"
        name={name}
        {...formik.getFieldProps(name)}
      ></Textarea>
      <FormErrorMessage position="absolute">
        {formik.errors[name]}
      </FormErrorMessage>
    </FormControl>
  );
}
