import s from './UserResponder.module.css';

const UserResponder = (props) => {
   return (
      <div className={s.item__responder}>
         <div className={s.messages}>
            <div className={s.message__block}>
               <img src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" alt="logo" className={s.avatar} />
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


export default UserResponder;