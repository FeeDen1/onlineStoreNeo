import React from "react";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";
import {PaymentPage} from "../pages/paymentPage/PaymentPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact ?: boolean;
}


export enum RouteNames {
    MAIN_PAGE ='/',
    CART='/cart',
    PAYMENT='/payment'
}

export const publicRoutes:IRoute[] = [
    {path:RouteNames.MAIN_PAGE, exact: true, component: MainPage},
    {path:RouteNames.CART, exact: true, component: CartPage},
    {path:RouteNames.PAYMENT, exact: true, component: PaymentPage},
]