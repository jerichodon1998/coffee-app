import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const Root = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#000",
				color: "#fff",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Navbar />
			{<Outlet />}
		</Box>
	);
};

export default Root;
