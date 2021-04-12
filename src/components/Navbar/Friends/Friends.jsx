// import Menu from './Menu/Menu';
import s from './Navbar.module.css';

const Friends = () => {
   return (
      <nav className={s.nav}>
         <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.items}>
               <div className={s.item}>a</div>
               <div className={s.item}>a</div>
               <div className={s.item}>a</div>
            </div>
         </div>
      </nav>
   )
}

export default Friends;