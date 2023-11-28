import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ProductShoppingCard = ({
	index,
	image,
	name,
	price,
	updateCheckoutTotal,
	removeFromCart,
	quantity,
	setQuantity,
}) => {
	const [totalPrice, setTotalPrice] = useState(price * quantity);

	return (
		<Grid container>
			<Grid item xs={5} sx={{ color: "#fff" }}>
				<Grid container>
					<Grid item xs={4}>
						<img src={image} alt={name} width={117} height={114} />
					</Grid>
					<Grid
						container
						item
						xs={8}
						sx={{
							fontSize: "32",
							fontWeight: "bold",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{name}
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				item
				xs={3}
				sx={{ color: "#fff", justifyContent: "center", alignItems: "center" }}
			>
				<Box
					sx={{
						width: "80%",
						border: "1px solid #fff",
						borderRadius: "25px",
					}}
				>
					<Grid
						container
						sx={{
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<Grid item xs={4}>
							<RemoveOutlinedIcon
								fontSize="36px"
								onClick={(e) => {
									if (quantity > 0) {
										setQuantity(index, quantity - 1);
										setTotalPrice(price * (quantity - 1));
										updateCheckoutTotal(-price);
									}
								}}
								sx={{ cursor: "pointer" }}
							/>
						</Grid>
						<Grid item xs={4}>
							<Typography fontSize={36} fontWeight={"bold"}>
								{quantity}
							</Typography>
						</Grid>

						<Grid item xs={4}>
							<AddOutlinedIcon
								fontSize="36px"
								onClick={(e) => {
									setQuantity(index, quantity + 1);
									setTotalPrice(price * (quantity + 1));
									updateCheckoutTotal(price);
								}}
								sx={{ cursor: "pointer" }}
							/>
						</Grid>
					</Grid>
				</Box>
			</Grid>
			<Grid
				item
				xs={1}
				sx={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography fontSize={32} fontWeight={"bold"}>
					₱{totalPrice}
				</Typography>
			</Grid>
			<Grid
				item
				xs={1}
				sx={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CloseOutlinedIcon
					sx={{
						cursor: "pointer",
					}}
					onClick={() => {
						removeFromCart(index);
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default ProductShoppingCard;
