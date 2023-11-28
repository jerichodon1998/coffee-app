import homeImage from "../assets/homeImage.png";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import { UserDataContext } from "../App";
const Home = () => {
	const { userData } = useContext(UserDataContext);

	return (
		<Box sx={{ backgroundColor: "#C96014", height: "auto", paddingY: "20px" }}>
			<Box
				sx={{
					backgroundImage: `url(${homeImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					objectFit: "cover",
					display: "flex",
					flexDirection: "column",
					height: "80vh",
				}}
			>
				<Box
					sx={{
						backgroundColor: "rgba(201, 96, 20, 0.7)",
						display: "flex",
						width: "681px",
						height: "261px",
						fontSize: 96,
						fontFamily: "Allan",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "45px",
						borderRadius: "0 25px 25px 0",
					}}
				>
					Tara Kape
				</Box>
				<Box
					sx={{
						width: "100%",
					}}
				>
					{userData.isLoggedin ? (
						<Button
							variant="outlined"
							sx={{
								textTransform: "none",
								color: "#000",
								backgroundColor: "#fff",
								padding: "2px 15px",
								border: "5px solid #000",
								marginLeft: "1350px",
								marginTop: "50px",
								borderRadius: "20px",
								"&:hover": {
									border: "5px solid #B24F1C",
									color: "#fff",
									backgroundColor: "#C96014",
								},
							}}
						>
							<Link
								to="/products"
								style={{
									display: "flex",
									justifyContent: "center",
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<Typography>Shop All Coffee</Typography>
								<ArrowForwardIosIcon fontSize="small" />
							</Link>
						</Button>
					) : null}
				</Box>
				<Box sx={{ marginTop: "50px", marginLeft: "150px" }}>
					<CustomButton
						buttonType={"btn5"}
						fontSize={"24px"}
						padding={"4px 18px"}
						styles={{ border: "5px solid #B24F1C" }}
					>
						<Link
							to="/about"
							style={{
								textDecoration: "none",
								color: "inherit",
								fontWeight: "bold",
							}}
						>
							our Company
						</Link>
					</CustomButton>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
