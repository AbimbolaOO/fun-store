import * as Yup from 'yup';

import Layout23 from '../Layouts/Layout23';
import Box from '../Components/Box';
import Button from '../Components/Button';
import { BasicLink } from '../Components/StyledLinks';

import { FormComponent, FormField } from '../Components/FormComponent';

const LogIn: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  type LoginType = Yup.InferType<typeof schema>;

  type InitialValues = {
    email: String;
    password: String;
  };

  const initialValues: InitialValues = {
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
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormField type="text" id="email" />
        <FormField type="password" id="password" />
        <Box justify="space-between">
          <Button type="submit">SIGN IN</Button>
          <BasicLink to="/">Forgot your password?</BasicLink>
        </Box>
        <BasicLink to="/account/register">Create account</BasicLink>
      </FormComponent>
    </Layout23>
  );
};

export default LogIn;
