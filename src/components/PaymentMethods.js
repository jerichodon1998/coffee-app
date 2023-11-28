import { Box, Button, Typography } from "@mui/material";
import gcash from "../assets/gcash.svg";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import LoadingModal from "./LoadingModal";

const PaymentMethods = () => {
	const [paymentMethod, setPaymentMethod] = useState(null);
	const [showLoadingModal, setShowLoadingModal] = useState(false);
	const onPayCash = () => {
		setShowLoadingModal(true);
	};

	const gcashBtn = (
		<Button
			sx={{
				textTransform: "none",
				backgroundColor: paymentMethod === "gcash" ? "#0D6FE1" : "#fff",
				color: paymentMethod === "gcash" ? "#fff" : "#0D6FE1",
				"&:hover": {
					backgroundColor: "#0D6FE1",
					color: "#fff",
				},
				fontSize: "24px",
				fontWeight: "bold",
				padding: "5px ",
				width: "175px",
			}}
			onClick={() => setPaymentMethod("gcash")}
		>
			<img src={gcash} alt="gcash" width={50} /> GCash
		</Button>
	);
	const cashBtn = (
		<Button
			sx={{
				textTransform: "none",
				backgroundColor: paymentMethod === "cash" ? "#08AD36" : "#fff",
				color: "#000",
				"&:hover": {
					backgroundColor: "#08AD36",
					color: "#fff",
				},
				fontSize: "24px",
				fontWeight: "bold",
				padding: "5px ",
				width: "175px",
				marginBottom: "20px",
			}}
			onClick={() => setPaymentMethod("cash")}
		>
			Cash
		</Button>
	);

	const renderBtn = () => {
		if (paymentMethod === "cash") {
			return cashBtn;
		} else if (paymentMethod === "gcash") {
			return gcashBtn;
		} else {
			return (
				<>
					{cashBtn}
					{gcashBtn}
				</>
			);
		}
	};

	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "#C96014",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					paddingY: "10px ",
					width: "324px",
					borderRadius: "25px",
				}}
			>
				<Typography fontSize={48} fontWeight={"bold"}>
					Pay By
				</Typography>
				{renderBtn()}
			</Box>
			{paymentMethod !== null ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CustomButton
						buttonType={"btn2"}
						styles={{ width: "75%", marginTop: "10px", fontWeight: "bold" }}
						outlineColor={"#fff"}
						onClick={() => setPaymentMethod(null)}
					>
						Change Payment
					</CustomButton>
					<CustomButton
						buttonType={"btn1"}
						styles={{ width: "75%", marginTop: "10px", fontWeight: "bold" }}
						onClick={onPayCash}
					>
						<Link
							to={paymentMethod === "gcash" ? "/gcash" : null}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							Order now
						</Link>
					</CustomButton>
				</Box>
			) : null}
			{showLoadingModal ? (
				<LoadingModal message={"Order Confirmed!"} routePath={"/barista"} />
			) : null}
		</Box>
	);
};

export default PaymentMethods;
