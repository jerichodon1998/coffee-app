import { Box } from "@mui/material";
import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const ProgressBar = ({ progress }) => {
	return (
		<Box>
			<RemoveRoundedIcon
				sx={{
					fontSize: "90px",
					color: "#00AF11",
				}}
			/>
			<RemoveRoundedIcon
				sx={{
					fontSize: "90px",
					color: progress >= 33 ? "#00AF11" : "#D9D9D9",
				}}
			/>
			<RemoveRoundedIcon
				sx={{
					fontSize: "90px",
					color: progress >= 66 ? "#00AF11" : "#D9D9D9",
				}}
			/>
			<RemoveRoundedIcon
				sx={{
					fontSize: "90px",
					color: progress >= 100 ? "#00AF11" : "#D9D9D9",
				}}
			/>
		</Box>
	);
};

export default ProgressBar;
