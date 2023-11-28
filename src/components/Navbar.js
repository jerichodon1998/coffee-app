import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import {
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { UserDataContext } from "../App";

const navItems = ["My Account", "Products", "Checkout"];
const drawerWidth = 240;

const Navbar = () => {
	const { userData } = useContext(UserDataContext);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const companyName = "starbs";
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const renderAuthenticatedBtns = () => {
		return (
			<>
				<Button sx={{ color: "#fff", textTransform: "none" }}>
					<Link
						to={"myaccount"}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<Typography fontSize={"20px"}>My Account</Typography>
					</Link>
				</Button>
				<Button sx={{ color: "#fff", textTransform: "none" }}>
					<Link
						to={"products"}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<Typography fontSize={"20px"}>Products</Typography>
					</Link>
				</Button>
				<Button sx={{ color: "#fff", textTransform: "none" }}>
					<Link
						to={"checkout"}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<Typography fontSize={"20px"} component="div">
							Checkout
						</Typography>
					</Link>
				</Button>
			</>
		);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<h4 style={{ fontFamily: "Vujahday Script" }}>{companyName}</h4>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box>
			<AppBar
				component="nav"
				style={{ backgroundColor: "#000" }}
				position="sticky"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						fontFamily={"Vujahday Script"}
						fontSize={"48px"}
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
							{companyName}
						</Link>
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{userData.isLoggedin ? (
							renderAuthenticatedBtns()
						) : (
							<Button sx={{ color: "#fff", textTransform: "none" }}>
								<Link
									to={"login"}
									style={{ textDecoration: "none", color: "inherit" }}
								>
									<Typography fontSize={"20px"} component="div">
										Signin
									</Typography>
								</Link>
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};

export default Navbar;
