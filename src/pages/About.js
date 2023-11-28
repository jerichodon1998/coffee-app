import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
	return (
		<Box sx={{ paddingX: "20px" }}>
			<Typography sx={{ fontWeight: "bold", fontSize: "64px" }}>
				About us
			</Typography>
			<Box sx={{ width: "1179px" }}>
				<Typography sx={{ fontSize: "28px" }}>
					At Starbs, we elevate coffee from a mere beverage to a captivating
					experience. Our passion for the perfect brew is evident in every cup,
					sourced from the finest beans worldwide. With expert roasting and
					skilled baristas, we craft a symphony of flavors and aromas, ensuring
					each sip is a journey. Step into our welcoming spaces, where the aroma
					of freshly ground beans mingles with the warmth of community. Starbs
					isn't just a coffee destination; it's where moments are savored,
					connections are made, and the love for coffee becomes an unforgettable
					adventure.
				</Typography>
			</Box>
		</Box>
	);
};

export default About;
