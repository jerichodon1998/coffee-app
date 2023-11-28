import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../App";

const Signup = () => {
	const { setUserData } = useContext(UserDataContext);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("");
	const navigate = useNavigate();
	const onSubmitForm = (e) => {
		e.preventDefault(); // prevents page reload
		setUserData((prev) => {
			return { ...prev, fullname, email, password, gender };
		});
		navigate("/login");
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
								margin: "0 0 140px 80px",
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
						className="coffee"
						src={require("../assets/coffeeMug.gif")}
						alt="coffee cup"
						width={450}
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
							to={"/login"}
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
						<Box width={411} sx={{ marginTop: "10px" }}>
							<Typography fontSize={30} fontWeight={"bold"}>
								Account Signup
							</Typography>
							<form
								onSubmit={onSubmitForm}
								style={{
									display: "flex",
									flexDirection: "column",
									marginTop: "20px",
								}}
							>
								<Box>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Full Name
									</Typography>
									<TextField
										variant="outlined"
										type="text"
										sx={{
											border: "1px solid #B6B6B6",
											borderRadius: "5px",
											width: "100%",
										}}
										value={fullname}
										onChange={(e) => setFullname(e.target.value)}
										required={true}
									/>
								</Box>
								<Box
									sx={{
										marginTop: "20px",
									}}
								>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Email Address
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
										marginTop: "20px",
									}}
								>
									<Typography fontSize={16} color={"#B6B6B6"}>
										Gender
									</Typography>
									<TextField
										variant="outlined"
										type="text"
										sx={{
											border: "1px solid #B6B6B6",
											borderRadius: "5px",
											width: "100%",
										}}
										value={gender}
										onChange={(e) => setGender(e.target.value)}
										required={true}
									/>
								</Box>
								<Button
									type="submit"
									sx={{
										backgroundColor: "#696F79",
										textTransform: "none",
										fontSize: "16px",
										color: "#fff",
										padding: "10px 0",
										marginTop: "20px",
										"&:hover": {
											backgroundColor: "#B6B6B6",
										},
									}}
								>
									Continue
								</Button>
							</form>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Signup;
