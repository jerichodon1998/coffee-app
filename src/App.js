import React, { createContext, useState } from "react";

import { RouterProvider } from "react-router-dom";
// import defined routes
import router from "./routes/router";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

export const UserDataContext = createContext();
export const CartDataContext = createContext();

const theme = createTheme({
	typography: {
		fontFamily: [
			"Inter",
			"sans-serif",
			"ABeeZee",
			"Lato",
			"Vujahday Script",
			"Allan",
		],
	},
});

function App() {
	// User Data
	const [userData, setUserData] = useState({
		fullname: "",
		email: "",
		gender: "",
		phoneNumber: "",
		city: "",
		streetOrHouseNumber: "",
		isLoggedin: false,
	});

	// Cart Data
	const [cartData, setCartData] = useState({
		products: [],
		total: 0,
	});

	return (
		<ThemeProvider theme={theme}>
			<UserDataContext.Provider value={{ userData, setUserData }}>
				<CartDataContext.Provider value={{ cartData, setCartData }}>
					<RouterProvider router={router} />
				</CartDataContext.Provider>
			</UserDataContext.Provider>
		</ThemeProvider>
	);
}

export default App;
