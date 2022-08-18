import * as Yup from 'yup';

import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import Button from '../Components/Button';
import { BasicLink } from '../Components/StyledLinks';

import { FormComponent, FormField } from '../Components/FormComponent';

const Register = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a first name'),
    lastName: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a last name'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  type LoginType = Yup.InferType<typeof schema>;

  type InitialValues = {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
  };

  const initialValues: InitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const onSubmit = (values: LoginType) => {
    console.log(JSON.stringify(values));
  };

  return (
    <Page title="WhyteShops | Register">
      <Layout23>
        <FormComponent
          initialValues={initialValues}
          schema={schema}
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
    </Page>
  );
};

export default Register;
