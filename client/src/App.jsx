import {React, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter';
import Navbar from './Components/Navbar/Navbar';
import {useAuth} from "./utils/hooks/auth.hook"
import {AuthContext} from "./utils/context/Auth.context"
import io from 'socket.io-client'

function App() {

  const[socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000/"));
  },[])


  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, socket
    }}>
    <BrowserRouter>
    <Navbar socket={socket}/>
      <AppRouter auth={isAuthenticated} />
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
