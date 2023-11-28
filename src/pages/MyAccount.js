import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import UserDetail from "../components/UserDetail";
import Address from "../components/Address";
import { Link } from "react-router-dom";
import { UserDataContext } from "../App";
const MyAccount = () => {
	const { setUserData } = useContext(UserDataContext);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<UserDetail />
			<Address />
			<Link to="/" style={{ marginTop: "100px" }}>
				<Button
					sx={{
						color: "#fff",
						fontWeight: "bold",
						fontSize: "20px",
						border: "1px solid #fff",
						borderRadius: "10px",
						padding: "2px 30px",
						"&:hover": {
							border: "1px solid #980000",
							color: "#980000",
						},
					}}
					onClick={() => {
						// Logout
						setUserData((prev) => {
							return { ...prev, isLoggedin: false };
						});
					}}
				>
					Log out
				</Button>
			</Link>
		</Box>
	);
};

export default MyAccount;
