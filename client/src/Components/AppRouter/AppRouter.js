import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes, authRoutes } from '../../routes';

export const AppRouter = ({auth}) => {
    return(
        <Switch>
            {publicRoutes.map(route => {
                return(
                    <Route path={route.path} component={route.Component} />
                )
            })}

            {auth && authRoutes.map(route => {
                return(
                    <Route path={route.path} component={route.Component} />
                )
            })}
        </Switch>
    )
}