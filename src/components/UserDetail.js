import { Box, Grid, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { UserDataContext } from "../App";

const UserDetail = () => {
	const { userData, setUserData } = useContext(UserDataContext);
	const [openDetail, setOpenDetail] = useState(false);

	const [fullname, setFullname] = useState(userData.fullname);
	const [gender, setGender] = useState(userData.gender);
	const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);

	// Handle open modal for user details
	const handleOpenDetail = () => setOpenDetail(true);
	const handleCloseDetail = () => setOpenDetail(false);

	const onFormSubmit = (e) => {
		e.preventDefault();
		handleCloseDetail();
		setUserData((prev) => {
			return { ...prev, fullname, gender, phoneNumber };
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: "20px",
			}}
		>
			<AccountCircleIcon sx={{ height: "160px", width: "160px" }} />
			<Typography fontSize={36} sx={{ marginRight: "10px" }}>
				{userData.fullname}
			</Typography>
			<CustomButton
				buttonType={"btn1"}
				color={"#C96014"}
				onClick={handleOpenDetail}
			>
				Edit
			</CustomButton>
			{/* Detail Modal */}
			<Modal
				open={openDetail}
				onClose={handleCloseDetail}
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
							bgcolor: "rgba(0,0,0,.8)",
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
									Edit User Detail
								</Typography>
							</Grid>
							<Grid item xs={6} sx={{ textAlign: "end" }}>
								<CloseOutlinedIcon
									onClick={handleCloseDetail}
									sx={{ cursor: "pointer" }}
								/>
							</Grid>
						</Grid>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							<form onSubmit={onFormSubmit} style={{ textAlign: "center" }}>
								<input
									placeholder="Name"
									style={{
										color: "#fff",
										border: "1px solid #fff",
										borderRadius: "10px",
										backgroundColor: "#000",
										textAlign: "center",
										padding: "10px 20px",
										marginBottom: "10px",
									}}
									value={fullname}
									onChange={(e) => setFullname(e.target.value)}
									required={true}
								/>
								<input
									placeholder="Phone"
									style={{
										color: "#fff",
										border: "1px solid #fff",
										borderRadius: "10px",
										backgroundColor: "#000",
										textAlign: "center",
										padding: "10px 20px",
										marginBottom: "10px",
									}}
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									required={true}
								/>
								<input
									placeholder="Gender"
									style={{
										color: "#fff",
										border: "1px solid #fff",
										borderRadius: "10px",
										backgroundColor: "#000",
										textAlign: "center",
										padding: "10px 20px",
										marginBottom: "10px",
									}}
									value={gender}
									onChange={(e) => setGender(e.target.value)}
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
	);
};

export default UserDetail;
