import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
} from "@mui/material";
import dao from "../assets/DAO_Governance.png";
import defi from "../assets/DeFi_Lending.png";
import dex from "../assets/DEX_Integration.png";
import staking from "../assets/Staking_Platform.png";
import nft from "../assets/NFT_Marketplace.png";
import cross from "../assets/Cross-Chain_Bridge.png";

const services = [
  {
    title: "Staking Platform",
    description:
      "Earn passive income by staking your tokens. Our staking platform offers competitive APY with flexible lock-up periods.",
    src: staking,
    link: "#",
  },
  {
    title: "DEX Integration",
    description:
      "Trade tokens on our decentralized exchange with minimal fees. Enjoy seamless swaps between various cryptocurrencies.",
    src: dex,
    link: "#",
  },
  {
    title: "NFT Marketplace",
    description:
      "Create, buy, and sell unique digital assets on our NFT marketplace. Showcase your creativity and monetize your digital art.",
    src: nft,
    link: "#",
  },
  {
    title: "DAO Governance",
    description:
      "Participate in community governance to shape the future of our ecosystem. Vote on important proposals and protocol changes.",
    src: dao,
    link: "#",
  },
  {
    title: "Cross-Chain Bridge",
    description:
      "Transfer your assets across different blockchain networks with our secure cross-chain bridge technology.",
    src: cross,
    link: "#",
  },
  {
    title: "DeFi Lending",
    description:
      "Access decentralized lending and borrowing services with competitive interest rates and flexible terms.",
    src: defi,
    link: "#",
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Comprehensive ecosystem of financial services powered by our token
          </Typography>
          <Divider
            sx={{
              width: "80px",
              mx: "auto",
              borderColor: "primary.main",
              borderWidth: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
                elevation={2}
              >
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "contain",
                    width: "100%",
                    height: { xs: "120px", sm: "180px" },
                  }}
                  image={service.src}
                  src={service.src}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    fontWeight={600}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
