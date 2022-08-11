import { useState, createContext } from 'react';
import Hero from './Components/Hero';
import Menubar from './Components/Menubar';
import './App.css';

export const UserInfoContex = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
   <UserInfoContex.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn}}>
      <Menubar/>
      <Hero/>
   </UserInfoContex.Provider>
  );
}

export default App;
