import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Stack,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ width: "100%" }}>
              <Stack
                direction={"row"}
                sx={{
                  flexGrow: 1,
                  gap: 1,
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img src="/logo1.png" alt="logo" width={50} height={50} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  Quantum - qUSDT
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Revolutionizing the financial ecosystem with cutting-edge
                blockchain technology. Join our presale today and be part of the
                future of finance.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="inherit" aria-label="Twitter" size="small">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Telegram" size="small">
                  <TelegramIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="GitHub" size="small">
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" size="small">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Reddit" size="small">
                  <RedditIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link
                href="#hero"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Home
              </Link>
              <Link
                href="#about"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                How It Works
              </Link>
              <Link
                href="#services"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Services
              </Link>
              <Link
                href="#roadmap"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Roadmap
              </Link>
              <Link
                href="#faq"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                FAQ
              </Link>
            </Stack>
          </Grid>

          {/* <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Whitepaper
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Documentation
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Blog
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Press Kit
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Careers
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Contact Us
              </Link>
            </Stack>
          </Grid> */}

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Stay updated with the latest news and announcements about our
              token presale.
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                mb: 2,
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mr: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                }}
                InputProps={{
                  sx: { borderRadius: 2 },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 2 }}
              >
                <SendIcon />
              </Button>
            </Box>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, mb: { xs: 2, sm: 0 } }}
          >
            © {new Date().getFullYear()} Quantum. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="/privacy-policy"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ opacity: 0.8 }}
            >
              Privacy Policy
            </Link>
            <Link
              href="terms-of-service"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ opacity: 0.8 }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
