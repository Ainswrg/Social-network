import s from './User.module.css';

const User = (props) => {
   return (
      <div className={s.item}>
         <div className={s.messages}>
            <div className={s.message__block}>
               <img src="https://www.w3schools.com/howto/img_avatar.png" alt="logo" className={s.avatar} />
               <div className={s.message__item}>
                  <div className={s.message}>
                     <div className={s.time}>{props.time}</div>
                     <div className={s.content}>{props.message}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default User;