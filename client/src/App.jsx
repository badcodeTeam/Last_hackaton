import {React} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </>
  );
}

export default App;
