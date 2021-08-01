import * as Yup from 'yup';

const validationPost = Yup.object({
   newMessageBody: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
 });
export default validationPost;
