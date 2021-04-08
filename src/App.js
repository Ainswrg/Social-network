import './App.css';
import Dialogs from './components/Main/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings';
import Profile from './components/Main/Profile/Profile';
import News from './components/Main/News/News';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {

   return (
         <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state.sideBar}/>
            <div className='app-wrapper-content'>
               <Route path='/profile' 
                  render={() => < Profile 
                  profilePage={props.state.profilePage} 
                  addPost={props.addPost} 
                  updateNewPostText={props.updateNewPostText}/>} />
               <Route path='/dialogs' 
                  render={() => < Dialogs  state={props.state.dialogPage}/>} />
               <Route path='/news' render={() => < News/>}  />
               <Route path='/music' render={() => < Music/>}  />
               <Route path='/settings' render={() => < Settings/>}  />
            </div>
         </div>
   );
}

export default App;
