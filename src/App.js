import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./Routes/routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
	const location = useLocation();
	const [isAuth, setIsAuth] = useState(false);
	const header = ["/auth/login", "/", "/auth/register"];
	useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);
	const routing = useRoutes(routes(isAuth));
	return (
		<div>
			{!header.includes(location.pathname) && <Header />}
			<ToastContainer />
			{routing}
		</div>
	);
}

export default App;
