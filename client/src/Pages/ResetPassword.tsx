import * as Yup from 'yup';

import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import Button from '../Components/Button';

import { FormComponent, FormField } from '../Components/FormComponent';

const ResetPassword: React.FC = () => {
  const schema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('re-enter new password'),
  });

  type LoginType = Yup.InferType<typeof schema>;

  const onSubmitLogin = (values: LoginType) => {
    console.log('reset password', JSON.stringify(values));
  };

  return (
    <Page title="WhyteShops | Reset password">
      <Layout23>
        <FormComponent
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          schema={schema}
          onSubmit={onSubmitLogin}
          title="Reset Account Password"
          description="Enter a new password for abimbolaolayemiwhyte@gmail.com"
        >
          <FormField type="password" id="password" label />
          <FormField type="password" id="confirmPassword" label />
          <Button type="submit">Reset Password</Button>
        </FormComponent>
      </Layout23>
    </Page>
  );
};

export default ResetPassword;
