import React from "react";
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import wallet from "../assets/Wallet.png";
import purchase from "../assets/Purchase.png";
import verify from "../assets/Verify.png";
import claim from "../assets/Claim.png";

const steps = [
  {
    label: "Connect Your Wallet",
    description:
      "Connect your cryptocurrency wallet to our secure platform. We support MetaMask, Trust Wallet, WalletConnect and more.",
    icon: <AccountBalanceWalletIcon />,
    image: wallet,
  },
  {
    label: "Purchase Tokens",
    description:
      "Select the amount of tokens you want to purchase and complete the transaction using ETH, BNB, or USDT.",
    icon: <ShoppingCartIcon />,
    image: purchase,
  },
  {
    label: "Verify Your Purchase",
    description:
      "Once your transaction is confirmed, you'll receive a confirmation and your tokens will be allocated to your account.",
    icon: <VerifiedUserIcon />,
    image: verify,
  },
  {
    label: "Claim Your Tokens",
    description:
      "After the presale ends, you can claim your tokens directly to your wallet and start using them in our ecosystem.",
    icon: <CurrencyExchangeIcon />,
    image: claim,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Mobile stepper view
  const MobileStepper = () => (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                icon: step.icon,
              }}
            >
              <Typography variant="h6">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body1" color="text.secondary" paragraph>
                {step.description}
              </Typography>
              <Box
                component="img"
                src={step.image}
                alt={step.label}
                sx={{
                  height: "100px",
                  borderRadius: 2,
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={index === steps.length - 1}
                  >
                    Continue
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All steps completed - you&apos;re ready to join the presale!
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );

  // Desktop horizontal view
  const DesktopStepper = () => (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                icon: step.icon,
              }}
            >
              <Typography variant="subtitle1">{step.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={steps[activeStep].image}
              alt={steps[activeStep].label}
              sx={{
                height: "200px",
                borderRadius: 2,
                objectFit: "contain",
                display: "flex",
                mx: "auto",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom>
              {steps[activeStep].label}
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {steps[activeStep].description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mr: 1 }}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            All steps completed - you&apos;re ready to join the presale!
          </Typography>
          <Button onClick={handleReset} variant="outlined" sx={{ mt: 1 }}>
            Start Again
          </Button>
        </Paper>
      )}
    </Box>
  );

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
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
            How It Works
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Join our presale in just a few simple steps
          </Typography>
        </Box>

        {isMobile ? <MobileStepper /> : <DesktopStepper />}
      </Container>
    </Box>
  );
};

export default HowItWorks;
