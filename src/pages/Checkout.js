import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProductShoppingCard from "../components/ProductShoppingCard";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import PaymentMethods from "../components/PaymentMethods";
import { CartDataContext, UserDataContext } from "../App";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import loader from "../assets/loader.png";
import "./checkout.css";

const Checkout = () => {
	const { cartData, setCartData } = useContext(CartDataContext);
	const { userData } = useContext(UserDataContext);
	const [showLoadingPage, setShowLoadingPage] = useState(true); // show loading page

	const updateCheckoutTotal = (updateState) => {
		setCartData((prev) => {
			return { ...prev, total: prev.total + updateState };
		});
	};

	const removeFromCart = (index) => {
		setCartData((prev) => {
			return {
				...prev,
				products: prev.products.filter((item, i) => {
					if (i !== index) return item;
					return null;
				}),
			};
		});
	};

	const setQuantity = (index, updateState) => {
		setCartData((prev) => {
			return {
				...prev,
				products: [
					...prev.products.map((item, i) => {
						if (i === index) {
							return { ...item, quantity: updateState };
						}
						return item;
					}),
				],
			};
		});
	};
	const renderSelectedProducts = () => {
		return cartData.products.map((item, i) => {
			return (
				<Grid item container key={i}>
					<ProductShoppingCard
						index={i}
						image={item.product.image}
						name={item.product.name}
						price={item.product.price}
						quantity={item.quantity}
						removeFromCart={removeFromCart}
						setQuantity={setQuantity}
						updateCheckoutTotal={updateCheckoutTotal}
					/>
					<Grid item xs={12} sx={{ marginTop: "5px", marginBottom: "10px" }}>
						<hr style={{ color: "#fff" }} />
					</Grid>
				</Grid>
			);
		});
	};

	useEffect(() => {
		let total = 0;
		cartData.products.forEach((item) => {
			total += item.product.price * item.quantity;
		});
		setCartData((prev) => {
			return { ...prev, total: total };
		});
	}, [cartData.products, setCartData]);

	useEffect(() => {
		// update setLoadingPage to false after 2 seconds
		setTimeout(() => {
			setShowLoadingPage(false);
		}, 2000);
	}, []);

	const renderLoadingPage = () => {
		return (
			<Box
				sx={{
					width: "100%",
					backgroundColor: "#A19B98",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					paddingY: "100px",
					marginTop: "50px",
				}}
			>
				<img className="loaderImage" src={loader} alt="loader" width={306} />
				<Box sx={{ marginLeft: "50px" }}>
					<Typography fontSize={48} fontWeight={"bold"}>
						One Step
					</Typography>
					<Typography fontSize={48} fontWeight={"bold"}>
						Closer to
					</Typography>
					<Typography fontSize={48} fontWeight={"bold"}>
						Your Doorstep
					</Typography>
				</Box>
			</Box>
		);
	};

	const renderCheckoutPage = () => {
		return (
			<Box sx={{ paddingX: "20px" }}>
				<Typography fontSize={64} fontWeight={"bold"}>
					Shopping Cart
				</Typography>
				<Grid container columnSpacing={2}>
					{/* Selected Products */}
					<Grid container item xs={8}>
						<Grid
							item
							container
							sx={{ width: "954px", marginLeft: "100px", marginTop: "20px" }}
						>
							<Grid
								item
								xs={4}
								sx={{
									marginTop: "5px",
									marginBottom: "10px",
									fontSize: "32px",
									fontWeight: "bold",
								}}
							>
								Product
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									marginTop: "5px",
									marginBottom: "10px",
									fontSize: "32px",
									fontWeight: "bold",
								}}
							>
								Quantity
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									marginTop: "5px",
									marginBottom: "10px",
									fontSize: "32px",
									fontWeight: "bold",
								}}
							>
								Total Price
							</Grid>
							<Grid
								item
								xs={12}
								sx={{ marginTop: "5px", marginBottom: "10px" }}
							>
								<hr style={{ color: "#fff" }} />
							</Grid>
							{renderSelectedProducts()}
							<Grid container xs={12} item spacing={2}>
								<Grid xs={8} item sx={{ textAlign: "center" }}>
									<Typography fontSize="32px" fontWeight="bold">
										Total:
									</Typography>
								</Grid>
								<Grid xs={1} item>
									<Typography
										fontSize={32}
										fontWeight={"bold"}
										textAlign={"center"}
									>
										₱{cartData.total}
									</Typography>
								</Grid>
							</Grid>
							<Grid xs={4} item>
								<CustomButton
									buttonType={"btn3"}
									styles={{
										padding: "0px 20px",
										border: "5px solid #fff",
										backgroundColor: "transparent",
										color: "#fff",
									}}
								>
									<Link
										to="/products"
										style={{
											textDecoration: "none",
											color: "inherit",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<ArrowBackIosNewOutlinedIcon sx={{ fontSize: "20px" }} />
										Back to Order
									</Link>
								</CustomButton>
							</Grid>
						</Grid>
					</Grid>
					{/* Address and payment methods */}
					<Grid container xs={4} item>
						{/* Address */}
						<Grid item xs={12} sx={{ marginBottom: "5px" }}>
							<Typography fontSize={24} fontWeight={"bold"} lineHeight={2}>
								Delivery Address
							</Typography>
							<Typography fontSize={20} fontWeight={"bold"} lineHeight={2}>
								{userData.city}
							</Typography>
							<Typography
								fontSize={20}
								color={"rgba(255, 255, 255, 0.6)"}
								lineHeight={2}
							>
								{userData.streetOrHouseNumber}
							</Typography>
							<CustomButton
								buttonType={"btn3"}
								padding={"2px 10px"}
								styles={{
									border: "none",
									borderRadius: "10px",
								}}
							>
								<PendingActionsIcon />
								<Link
									to="/myaccount"
									style={{ textDecoration: "none", color: "inherit" }}
								>
									{" "}
									Edit Address
								</Link>
							</CustomButton>
						</Grid>
						<Grid>
							<PaymentMethods />
						</Grid>
					</Grid>
				</Grid>
			</Box>
		);
	};

	return showLoadingPage ? renderLoadingPage() : renderCheckoutPage();
};

export default Checkout;
