import {createContext} from 'react';

function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    role: null,
    name: null,
    email: null,
    number: null,
    login: noop(),
    logout: noop(),
    isAuthenticated: false,

})