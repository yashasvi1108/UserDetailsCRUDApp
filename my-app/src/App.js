import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import CrudApp from './components/CrudApp';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUsers';

import {BrowserRouter,Routes,Route} from 'react-router-dom';




function App() {
  return (
    <div>
    <BrowserRouter>
     
     <NavBar/>
     <Routes>
     <Route path='/' element={<CrudApp/>}/>
     <Route path='/all' element={<AllUsers/>} />
     <Route path='/add' element={<AddUser/>} />
   <Route path='/edit/:id' element={<EditUser/>} /> 
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
