import { useState } from 'react';
import * as Yup from 'yup';

import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import Box from '../Components/Box';
import Button from '../Components/Button';
import { BasicLink } from '../Components/StyledLinks';

import { FormComponent, FormField } from '../Components/FormComponent';

const LogIn: React.FC = () => {
  const [toggleView, setToggleView] = useState(true);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const forgotPasswordschema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
  });

  type LoginType = Yup.InferType<typeof loginSchema>;
  type ForgotPasswordType = Yup.InferType<typeof forgotPasswordschema>;

  const onSubmitLogin = (values: LoginType) => {
    console.log('login', JSON.stringify(values));
  };

  const onSubmitForgotPassword = (values: ForgotPasswordType) => {
    console.log('forgot password', JSON.stringify(values));
  };

  return (
    <Page title="WhyteShops | Login">
      <Layout23>
        {toggleView ? (
          <FormComponent
            initialValues={{
              email: '',
              password: '',
            }}
            schema={loginSchema}
            onSubmit={onSubmitLogin}
            title="Login"
            description="Please login using account detail bellow."
          >
            <FormField type="text" id="email" />
            <FormField type="password" id="password" />
            <Box justify="space-between">
              <Button type="submit">SIGN IN</Button>
              <Box cursor="pointer" onClick={() => setToggleView(!toggleView)}>
                Forgot your password?
              </Box>
            </Box>
            <BasicLink to="/account/register">Create account</BasicLink>
          </FormComponent>
        ) : (
          <FormComponent
            initialValues={{ email: '' }}
            schema={forgotPasswordschema}
            onSubmit={onSubmitForgotPassword}
            title="Reset Your Password"
            description="We will send you an email to reset your password."
          >
            <FormField type="text" id="email" />
            <Box justify="space-between">
              <Button type="submit">Submit</Button>
              <Box cursor="pointer" onClick={() => setToggleView(!toggleView)}>
                Cancel
              </Box>
            </Box>
          </FormComponent>
        )}
      </Layout23>
    </Page>
  );
};

export default LogIn;
