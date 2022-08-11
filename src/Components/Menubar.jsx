import { useContext } from "react"
import { UserInfoContex } from "../App"
import Login from "./Login"
import LogOut from "./LogOut"



export default function Menubar(){
   const { isLoggedIn } = useContext(UserInfoContex)
    return (isLoggedIn ? <LogOut/> : <Login/>)
    }