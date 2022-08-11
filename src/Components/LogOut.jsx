import { useContext } from "react"
import { UserInfoContex } from "../App"


export default function LogOut(){
    const {setUser, setIsLoggedIn} = useContext(UserInfoContex)
    const handleLogin = () => {
        setIsLoggedIn(false)
        setUser(null)
    }
    return <button onClick={handleLogin}>LogOut</button>
}