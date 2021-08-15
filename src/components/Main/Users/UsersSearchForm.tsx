import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterType } from '../../../Redux/users-reducer';
import { getUsersFilter } from '../../../Redux/users-selectors';
import FormikField from '../../shared/FormikField/FormikField';
import { colors } from '../../Styles';
import {
  ButtonSearch,
  SearchUsers,
  Select,
  StyledButton,
  StyledContainer,
  StyledIconSearch,
  StyledIconSearchClose,
  StyledPreloader,
  StyledSearch
} from './Styles';


const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type FriendFormType = "true" | "false" | "null";

interface FormType {
  term: string;
  friend: "true" | "false" | "null";
}

interface IProps {
  onFilterChanged: (filter: FilterType) => void;
}

const UsersSearchForm: React.FC<IProps> = React.memo(({ onFilterChanged }) => {
  const filter = useSelector(getUsersFilter);

  const initialValues = {
    term: filter.term,
    friend: String(filter.friend) as FriendFormType,
  };

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend:
        values.friend === "null"
          ? null
          : values.friend === "true"
          ? true
          : false,
    };
    onFilterChanged(filter);
    setSubmitting(false);
    // values.term = ''
  };
  const [click, setClick] = React.useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setClick(!click);
  };

  return (
    <Formik 
      enableReinitialize 
      initialValues={initialValues}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledContainer
            display='flex'
            items='center'
            padding='0rem 1.3rem'
            justify='flex-start'
          >
            <StyledSearch clicked={click}>
              <ButtonSearch
                onClick={(e: any) => handleClick(e)}
                id='search_submit'
              >
                {click ? <StyledIconSearchClose /> : <StyledIconSearch />}
              </ButtonSearch>
              <FormikField
                name='term'
                type='search'
                placeholder="What're we looking for ?"
              />
            </StyledSearch>
            <Select clicked={click}>
              <Field name='friend' type='select' as='select'>
                <option value='null'>All</option>
                <option value='true'>Followed</option>
                <option value='false'>Unfollowed</option>
              </Field>
            </Select>
            {!isSubmitting && (
              <StyledButton
                clicked={click}
                bgColor='transparent'
                colorText={colors.primary}
                type='submit'
              >
                <SearchUsers />
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
