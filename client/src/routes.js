import {AuthPage, RegisterPage} from './pages'
import MainPage from './pages/MainPage'
import UProfilePage from './pages/UProfilePage'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import ResidentsPage from './pages/ResidentPage/ResidentsPage.jsx'
import UEditProfile from './pages/UEditProfile'
import EventPage from './pages/EventsPage/EventsPage.jsx'
import AdminPage from './pages/AdminPage/AdminPage'
import OrgPage from './pages/OrgPage/OrgPage'
import OrgEdit from './pages/OrgEdit/OrgEdit'

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
        path: '/',
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
    ,
    {
        path: '/events',
        Component: EventPage
    },
    
]

export const authRoutes = [
    {
        path: '/profile/:id',
        Component: UProfilePage
    }, 
    {
        path: '/edit/user/:id', 
        Component: UEditProfile
    },
    {
        path: '/edit/org/:id', 
        Component: OrgEdit
    },
    {
        path: '/admin',
        Component: AdminPage
    },
    {
        path: '/org/:id',
        Component: OrgPage
    }
]

