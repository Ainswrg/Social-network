import s from './Button.module.css';

const Button = (props) => {

   return (
      <div>
         <button className={s.button}>Add post</button>
      </div>
   )
}

export default Button;