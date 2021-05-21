import { Form, Formik, useField } from 'formik';
import React from 'react';
import s from './PostInput.module.css';


const MySpecialField = (values) => {
   const [field] = useField("message");

   return (
      <div>
         <textarea {...field} 
         placeholder="Write Message" 
         // onChange={values.onNewMessageChange} 
         // value={values.newMessageBody} 
         className={s.input}
      />
      </div>
   //    <div className={s.inputBlock}>
   //    <div>
   //       <textarea onChange={onPostChange} 
   //       ref={newPostElement} 
   //       value={props.newPostText}
   //       placeholder={'Write Post'}
   //       className={s.input} />
   //    </div>
   //    <div>
   //       <button onClick={onAddPost} className={s.button}>Add post</button>
   //    </div>
   // </div>
   )
};

const AddPostForm = (props) => {
   const handleSubmit = (values) => {
      console.log(values);
   };
   return (
      <Formik
         initialValues={{
            message: "",
         }}
         onSubmit={handleSubmit}
      >
         {() => {
            return (
               <Form>
                  <MySpecialField />
                  <button
                     type="submit"
                  >
                     Submit
                  </button>
               </Form>
            )
         }}

      </Formik>
   )
}

export default AddPostForm