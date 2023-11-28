import {
	Box,
	Button,
	Checkbox,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../App";
import LoadingModal from "../components/LoadingModal";

const Login = () => {
	const { userData, setUserData } = useContext(UserDataContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const onFormSubmit = (e) => {
		e.preventDefault();
		if (userData.email === email && userData.password === password) {
			setUserData((prev) => {
				return { ...prev, isLoggedin: true };
			});
			setShowSuccessModal(true);
		}
	};

	return (
		<Box sx={{ width: "100%", backgroundColor: "#fff" }}>
			<Grid container>
				<Grid
					container
					item
					xs={6}
					sx={{
						backgroundColor: "#494949",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid item xs={12}>
						<Box
							sx={{
								margin: "20px 0 0 80px",
								display: "flex",
							}}
						>
							<Typography
								variant="h6"
								component="div"
								fontFamily={"Vujahday Script"}
								fontSize={"48px"}
								sx={{
									display: { xs: "none", sm: "block" },
									color: "#fff",
								}}
							>
								<Link
									to="/"
									style={{ textDecoration: "none", color: "inherit" }}
								>
									starbs
								</Link>
							</Typography>
						</Box>
					</Grid>
					<img
						src={require("../assets/coffeeCup.gif")}
						alt="coffee cup"
						height={650}
						width={500}
					/>
				</Grid>
				<Grid item xs={6} sx={{ width: "100%", height: "100%" }}>
					<Box
						sx={{
							margin: "50px 0 0 80px",
							display: "flex",
						}}
					>
						<Link
							to={"/"}
							style={{
								cursor: "pointer",
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								textDecoration: "none",
							}}
						>
							<ArrowBackIosNewOutlinedIcon sx={{ color: "#B6B6B6" }} />{" "}
							<Typography color={"#B6B6B6"} fontSize={16}>
								Back
							</Typography>
						</Link>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box width={411} sx={{ marginTop: "150px" }}>
							<Typography fontSize={30} fontWeight={"bold"}>
								Account Login
							</Typography>
							<Typography fontSize={18} color={"#B6B6B6"}>
								If you are already a member you can login with your email
								address and password.
							</Typography>
							<form
								style={{
									display: "flex",
									flexDirection: "column",
									marginTop: "20px",
								}}
								onSubmit={onFormSubmit}
							>
								<Box>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Email address
									</Typography>
									<TextField
										variant="outlined"
										type="email"
										sx={{
											border: "1px solid #B6B6B6",
											borderRadius: "5px",
											width: "100%",
										}}
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required={true}
									/>
								</Box>
								<Box
									sx={{
										marginTop: "20px",
									}}
								>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Password
									</Typography>
									<TextField
										variant="outlined"
										type="password"
										sx={{
											border: "1px solid #B6B6B6",
											borderRadius: "5px",
											width: "100%",
										}}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required={true}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "start",
										alignItems: "center",
									}}
								>
									<Checkbox
										defaultChecked
										sx={{ margin: "20px 0", padding: "0px" }}
									/>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Remember me
									</Typography>
								</Box>
								<Button
									sx={{
										backgroundColor: "#696F79",
										textTransform: "none",
										fontSize: "16px",
										color: "#fff",
										padding: "10px 0",
										"&:hover": {
											backgroundColor: "#B6B6B6",
										},
									}}
									type="submit"
								>
									Login
								</Button>
							</form>
							<Typography
								sx={{
									fontSize: "16px",
									color: "#696F79",
									textAlign: "center",
									marginTop: "10px",
								}}
							>
								Dont have an account ?{" "}
								<Link
									to={"/signup"}
									style={{ color: "#ED6A26", textDecoration: "none" }}
								>
									Sign up here
								</Link>
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
			{showSuccessModal ? (
				<LoadingModal message={"Successfully Login"} routePath={"/"} />
			) : null}
		</Box>
	);
};

export default Login;
