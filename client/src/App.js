/* eslint-disable no-const-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Gngame from './gngame';

function App() {

  

  return (
    <div className='App'>

       <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/gngame/:token' element={ <Gngame/> }/>
      </Routes>
      </BrowserRouter>
        </div>
        

  );
}

export default App;
