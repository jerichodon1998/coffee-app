import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartDataContext } from "../App";

const OrderDetails = () => {
	const { cartData } = useContext(CartDataContext);
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box sx={{ width: "375px" }}>
				{cartData.products.map((item, i) => {
					return (
						<Grid container key={i}>
							<Grid item xs={10} sx={{ textAlign: "start" }}>
								{item.quantity}x {item.product.name}
							</Grid>
							<Grid item xs={2}>
								₱{item.product.price * item.quantity}
							</Grid>
						</Grid>
					);
				})}
				<hr style={{ margin: "10px 10px" }} />
				<Box sx={{ textAlign: "end", marginRight: "10px" }}>
					₱{cartData.total}
				</Box>
			</Box>
		</Box>
	);
};

export default OrderDetails;
