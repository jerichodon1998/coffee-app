import { Box, Grid } from "@mui/material";
import React from "react";
import ProductComponent from "../components/ProductComponent";
import { dummyData } from "../dummyData/ProductsData";

const Products = () => {
	return (
		<Box sx={{ padding: "100px 50px" }}>
			<Grid container spacing={4}>
				{dummyData.map((item, i) => (
					<Grid item xs={12} key={i}>
						<ProductComponent product={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Products;
