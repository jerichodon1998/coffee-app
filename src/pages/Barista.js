import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import LoadingModal from "../components/LoadingModal";
import OrderDetails from "../components/OrderDetails";
import { UserDataContext } from "../App";

const Barista = () => {
	const { userData } = useContext(UserDataContext);
	const [progress, setProgress] = useState(0);
	const [doneText, setDoneText] = useState("");
	const [mins, setMins] = useState(15);
	const [showLoadingModal, setShowLoadingModal] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			// after 5 seconds, update minutes and progress values
			setMins(10);
			setProgress(33);
			setTimeout(() => {
				// after more 5 seconds, update again minutes and progress values
				setMins(5);
				setProgress(66);
				setTimeout(() => {
					// after more 5 seconds, update again minutes and progress values
					setMins(1);
					setProgress(100);
					setTimeout(() => {
						// after more 1 second, update again minutes and progress values
						setMins(0);
						setDoneText("Done! Your order is on the way.");
						setTimeout(() => {
							// after more 1 second, render loading and navigate to Location route
							setShowLoadingModal(true);
						}, 1000);
					}, 1000);
				}, 5000);
			}, 5000);
		}, 5000);
	}, []);

	return (
		<Box
			sx={{
				textAlign: "center",
				height: "auto",
				paddingBottom: "50px",
			}}
		>
			<Typography fontSize={40} fontWeight={"bold"} marginBottom={5}>
				YOUR ORDER
			</Typography>
			<img src={require("../assets/barista.gif")} width={375} alt="barista" />
			<Typography fontSize={20} fontWeight={"bold"}>
				Your coffee is still making
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
					{userData.city} {userData.streetOrHouseNumber}
				</Typography>
				<ProgressBar progress={progress} />
				<OrderDetails />
			</Box>
			{showLoadingModal ? (
				<LoadingModal routePath={"/location"} message={"Order is on the way"} />
			) : null}
		</Box>
	);
};

export default Barista;
