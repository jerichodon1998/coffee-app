import { createBrowserRouter } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Barista from "../pages/Barista";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Location from "../pages/Location";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import Root from "./Root";
import Gcash from "../pages/Gcash";
import GcashRoot from "./GcashRoot";
import GcashConfirm from "../pages/GcashConfirm";

// create and export routes
export default createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/barista",
				element: <Barista />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/location",
				element: <Location />,
			},
			{
				path: "/myaccount",
				element: <MyAccount />,
			},
			{
				path: "/products",
				element: <Products />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/gcash",
		element: <GcashRoot />,
		children: [
			{ path: "/gcash", element: <Gcash /> },
			{ path: "/gcash/confirm", element: <GcashConfirm /> },
		],
	},
]);
