import React from "react";
import { Navigate } from "react-router-dom";
import DashboardItem from "../Page/dashboardPage/dashboardPage";
import DashboardSupplier from "../Page/dashboardPageSupplier/supplier";
import AuthLogin from "../Page/loginPage/login";
import AuthRegister from "../Page/registerPage/register";
import NewItem from "../Page/newItem/newItem";
import UpdateItem from "../Page/updateItem/updateItem";
import NewSupplier from "../Page/newSupplier/newSupllier";
import UpdateSupplier from "../Page/updateSupplier/updateSupplier";
import Layout from "../Page/layout/layout";
import LayoutOther from "../Page/layout/layoutOther";

const Router = (loggedIn) => {
	return [
		{
			path: "apps",
			element: loggedIn ? <Layout /> : <Navigate to="/auth/login" />,
			children: [
				{ path: "dashboarditem", element: <DashboardItem /> },
				{ path: "dashboardsupplier", element: <DashboardSupplier /> },
				{ path: "newitem", element: <NewItem /> },
				{ path: "updateitem", element: <UpdateItem /> },
				{ path: "newsupplier", element: <NewSupplier /> },
				{ path: "updatesupplier", element: <UpdateSupplier /> },
			],
		},
		{
			path: "/auth",
			element: !loggedIn ? <LayoutOther /> : <Navigate to="/login" />,
			children: [
				{ path: "login", element: <AuthLogin /> },
				{ path: "register", element: <AuthRegister /> },
			],
		},
		{
			path: "/",
			element: <AuthLogin />,
		},
	];
};
export default Router;
