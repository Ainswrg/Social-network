import './App.css';
import Header from './components/Header/Header';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings';
import Profile from './components/Main/Profile/Profile';
import News from './components/Main/News/News';
import { Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';



const App = (props) => {
   return (
         <div className='app-wrapper'>
            <Header />
            <NavbarContainer /> 
            <div className='app-wrapper-content'>
               <Route path='/profile' 
                  render={() => < Profile />} />
               <Route path='/dialogs' 
                  render={() => < DialogsContainer />} />
               <Route path='/news' render={() => < News/>}  />
               <Route path='/music' render={() => < Music/>}  />
               <Route path='/settings' render={() => < Settings/>}  />
            </div>
         </div>
   );
}

export default App;
