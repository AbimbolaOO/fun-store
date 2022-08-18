import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, FormikErrors } from 'formik';
import { capitalizeFirstLetter, splitOnCapitalLetter } from '../utils';

import Box from './Box';
import TertiaryText from './TertiaryText';

interface IFormComponent {
  initialValues: any;
  schema: any;
  onSubmit: any;
  children: React.ReactElement[];
}

interface IFormField {
  type: string;
  id: string;
  label?: boolean;
  touch?: boolean;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];

  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormWrapper = styled(Form)`
  border: 2px solid lavenderblush;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormHeaderText = styled.div`
  font-size: 2rem;
`;

const Input = styled.input`
  border: 0px solid transparent;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const FormContainer = styled(Box)`
  @media screen and (max-width: 1000px) {
    width: 50vw;
  }
  @media screen and (max-width: 800px) {
    width: 60vw;
  }
  @media screen and (max-width: 680px) {
    width: 70vw;
  }
  @media screen and (max-width: 560px) {
    width: 90vw;
  }
  @media screen and (max-width: 450px) {
    width: 96vw;
  }
`;

export const FormError = styled.div`
  font-size: 0.8rem;
  color: red;
`;

export const FormField: React.FC<IFormField> = ({
  type,
  id,
  onChange,
  error,
  touch,
  label = false,
}) => {
  return (
    <Box direction="column" gap="10px">
      {label ? (
        <label htmlFor={id}>
          {capitalizeFirstLetter(splitOnCapitalLetter(id))}
        </label>
      ) : (
        ''
      )}
      <Input
        type={type}
        placeholder={capitalizeFirstLetter(splitOnCapitalLetter(id))}
        id={id}
        onChange={onChange}
      ></Input>
      {touch && error && (
        <FormError>{capitalizeFirstLetter(error as string)}</FormError>
      )}
    </Box>
  );
};

export const FormComponent: React.FC<IFormComponent> = ({
  initialValues,
  schema,
  onSubmit,
  children,
}) => {
  return (
    <FormContainer
      direction="column"
      width="40vw"
      bgColor="#F3F3F3"
      padding="20px 32px"
      margin="100px auto"
      gap="32px"
    >
      <Box direction="column" textAlign="center">
        <FormHeaderText>Login</FormHeaderText>
        <TertiaryText justify="center" paddingTop="0px">
          Please login using account detail bellow.
        </TertiaryText>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <FormWrapper onSubmit={handleSubmit} autoComplete="off" noValidate>
            {React.Children.map(children, (child) => {
              const onChange = handleChange;
              let error = errors[''];
              let touch = touched[''];
              if (child.props.id !== undefined) {
                error = errors[`${child.props.id}`];
                touch = touched[`${child.props.id}`];
              }
              const newChild = React.cloneElement(child, {
                onChange,
                error,
                touch,
              });
              return newChild;
            })}
          </FormWrapper>
        )}
      </Formik>
    </FormContainer>
  );
};

export default FormComponent;
