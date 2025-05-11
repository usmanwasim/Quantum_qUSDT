import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";

// Hide AppBar on scroll down

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack
        direction={"row"}
        sx={{
          flexGrow: 1,
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src="/logo1.png" alt="logo" width={50} height={50} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "primary.main",
          }}
        >
          Quantum - qUSDT
        </Typography>
      </Stack>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ cursor: "pointer" }}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.href}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => {
                window.open("https://swap.qusdt.net", "_blank");
              }}
            >
              Quantum Swap
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => {
                open();
              }}
            >
              {isConnected
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Connect Wallet"}
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ mt: 2, mb: 2 }} alignItems="center">
          <Stack
            direction={"row"}
            sx={{
              flexGrow: 1,
              gap: 1,
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src="/logo1.png" alt="logo" width={50} height={50} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "primary.main",
              }}
            >
              Quantum - qUSDT
            </Typography>
          </Stack>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                href={item.href}
              >
                {item.name}
              </Button>
            ))}

            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 1,
                px: 1,
              }}
              onClick={() => {
                window.open("https://swap.qusdt.net", "_blank");
              }}
            >
              Quantum Swap
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                // ml: 2,
                px: 3,
              }}
              onClick={() => {
                open();
              }}
            >
              {isConnected
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Connect Wallet"}
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
