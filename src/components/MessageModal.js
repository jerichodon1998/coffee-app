import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import React, { useState } from "react";

const MessageModal = () => {
	const [openAddress, setOpenAddress] = React.useState(false);
	const [sentMessages, setSentMessages] = useState([]);
	const [typedMessage, setTypedMessage] = useState("");

	// Handle open modal for messages
	const handleOpenMessageModal = () => setOpenAddress(true);
	const handleCloseMessageModal = () => setOpenAddress(false);

	const riderMessage = "Hello maam/sir, naa nako. Asa dapit inyoha?";
	const messageComponent = (name, message, right) => {
		return (
			<Box sx={{ marginTop: "10px", marginLeft: right ? "50%" : null }}>
				<Typography>{name}</Typography>
				<Box
					width={150}
					sx={{
						borderRadius: "25px",
						border: "1px solid #fff",
						padding: "5px 20px",
					}}
				>
					<Grid container>
						<Grid item xs={12}>
							{message}
						</Grid>
					</Grid>
				</Box>
			</Box>
		);
	};
	const messagesField = () => {
		return (
			<Box sx={{ overflowY: "scroll", height: "300px", padding: "20px 30px" }}>
				{messageComponent("John Wick", riderMessage)}
				{sentMessages.map((item) => {
					return messageComponent("", item, true);
				})}
			</Box>
		);
	};

	const messageModal = () => {
		return (
			<Modal
				open={openAddress}
				onClose={handleCloseMessageModal}
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
							width: 500,
							height: 500,
							bgcolor: "#000",
							border: "2px solid #000",
							boxShadow: 24,
							p: 4,
						}}
					>
						<Grid container>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "start",
									cursor: "pointer",
									color: "#8692A6",
								}}
								onClick={handleCloseMessageModal}
							>
								<ArrowBackIosNewOutlinedIcon fontSize="small" color="inherit" />{" "}
								<Typography fontSize={16} color={"inherit"}>
									Back
								</Typography>
							</Grid>
							<Grid item xs={12} textAlign={"center"}>
								<Typography
									id="modal-modal-title"
									variant="h6"
									component="h2"
									fontWeight={"bold"}
								>
									Delivery Rider
								</Typography>
							</Grid>
						</Grid>
						{messagesField()}
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setSentMessages((prev) => [...prev, typedMessage]);
									setTypedMessage("");
								}}
								style={{
									textAlign: "center",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<input
									placeholder="Message here"
									style={{
										color: "#fff",
										border: "1px solid #fff",
										borderRadius: "10px",
										backgroundColor: "#000",
										textAlign: "center",
										width: "60%",
										padding: "10px 20px",
										marginBottom: "10px",
									}}
									defaultValue={typedMessage}
									value={typedMessage}
									onChange={(e) => setTypedMessage(e.target.value)}
								/>
								<Button type="submit">
									<ForwardRoundedIcon
										sx={{
											color: "rgba(255, 255, 255, 0.55)",
											border: "none",
											fontSize: "48px",
											marginBottom: "5px",
											cursor: "pointer",
											"&:hover": {
												color: "#fff",
											},
										}}
									/>
								</Button>
							</form>
						</Typography>
					</Box>
				</Box>
			</Modal>
		);
	};

	return (
		<Box>
			<Button
				variant="outlined"
				sx={{
					border: "1px solid #fff",
					borderRadius: "25px",
					padding: "10px 20px",
					width: "400px",
				}}
				onClick={() => handleOpenMessageModal()}
			>
				<Grid container>
					<Grid item xs={2}>
						<img
							width={86}
							src={require("../assets/deliveryRiderIcon.png")}
							alt="deliveryRiderIcon"
						/>
					</Grid>
					<Grid item xs={8}>
						<Box sx={{ marginTop: "18px" }}>
							<Typography fontSize={18} color={"#fff"}>
								Manong Driver
							</Typography>
							<Typography fontSize={18} color={"rgba(255, 255, 255, .55)"}>
								Delivery Rider
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={2}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ChatBubbleOutlineOutlinedIcon
							sx={{ color: "#fff", fontSize: "48px" }}
						/>
					</Grid>
				</Grid>
			</Button>
			{messageModal()}
		</Box>
	);
};

export default MessageModal;
