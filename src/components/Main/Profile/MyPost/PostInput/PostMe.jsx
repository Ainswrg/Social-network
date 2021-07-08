import { Formik, Form } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import FormikField from "../../../../shared/FormikField/FormikField";
import { colors, StyledButton, TextArea } from "../../../../Styles";

const validationPost = Yup.object({
   newPost: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
})


const PostForm = (props) => {
   return (
      <>
         <h1>My Post</h1>
         <Formik
            enableReinitialize
            initialValues={props.initialValues}
            validationSchema={validationPost}
            onSubmit={props.handleSubmit}
         >
            {({ isSubmitting }) => (
               <Form>
                  <TextArea >
                     <FormikField
                        type="textarea"
                        label="New Post"
                        name="newPost"
                        rows="6"
                        placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                     />
                  </TextArea>
                  

                  {!isSubmitting && (
                     <StyledButton 
                        type="submit"
                        radius={"2px"}
                        bgColor={colors && colors.blue4}
                        padding={"8px 25px"}
                     >
                        Submit
                     </StyledButton>
                  )}
                  {isSubmitting && (
                     <Loader
                        type="ThreeDots"
                        color={colors && colors.blue4}
                        height={49}
                        width={100}
                     />
                  )}
                  
               </Form>
            )}
         </Formik>
      </>
   );
};

export default PostForm;
