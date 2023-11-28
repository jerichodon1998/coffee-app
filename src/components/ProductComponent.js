import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartDataContext } from "../App";

const ProductComponent = ({ product }) => {
	const { setCartData } = useContext(CartDataContext);

	const onAddToCart = () => {
		setCartData((prev) => {
			return {
				...prev,
				products: [...prev.products, { product: product, quantity: 1 }],
			};
		});
	};

	return (
		<Grid container>
			<Grid item xs={4}>
				<img
					src={product.image}
					alt="product"
					style={{
						width: "500px",
						height: "500px",
						borderRadius: "50px 0 0 50px",
					}}
				/>
			</Grid>
			<Grid item xs={8} sx={{ marginTop: "50px" }}>
				<Typography fontSize={40} fontWeight={"bold"}>
					{product.name}
				</Typography>
				<Typography fontSize={24}>{product.description}</Typography>
				<Grid container sx={{ marginTop: "10px" }}>
					<Grid item xs={6}>
						<Typography fontSize={24} fontWeight={"bold"}>
							₱{product.price}
						</Typography>
					</Grid>
					<Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
						<Button
							variant="outlined"
							sx={{
								textTransform: "none",
								borderRadius: "50px",
								border: "5px solid #B24F1C",
								color: "#fff",
								"&:hover": {
									border: "5px solid #B24F1C",
									backgroundColor: "#ED6A26",
								},
							}}
							onClick={onAddToCart}
						>
							<Typography fontSize={24} fontFamily={"ABeeZee"}>
								Add to Cart
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductComponent;
