import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import gcashImage from "../assets/gcash.svg";
import { Outlet } from "react-router-dom";

const GcashRoot = () => {
	return (
		<Box
			sx={{
				marginTop: "200px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Grid
					container
					sx={{
						justifyContent: "center",
						alignItems: "center",
						width: "433px",
					}}
				>
					<Grid item xs={3}>
						<img src={gcashImage} alt="gcash" width={100} />
					</Grid>
					<Grid item xs={5}>
						<Typography fontSize={48} fontWeight={"bold"} color={"#0D6FE1"}>
							GCash
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Outlet />
		</Box>
	);
};

export default GcashRoot;
