import {AuthPage, RegisterPage} from './pages'
import UProfilePage from './pages/UProfilePage'

export const publicRoutes = [
    {
        path: '/auth',
        Component: AuthPage
    },
    {
        path: '/reg',
        Component: RegisterPage
    }
]

export const authRoutes = [
    {
        path: '/profile',
        Component: UProfilePage
    }
]