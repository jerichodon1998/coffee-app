import { Box, Grid, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { UserDataContext } from "../App";

const Address = () => {
	const { userData, setUserData } = useContext(UserDataContext);
	const [city, setCity] = useState(userData.city);
	const [streetOrHouseNumber, setStreetOrHouseNumber] = useState(
		userData.streetOrHouseNumber
	);

	const [openAddress, setOpenAddress] = useState(false);
	// Handle open modal for address
	const handleOpenAddress = () => setOpenAddress(true);
	const handleCloseAddress = () => setOpenAddress(false);

	const onFormSubmit = (e) => {
		e.preventDefault();
		handleCloseAddress();
		setUserData((prev) => {
			return { ...prev, city, streetOrHouseNumber };
		});
	};
	return (
		<Box
			sx={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography fontSize={40} sx={{ fontWeight: "bold" }}>
				Address
			</Typography>
			<Box
				sx={{
					backgroundColor: "#909090",
					width: "533px",
					borderRadius: "10px",
					padding: "10px 8px",
				}}
			>
				<Grid container spacing={10}>
					<Grid item xs={8}>
						<Box>
							<Box
								sx={{
									fontSize: "20px",
									padding: "8px 8px",
									backgroundColor: "#B6B6B6",
									width: "347px",
									borderRadius: "10px",
									marginBottom: "16px",
									boxShadow: 3,
									display: "flex",
									alignItems: "center",
								}}
							>
								<LocationOnOutlinedIcon
									color="#000"
									sx={{ fontSize: "28px" }}
								/>
								{userData.city}
							</Box>
							<Box
								sx={{
									fontSize: "20px",
									padding: "8px 8px",
									backgroundColor: "#B6B6B6",
									width: "347px",
									borderRadius: "10px",
									boxShadow: 3,
								}}
							>
								{userData.streetOrHouseNumber}
							</Box>
						</Box>
					</Grid>
					<Grid item xs={4} sx={{ marginY: "auto" }}>
						<CustomButton
							buttonType={"btn1"}
							boxShadow={3}
							onClick={handleOpenAddress}
						>
							Edit
						</CustomButton>
					</Grid>
				</Grid>
				{/* Address Modal */}
				<Modal
					open={openAddress}
					onClose={handleCloseAddress}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							height: "100%",
							width: "100%",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								color: "#fff",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: 400,
								bgcolor: "rgba(0,0,0)",
								border: "2px solid #000",
								boxShadow: 24,
								p: 4,
							}}
						>
							<Grid container>
								<Grid item xs={6}>
									<Typography
										id="modal-modal-title"
										variant="h6"
										component="h2"
										fontWeight={"bold"}
									>
										Edit Address
									</Typography>
								</Grid>
								<Grid item xs={6} sx={{ textAlign: "end" }}>
									<CloseOutlinedIcon
										onClick={handleCloseAddress}
										sx={{ cursor: "pointer" }}
									/>
								</Grid>
							</Grid>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								<form onSubmit={onFormSubmit} style={{ textAlign: "center" }}>
									<input
										placeholder="City"
										style={{
											color: "#fff",
											border: "1px solid #fff",
											borderRadius: "10px",
											backgroundColor: "#000",
											textAlign: "center",
											padding: "10px 20px",
											marginBottom: "10px",
										}}
										value={city}
										onChange={(e) => setCity(e.target.value)}
										required={true}
									/>
									<input
										placeholder="Street/House Number"
										style={{
											color: "#fff",
											border: "1px solid #fff",
											borderRadius: "10px",
											backgroundColor: "#000",
											textAlign: "center",
											padding: "10px 20px",
											marginBottom: "10px",
										}}
										value={streetOrHouseNumber}
										onChange={(e) => setStreetOrHouseNumber(e.target.value)}
										required={true}
									/>
									<Box>
										<CustomButton
											buttonType={"btn1"}
											fontWeight={"bold"}
											padding={"0px 0px"}
											onClick={onFormSubmit}
										>
											Done
										</CustomButton>
									</Box>
								</form>
							</Typography>
						</Box>
					</Box>
				</Modal>
			</Box>
		</Box>
	);
};

export default Address;
