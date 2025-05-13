import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import { CopyAll } from "@mui/icons-material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import aboutImg from "../assets/Qusdt-About.png";
import { toast } from "react-toastify";

const features = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Secure & Reliable",
    description:
      "Built on advanced blockchain technology with multiple security audits to ensure your assets are protected.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Fast Transactions",
    description:
      "Lightning-fast transaction processing with minimal fees, making transfers efficient and cost-effective.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Community Driven",
    description:
      "Governed by a decentralized autonomous organization (DAO) where token holders vote on important decisions.",
  },
  {
    icon: (
      <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "primary.main" }} />
    ),
    title: "Multi-Chain Support",
    description:
      "Compatible with multiple blockchain networks, providing flexibility and wider adoption opportunities.",
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
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
            About Our Token
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
            Revolutionizing the financial ecosystem with cutting-edge blockchain
            technology
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
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={aboutImg}
              alt="About our token"
              sx={{
                width: "80%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                mx: "auto",
                mb: { xs: 4, md: 0 },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              fontWeight={600}
            >
              The Next Generation Token
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Our token is designed to address the limitations of traditional
              financial systems and existing cryptocurrencies. By leveraging
              advanced blockchain technology, we've created a token that is not
              only secure and efficient but also scalable for global adoption.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              With a focus on real-world utility, our token can be used for a
              wide range of applications, from everyday transactions to complex
              financial operations, all while maintaining low fees and fast
              processing times.
            </Typography>

            <Box>
              <TableContainer sx={{ mt: 4 }}>
                <Table size="small" border={2}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ border: 1, fontWeight: 700 }}>
                        Parameter
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: 1, fontWeight: 700 }}
                      >
                        Details
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      {
                        name: "Official Contract",
                        value: "0x64684f4978F8ad9E67c2e19ca98d1F9B00CFE3A1",
                      },
                      { name: "Token Name", value: "Quantum" },
                      { name: "Symbol", value: "qUSDT" },
                      { name: "Network", value: "Ethereum (ERC-20)" },
                      {
                        name: "Total Supply",
                        value: "100,000,000,000 qUSDT",
                      },
                    ].map((row) => (
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            border: 1,
                            fontWeight: 500,
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: 1, position: "relative" }}
                        >
                          {row.value}
                          {row.name === "Official Contract" && (
                            <IconButton
                              sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: 30,
                                height: 30,
                              }}
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  "0x64684f4978F8ad9E67c2e19ca98d1F9B00CFE3A1"
                                );
                                toast.success("Copied to clipboard");
                              }}
                            >
                              <CopyAll />
                            </IconButton>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 600,
            }}
          >
            Key Features
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
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
                  }}
                  elevation={2}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight={600}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
