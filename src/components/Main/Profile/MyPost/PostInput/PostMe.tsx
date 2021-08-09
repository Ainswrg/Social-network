import { Formik, Form } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import FormikField from "../../../../shared/FormikField/FormikField";
import { colors, StyledButton, TextArea } from "../../Styles";
import { InitialValuesType } from "../MyPosts";

const validationPost = Yup.object({
   newPost: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
})

interface PropsType {
   initialValues: InitialValuesType
   handleSubmit: any
}

const PostForm:React.FC<PropsType> = ({initialValues, handleSubmit}) => {
   return (
      <>
         <h1>My Post</h1>
         <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationPost}
            onSubmit={handleSubmit}
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
                        border={"2px"}
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
