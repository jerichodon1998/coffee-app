import React, { useState } from "react";
import loader from "../assets/loader.png";
import { Box, Modal, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./loadingModal.css";
import { Link } from "react-router-dom";
const LoadingModal = ({
	message,
	routePath,
	imgSrc,
	imgWidth,
	children,
	disableDefaultImg,
}) => {
	const [openModal, setOpenModal] = useState(true);
	// const handleOpen = () => setOpenModal(true);
	const handleClose = () => {
		setOpenModal(false);
	};
	const [showLoading, setShowLoading] = useState(true);

	const renderBtn = () => {
		if (routePath) {
			return (
				<Link
					to={routePath}
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<CloseOutlinedIcon
						sx={{ cursor: "pointer" }}
						onClick={() => handleClose()}
					/>
				</Link>
			);
		}

		return (
			<CloseOutlinedIcon
				sx={{ cursor: "pointer" }}
				onClick={() => handleClose()}
			/>
		);
	};

	const renderLoadingToSuccess = () => {
		setTimeout(() => {
			setShowLoading(false);
		}, 2000);

		return showLoading ? (
			<img className="loadingModal" src={loader} alt="loader" width={400} />
		) : (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{disableDefaultImg ? null : (
					<img
						src={imgSrc || require("../assets/success.gif")}
						alt="loader"
						width={imgWidth || 400}
					/>
				)}
				<Typography fontSize={32} fontWeight={"bold"}>
					{message}
				</Typography>
				{children}
			</Box>
		);
	};

	return (
		<Modal open={openModal} onClose={handleClose}>
			<Box
				sx={{
					position: "absolute",
					color: "#fff",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "100%",
					height: "100%",
					backgroundColor: "rgb(55, 55, 55, 0.7)",
					border: "hidden",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box width={"20%"}>
					<Box
						sx={{
							display: "flex",
							alignItems: "end",
							justifyContent: "end",
							marginBottom: "20px",
						}}
					>
						{renderBtn()}
					</Box>
					{renderLoadingToSuccess()}
				</Box>
			</Box>
		</Modal>
	);
};

export default LoadingModal;
