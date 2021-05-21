import { Form, Formik, useField } from 'formik';
import React from 'react';
import s from './MessageInput.module.css';


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
      
   )
};

const AddMessageForm = (props) => {
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

export default AddMessageForm