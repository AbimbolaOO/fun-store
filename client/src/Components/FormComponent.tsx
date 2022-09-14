import { Form, Formik, FormikErrors } from 'formik';
import React from 'react';

import styled from '@emotion/styled';

import { capitalizeFirstLetter, splitOnCapitalLetter } from '../utils';
import Box from './Box';
import TertiaryText from './TertiaryText';

export const Textarea: React.FC<ITextarea> = ({
  id,
  onChange,
  error,
  touch,
  gridColumn,
}) => {
  return (
    <FieldBox gridColumn={gridColumn as string}>
      <TextareaStyle
        rows={4}
        cols={0}
        placeholder={`${capitalizeFirstLetter(splitOnCapitalLetter(id))}*`}
        id={id}
        onChange={onChange}
      ></TextareaStyle>
      {touch && error && (
        <FormError>{capitalizeFirstLetter(error as string)}</FormError>
      )}
    </FieldBox>
  );
};

export const FormField: React.FC<IFormField> = ({
  type,
  id,
  onChange,
  error,
  touch,
  label = false,
  styleType,
  gridColumn,
}) => {
  return styleType !== 'clear' ? (
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
  ) : (
    <FieldBox gridColumn={gridColumn as string}>
      <ClearInput
        type={type}
        placeholder={`${capitalizeFirstLetter(splitOnCapitalLetter(id))}*`}
        id={id}
        onChange={onChange}
      ></ClearInput>
      {touch && error && (
        <FormError>{capitalizeFirstLetter(error as string)}</FormError>
      )}
    </FieldBox>
  );
};

export const FormComponent: React.FC<IFormComponent> = ({
  initialValues,
  schema,
  onSubmit,
  children,
  bgColor,
  styleType,
  title,
  description,
}) => {
  return styleType !== 'clear' ? (
    <FormContainer
      direction="column"
      width="40vw"
      bgColor={bgColor ? bgColor : '#F3F3F3'}
      padding="20px 32px"
      margin="100px auto"
      gap="32px"
    >
      <Box direction="column" textAlign="center">
        <FormHeaderText>{title}</FormHeaderText>
        <WrappedTertiaryText justify="center" paddingTop="0px">
          {description}
        </WrappedTertiaryText>
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
  ) : (
    <FormContainerClear
      direction="column"
      width="40vw"
      bgColor={bgColor ? bgColor : '#F3F3F3'}
      padding="20px 32px"
      margin="0px auto 100px"
      gap="32px"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <FormWrapperClear
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
          >
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
          </FormWrapperClear>
        )}
      </Formik>
    </FormContainerClear>
  );
};

export default FormComponent;

// === interfaces
interface IFormComponent {
  initialValues: any;
  schema: any;
  onSubmit: any;
  children: React.ReactElement[];
  bgColor?: string;
  styleType?: string;
  title?: string;
  description?: string;
}

interface IFormField {
  type: string;
  id: string;
  label?: boolean;
  touch?: boolean;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  styleType?: string;
  gridColumn?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

interface ITextarea {
  gridColumn?: string;
  id: string;
  touch?: boolean;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

interface IFieldBox {
  gridColumn?: string;
  // align?: string;
}

// === styles
const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormWrapperClear = styled(Form)`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 50%);

  @media screen and (max-width: 760px) {
    grid-template-columns: auto;
  }
`;

export const FieldBox = styled(Box)<IFieldBox>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-column: ${({ gridColumn }) => (gridColumn ? gridColumn : 'auto')};

  @media screen and (max-width: 760px) {
    grid-column: auto;
  }
`;

const FormHeaderText = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const WrappedTertiaryText = styled(TertiaryText)`
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  border: 0px solid transparent;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const ClearInput = styled.input`
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #a8a8a8;
  border-radius: 4px;
  padding-bottom: 10px;
  font-size: 0.9rem;

  &:focus {
    border-color: none;
    outline: none;
  }

  &:hover {
    border-bottom: 2px solid #464545;
  }
`;

export const TextareaStyle = styled.textarea`
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #a8a8a8;
  border-radius: 1px;
  padding-bottom: 8px;
  font-size: 0.9rem;

  &:focus {
    border-color: none;
    outline: none;
  }

  &:hover {
    border-bottom: 2px solid #464545;
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

const FormContainerClear = styled(Box)`
  width: 60vw;

  @media screen and (max-width: 960px) {
    width: 80vw;
  }

  @media screen and (max-width: 620px) {
    width: 96vw;
  }
`;
export const FormError = styled.div`
  font-size: 0.8rem;
  color: red;
`;
