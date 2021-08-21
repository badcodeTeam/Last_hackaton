import {React} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter';
import Navbar from './Components/Navbar/Navbar';
import {useAuth} from "./utils/hooks/auth.hook"
import {AuthContext} from "./utils/context/Auth.context"
import {SocketContext, socket} from './utils/context/socket';


function App() {
  const {login, logout, token, userId, role, ready} = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, role, isAuthenticated,
    }}>
    <SocketContext.Provider value={socket}>
    <BrowserRouter>
    <Navbar/>
      <AppRouter auth={isAuthenticated} />
    </BrowserRouter>
    </SocketContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
