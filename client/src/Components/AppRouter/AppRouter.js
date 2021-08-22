import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes, authRoutes } from '../../routes';

export const AppRouter = ({auth}) => {
    return(
        <Switch>
            {publicRoutes.map((route, index) => {
                return(
                    <Route key={index} path={route.path} component={route.Component} exact/>
                )
            })}

            {auth && authRoutes.map((route, index) => {
                return(
                    <Route key={index} path={route.path} component={route.Component} exact/>
                )
            })}
        </Switch>
    )
}