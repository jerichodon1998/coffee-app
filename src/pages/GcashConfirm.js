import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartDataContext } from "../App";

const GcashConfirm = () => {
	const [showConfirmation, setShowConfirmation] = useState(false);
	const { cartData } = useContext(CartDataContext);
	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericValue = parseFloat(inputValue);

		if (isNaN(numericValue) || numericValue < 0 || numericValue > 9) {
			// Reset the input if the value is not within the desired range
			event.target.value = "";
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		setShowConfirmation(true);
	};

	const authenticationCode = () => {
		return (
			<Box>
				<Typography fontWeight={"bold"}>
					Please enter the authentication code
				</Typography>
				<form onSubmit={onSubmitForm}>
					<Grid
						container
						sx={{
							marginTop: "20px",
							textAlign: "center",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							inputMode="numeric"
							style={{
								width: "10px",
								padding: "5px",
								borderColor: "#0D6FE1",
								borderRadius: "5px",
								marginRight: "5px",
							}}
							required={true}
							onChange={handleInputChange}
						/>
					</Grid>
					<Button
						variant="contained"
						sx={{
							paddingY: "2px",
							width: "150px",
							boxShadow: 3,
							marginTop: "20px",
						}}
						type="submit"
					>
						Next
					</Button>
				</form>
			</Box>
		);
	};

	const payConfirmation = () => {
		return (
			<Box>
				<Typography fontSize={32} fontWeight={"bold"}>
					YOU ARE ABOUT TO PAY
				</Typography>
				<Grid container sx={{ justifyContent: "space-around" }}>
					<Grid item xs={6}>
						<Typography fontSize={32} fontWeight={"bold"}>
							Amount
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography fontSize={32} fontWeight={"bold"}>
							₱{cartData.total}
						</Typography>
					</Grid>
				</Grid>
				<Link
					to="/barista"
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					<Button
						variant="contained"
						sx={{
							textTransform: "none",
							paddingY: "2px",
							width: "150px",
							boxShadow: 3,
							marginTop: "20px",
							fontWeight: "bold",
						}}
					>
						Pay Now
					</Button>
				</Link>
			</Box>
		);
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					marginTop: "20px",
				}}
				width={"433px"}
			>
				{showConfirmation ? payConfirmation() : authenticationCode()}
			</Box>
		</Box>
	);
};

export default GcashConfirm;
