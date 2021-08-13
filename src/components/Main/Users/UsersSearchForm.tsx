import React from "react";
import { Field, Form, Formik } from "formik";
import FormikField from "../../shared/FormikField/FormikField";
import { FilterType } from "../../../Redux/users-reducer";
import {
  StyledButton,
  StyledPreloader,
  StyledContainer,
  StyledSearch,
} from "./Styles";
import { colors } from "../../Styles";

interface IProps {
  onFilterChanged: (filter: FilterType) => void;
}

const initialValues = {
  term: "",
  friend: "null"
} as FormType;

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}


const UsersSearchForm: React.FC<IProps> = React.memo(({ onFilterChanged }) => {
  
  
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === "true" ? true : false
    }

    onFilterChanged(filter);
    setSubmitting(false);
    console.log(values);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={submit}
      //  validationSchema={loginFormSchema}
    >
      {({ isSubmitting, ...props }) => (
        <Form>
          <StyledContainer
            display='flex'
            items='center'
            padding='0.3rem 1.3rem'
            justify='flex-start'
          >
            <StyledSearch>
              <div className='user_box'>
                <FormikField
                  label='Search'
                  name='term'
                  type='search'
                  // required
                />
              </div>
            </StyledSearch>
              <Field style={{width: "5rem", marginBottom:'0.5rem'}}
                  // label='Friend'
                  name='friend'
                  type='select'
                  as="select"
                >
                <option value="null">All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfollowed</option>
                </Field>

            {!isSubmitting && (
              <StyledButton
                bgColor='transparent'
                border={`1px solid ${colors.primary}`}
                colorText={colors.primary}
              >
                Find
              </StyledButton>
            )}
            {isSubmitting && (
              <StyledPreloader>
                <div className='lds-ellipsis'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </StyledPreloader>
            )}
          </StyledContainer>
        </Form>
      )}
    </Formik>
  );
});

export default UsersSearchForm;
