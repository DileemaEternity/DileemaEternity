import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';

import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/dialogs/*' element={<DialogsContainer />} />
          <Route path='/Profile/Profile' element={<Profile />} />
          {/* <Route path='/News/News' element={<News />} />
          <Route path='/Music/Music' element={<Music />} />
          <Route path='/Settings/Settings' element={<Settings />} /> */}
          {/* Код в App.js будет <Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
