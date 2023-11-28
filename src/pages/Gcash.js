import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Gcash = () => {
	const navigate = useNavigate();
	const onSubmitForm = (e) => {
		e.preventDefault();
		navigate("/gcash/confirm");
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form onSubmit={onSubmitForm}>
				<Box width={"433px"}>
					<Typography fontSize={18} fontWeight={"bold"} textAlign={"center"}>
						Login to pay with GCash
					</Typography>
					<Grid
						container
						spacing={1}
						sx={{
							textAlign: "center",
							marginTop: "20px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Grid item>
							<Typography>+63</Typography>
						</Grid>{" "}
						<Grid item>
							<TextField variant="outlined" size="small" required={true} />
						</Grid>
					</Grid>
					<Box
						sx={{
							textAlign: "center",
						}}
					>
						<Button
							variant="contained"
							type="submit"
							sx={{
								paddingY: "2px",
								width: "150px",
								boxShadow: 3,
								marginTop: "20px",
							}}
						>
							Next
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default Gcash;
