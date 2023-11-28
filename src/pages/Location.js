import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import OrderDetails from "../components/OrderDetails";
import MessageModal from "../components/MessageModal";
import LoadingModal from "../components/LoadingModal";

const Location = () => {
	const [progress, setProgress] = useState(0);
	const [doneText, setDoneText] = useState("");
	const [mins, setMins] = useState(15);
	const [showLoadingModal, setShowLoadingModal] = useState(false);
	const [showRiderNear, setShowRiderNear] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			// after 5 seconds, update minutes and progress values
			setMins(10);
			setProgress(33);
			setTimeout(() => {
				// after more 5 seconds, update again minutes and progress values
				setMins(5);
				setProgress(66);
				setShowRiderNear(true); // update setShowRiderNear to true
				setTimeout(() => {
					// after more 5 seconds, update again minutes and progress values
					setMins(1);
					setProgress(100);
					setTimeout(() => {
						// after more 1 second, update again minutes and progress values
						setMins(0);
						setDoneText("any minute now");
						setTimeout(() => {
							// after more 1 second, render loading and navigate to Location route
							setShowLoadingModal(true);
						}, 1000);
					}, 1000);
				}, 5000);
			}, 5000);
		}, 5000);
	}, []);

	useEffect(() => {}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				paddingBottom: "50px",
			}}
		>
			<img
				src={require(`../assets/location.png`)}
				height={400}
				width={"100%"}
				alt="location"
			/>
			<Typography fontSize={24} fontWeight={"bold"}>
				Delivery rider pick up your coffee and its on the way
			</Typography>
			<Box sx={{ marginTop: "20px" }}>
				<Typography
					fontSize={doneText.length > 0 ? 24 : 16}
					fontWeight={"bold"}
				>
					{mins !== 0 ? `${mins} min(s) left` : doneText}
				</Typography>
				<Typography fontSize={16} sx={{ display: "inline-block" }}>
					Delivery to.
				</Typography>
				<Typography
					fontSize={16}
					fontWeight={"bold"}
					sx={{ display: "inline-block" }}
				>
					balay ni adonis
				</Typography>
				<ProgressBar progress={progress} />
				<Grid container spacing={20}>
					<Grid item>
						<MessageModal />
					</Grid>
					<Grid item>
						<OrderDetails />
					</Grid>
				</Grid>
			</Box>
			{showLoadingModal ? (
				<LoadingModal
					imgSrc={require("../assets/orderDelivered.gif")}
					imgWidth={200}
					message={"Order Delivered"}
				>
					<Box
						sx={{
							color: "#fff",
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							fontSize: "20px",
							padding: "10px 20px",
							borderRadius: "10px",
						}}
					>
						<Typography fontWeight={"bold"} fontSize={32}>
							Order Details
						</Typography>
						<OrderDetails />
					</Box>
				</LoadingModal>
			) : null}
			{showRiderNear ? (
				<LoadingModal disableDefaultImg={true}>
					<Box
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.5)",
							width: "100%",
							textAlign: "center",
							paddingY: "50px",
							borderRadius: "25px",
							color: "#fff",
						}}
					>
						Rider is near at your place
					</Box>
				</LoadingModal>
			) : null}
		</Box>
	);
};

export default Location;
