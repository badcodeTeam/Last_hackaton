import {AuthPage, RegisterPage} from './pages'
import MainPage from './pages/MainPage/MainPage.jsx'
import UProfilePage from './pages/UProfilePage'
import ContactPage from './pages/ContactPage.jsx'
import ResidentsPage from './pages/ResidentPage/ResidentsPage.jsx'

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
    },
    {
        path: '/contact_us',
        Component: ContactPage
    },
    {
        path: '/residents',
        Component: ResidentsPage
    }
    
]

export const authRoutes = [
    {
        path: '/profile/:id',
        Component: UProfilePage
    }
]