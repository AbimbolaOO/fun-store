import * as Yup from 'yup';

import Layout23 from '../Layouts/Layout23';
import Button from '../Components/Button';
import { BasicLink } from '../Components/StyledLinks';

import { FormComponent, FormField } from '../Components/FormComponent';

const Register = () => {
  const loginSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a first name'),
    lastName: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a last name'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  type LoginType = Yup.InferType<typeof loginSchema>;

  const initialValues: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const onSubmit = (values: LoginType) => {
    console.log(JSON.stringify(values));
  };

  return (
    <Layout23>
      <FormComponent
        initialValues={initialValues}
        loginSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <FormField type="text" id="firstName" label={true} />
        <FormField type="text" id="lastName" label={true} />
        <FormField type="text" id="email" label={true} />
        <FormField type="password" id="password" label={true} />
        <Button type="submit">SIGN IN</Button>
        <BasicLink to="/">Return to store</BasicLink>
      </FormComponent>
    </Layout23>
  );
};

export default Register;
