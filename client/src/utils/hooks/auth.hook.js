import {useCallback, useState, useEffect} from 'react'
import io from 'socket.io-client'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [socket, setSocket] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber]  = useState(null)
    const [email, setEmail] = useState(null)
    const [role, setRole] = useState(null)

    const login = useCallback((jwtToken, id, usrRole, name, number, email) => {
        setToken(jwtToken)
        setUserId(id)
        setRole(usrRole)
        setName(name)
        setNumber(number)
        setEmail(email)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, role: usrRole, name: name, email: email, number: number
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRole(null)
        setName(null)
        setNumber(null)
        setEmail(null)
        localStorage.removeItem(storageName)
    }, [])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            login(data.token, data.userId, data.role, data.name, data.number, data.email)
        }
        setReady(true)
    }, [login])

    return {login, logout, token, userId , role, name, number, email, ready}
}