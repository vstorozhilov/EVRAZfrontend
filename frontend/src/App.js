import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Mnemoschema from './components/Mnemoschema';


function App() {

  return   <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height : 'inherit'
      }}>
        <Header/>
        <Routes>
            <Route path='/main' element={<Main/>}/>
            <Route path='/mnemoschema' element={<Mnemoschema/>}/>
        </Routes>
        {/* <Main/> */}
      </div>
  </>;
}

export default App;
