import './App.css';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings';
import News from './components/Main/News/News';
import { Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';
import UsersContainer from './components/Main/Users/UsersContainer';
import ProfileContainer from './components/Main/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';



const App = (props) => {
   return (
         <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer /> 
            <div className='app-wrapper-content'>
               <Route path='/profile/:userId?' 
                  render={() => < ProfileContainer />} />
               <Route path='/dialogs' 
                  render={() => < DialogsContainer />} />
               <Route path='/news' render={() => < News/>}  />
               <Route path='/music' render={() => < Music/>}  />
               <Route path='/settings' render={() => < Settings/>}  />
               <Route path='/users' 
                  render={() => <UsersContainer /> } />
               <Route path='/login' 
                  render={() => <Login /> } />
            </div>
         </div>
   );
}

export default App;
