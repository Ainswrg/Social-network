import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" alt="logo"></img>
      </header>
      <nav className='nav'>
        <ul>
          <li className="c"><a>Profile</a></li>
          <li><a>Message</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
      </ul>
      </nav>
      <main className='content'>
        <div className="jumbotron"> </div>
        <div>
        ava + description
        </div>
        <div>
          My post
        </div>
        <div>
            New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
        
      </main>


    </div>
  );
}

export default App;
