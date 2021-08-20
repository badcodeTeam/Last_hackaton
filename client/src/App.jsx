import {React} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter';
import Navbar from './Components/Navbar/Navbar';
import {useAuth} from "./utils/hooks/auth.hook"
import {AuthContext} from "./utils/context/Auth.context"

function App() {
  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <BrowserRouter>
    <Navbar/>
      <AppRouter auth={isAuthenticated} />
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
