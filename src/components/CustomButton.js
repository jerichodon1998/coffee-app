import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
	children,
	buttonType,
	borderRadius,
	boxShadow,
	fontSize,
	fontWeight,
	padding,
	onClick,
	outlineColor,
	type,
	styles,
}) => {
	const button1 = (
		<Button
			type={type}
			sx={{
				textTransform: "none",
				color: "#fff",
				fontSize: fontSize || "16px",
				fontWeight: fontWeight || "normal",
				padding: padding || "0",
				borderRadius: borderRadius || "25px",
				backgroundColor: "#B6B6B6",
				boxShadow: boxShadow || null,
				"&:hover": {
					backgroundColor: "#fff",
					color: "#C96014",
				},
				...styles,
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);

	const button2 = (
		<Button
			type={type}
			sx={{
				textTransform: "none",
				color: "#fff",
				fontSize: fontSize || "16px",
				fontWeight: fontWeight || "normal",
				padding: padding || "0",
				borderRadius: borderRadius || "25px",
				border: `1px ${outlineColor || "#ED6A26"} solid`,
				boxShadow: boxShadow || null,
				"&:hover": {
					backgroundColor: "#ED6A26",
				},
				...styles,
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);

	const button3 = (
		<Button
			type={type}
			sx={{
				textTransform: "none",
				color: "#000",
				fontSize: fontSize || "16px",
				fontWeight: fontWeight || "normal",
				padding: padding || "0",
				borderRadius: borderRadius || "25px",
				border: "1px #ED6A26 solid",
				backgroundColor: "#fff",
				boxShadow: boxShadow || null,
				"&:hover": {
					backgroundColor: "#ED6A26",
					color: "#fff",
				},
				...styles,
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);

	const button4 = (
		<Button
			type={type}
			sx={{
				textTransform: "none",
				color: "#000",
				fontSize: fontSize || "16px",
				fontWeight: fontWeight || "normal",
				padding: padding || "0",
				borderRadius: borderRadius || "25px",
				backgroundColor: "#fff",
				boxShadow: boxShadow || null,
				"&:hover": {
					border: "1px #ED6A26 solid",
					color: "#ED6A26",
				},
				...styles,
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);

	const button5 = (
		<Button
			type={type}
			sx={{
				textTransform: "none",
				color: "#fff",
				fontSize: fontSize || "16px",
				fontWeight: fontWeight || "normal",
				padding: padding || "0",
				borderRadius: borderRadius || "25px",
				backgroundColor: "rgba(201, 96, 20, 0.9)",
				boxShadow: boxShadow || null,
				"&:hover": {
					backgroundColor: "#ED6A26",
				},
				...styles,
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);

	const renderButton = () => {
		if (buttonType === "btn1") {
			return button1;
		} else if (buttonType === "btn2") {
			return button2;
		} else if (buttonType === "btn3") {
			return button3;
		} else if (buttonType === "btn4") {
			return button4;
		} else {
			return button5;
		}
	};

	return renderButton();
};

export default CustomButton;
