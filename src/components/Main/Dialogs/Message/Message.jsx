import s from './Message.module.css';
import state from './../../../../Redux/state.js'

const Message = (props) => {


   return (
      <div className={s.chat}>
         {/* <div className={s.chat__content}> */}
         <div className={s.item}>
            <div className={s.messagess}>
               <div className={s.ava}>
                  <img src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" alt="logo" className={s.avatar} />
                  <div className={s.message__item}>
                     <div className={s.message}>
                        <div className={s.time}>5:47</div>
                        <div className={s.content}>{state.dialogPage.messages[0].message}</div>
                     </div>
                     
                     {/* <div className={s.message}>
                        <div className={s.time}>5:48</div>
                        <div className={s.content}>{state.dialogPage.messages[1].message}</div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>

         <div className={s.item} className={s.item__responder}>
            <div className={s.messages}>
               <div className={s.ava}>
                  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="logo" className={s.avatar} />
                  <div className={s.message__item}>
                     <div className={s.message}>
                        <div className={s.time}>5:47</div>
                        <div className={s.content}>{state.dialogPage.messages[0].message}</div>
                     </div>
                     <div className={s.message}>
                        <div className={s.time}>5:48</div>
                        <div className={s.content}>{state.dialogPage.messages[2].message}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* </div> */}
      </div>
   )
}

export default Message;