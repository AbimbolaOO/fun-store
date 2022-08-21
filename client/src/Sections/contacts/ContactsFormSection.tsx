import * as Yup from 'yup';

import {
  FormComponent,
  FormField,
  Textarea,
  FieldBox,
} from '../../Components/FormComponent';
import Button from '../../Components/Button';

function ContactsFormSection() {
  const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').required('Please provide a name'),
    email: Yup.string().email().required('Email is required'),
    subject: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a subject'),
    message: Yup.string()
      .min(2, 'Too short')
      .required('Please provide a message'),
  });

  type LoginType = Yup.InferType<typeof schema>;

  type InitialValues = {
    name: String;
    email: String;
    subject: String;
    message: String;
  };

  const initialValues: InitialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const onSubmit = (values: LoginType) => {
    console.log(JSON.stringify(values));
  };
  return (
    <FormComponent
      initialValues={initialValues}
      schema={schema}
      onSubmit={onSubmit}
      bgColor="none"
      styleType="clear"
    >
      <FormField type="text" id="name" label={true} styleType="clear" />
      <FormField type="text" id="email" label={true} styleType="clear" />
      <FormField
        type="text"
        id="subject"
        label={true}
        styleType="clear"
        gridColumn="1/span 2"
      />
      <Textarea id="message" gridColumn="1/span 2" />
      <FieldBox gridColumn="1/span 2" align="center">
        <Button type="submit">SIGN IN</Button>
      </FieldBox>
    </FormComponent>
  );
}

export default ContactsFormSection;
