import {AuthPage, RegisterPage} from './pages'
import MainPage from './pages/MainPage/MainPage.jsx'
import UProfilePage from './pages/UProfilePage'

export const publicRoutes = [
    {
        path: '/auth',
        Component: AuthPage
    },
    {
        path: '/reg',
        Component: RegisterPage
    },
    {
        path: '/main',
        Component: MainPage
    }
]

export const authRoutes = [
    {
        path: '/profile',
        Component: UProfilePage
    }
]