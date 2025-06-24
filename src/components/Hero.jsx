import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  styled,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Wallet, Token, CopyAll } from "@mui/icons-material";

import { toast } from "react-toastify";
import { useAppKitAccount, useAppKit } from "@reown/appkit/react";

import { isAddress, formatEther, parseUnits, formatUnits } from "viem";
import { getBalance, readContract, writeContract } from "@wagmi/core";
import abi from "../utils/Abi.json";
import tokenAbi from "../utils/TokenAbi.json";
import { wagmiAdapter } from "../wagmi";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(229, 97, 195, 0.5)",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e561c3",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
    WebkitTextFillColor: "rgba(255, 255, 255, 0.5) !important",
  },
  "& .MuiInputAdornment-root": {
    color: "#fff",
  },
}));
// Countdown Timer Component
const CountdownTimer = () => {
  const [preSaleTime, setPreSaleTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimeLeft = (endTime) => {
    const difference = new Date(endTime * 1000) - Date.now();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Presale ended
  };

  const presaleEndTime = 1758567600; //update time here in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setPreSaleTime(getTimeLeft(presaleEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography
      component="p"
      sx={{
        fontSize: { xs: "12px", sm: "18px" },
        background: "linear-gradient(-90deg, #1de9b6 0%, #6effe8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        width: "max-content",
        fontWeight: "bold",
        textAlign: "center",
        mx: "auto",
      }}
    >
      {preSaleTime.days} Days - {preSaleTime.hours} Hrs - {preSaleTime.minutes}{" "}
      Min - {preSaleTime.seconds} Sec
    </Typography>
  );
};

const Hero = () => {
  const [amount, setAmount] = useState("");
  const [Receive, setReceive] = useState("0");
  const [tokenPrice, setTokenPrice] = useState();
  const [decimal, setDecimal] = useState("");
  const [referralPercent, setReferralPercent] = useState();
  const [progress, setProgress] = useState();
  const { isConnected, address } = useAppKitAccount();
  const { open } = useAppKit();

  const urlParams = new URLSearchParams(window.location.search);
  let referral = urlParams.get("ref");

  useEffect(() => {
    const ReadFunctions = async () => {
      const referralpercent = await readContract(wagmiAdapter.wagmiConfig, {
        abi,
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        functionName: "referralpercent",
      });
      setReferralPercent(referralpercent.toString());

      const getProgress = await readContract(wagmiAdapter.wagmiConfig, {
        abi,
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        functionName: "getProgress",
      });
      setProgress(getProgress.toString());

      let tokenPerUsd = await readContract(wagmiAdapter.wagmiConfig, {
        abi,
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        functionName: "tokenPerUsd",
      });
      tokenPerUsd = 1 / Number(formatEther(tokenPerUsd.toString()));
      setTokenPrice(tokenPerUsd);

      let decimals = await readContract(wagmiAdapter.wagmiConfig, {
        abi: tokenAbi,
        address: import.meta.env.VITE_TOKEN_ADDRESS,
        functionName: "decimals",
      });
      setDecimal(decimals.toString());
    };

    ReadFunctions();
  }, [isConnected]);

  const calculateReceiveAmount = async () => {
    try {
      if (!amount || amount === "") return 0;

      const parsedAmount = Number(amount);

      if (isNaN(parsedAmount) || parsedAmount < 0) {
        toast.error("Please enter a valid amount");
        return 0;
      }

      const receiveAmount = await readContract(wagmiAdapter.wagmiConfig, {
        abi,
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        functionName: "ethToToken",
        args: [parseUnits(parsedAmount.toString(), decimal)],
      });

      let a = Number(formatUnits(receiveAmount.toString(), decimal));

      // Set to 4 decimals only if it's a floating number
      a = a % 1 !== 0 ? parseFloat(a.toFixed(4)) : a;

      setReceive(a);
    } catch (err) {
      console.log(err);
      toast.error("Error calculating token amount");
      return 0;
    }
  };

  useEffect(() => {
    calculateReceiveAmount();
  }, [amount]);

  const handleMaxClick = async () => {
    const ethBalance = await getBalance(wagmiAdapter.wagmiConfig, {
      address,
    });
    setAmount(Number(ethBalance.formatted).toFixed(6));
  };

  const handleBuyTokens = async () => {
    try {
      if (!isConnected) {
        return toast.error("Please connect your wallet");
      }

      if (!amount || amount <= 0 || amount === "") {
        return toast.error("Please enter a valid amount");
      }

      if (!referral || !isAddress(referral)) {
        referral = "0x0000000000000000000000000000000000000000";
      }

      const tx = await writeContract(wagmiAdapter.wagmiConfig, {
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        functionName: "buyToken",
        args: [referral],
        value: parseUnits(amount, decimal),
      });
      console.log(tx);
      toast.success("Transaction sent successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.shortMessage);
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background:
          "linear-gradient(45deg, #005f30 30%, #008000 60%, #1faa59 90%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "1.7rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              qUSDT – The First Fee-Fueled Stablecoin with Built-In Profit
              Potential
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 2,
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: "600px",
                fontSize: { xs: "15px", md: "18px" },
              }}
            >
              qUSDT is a next-generation stablecoin, always backed to maintain a
              $1 USD value — but with a powerful twist. For the first time, a
              stablecoin is fueled by real swap fees from Quantum Swap,
              collected across both Ethereum and BNB chains. These fees directly
              strengthen qUSDT’s backing and create long-term value for holders.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 2,
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: "600px",
                fontSize: { xs: "15px", md: "18px" },
              }}
            >
              Currently, qUSDT can be purchased at a discounted range of $0.25
              to $1.00 during the vesting phase, giving early adopters the
              chance to lock in maximum profit. After the ~1-year vesting
              period, qUSDT will be stabilized at a fixed $1.00 value, making it
              the most attractive stablecoin in the market — combining price
              stability, passive growth, and deep utility.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: "600px",
                fontSize: { xs: "15px", md: "18px" },
              }}
            >
              Buy low, hold smart, earn big — with qUSDT.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                onClick={() => {
                  window.open(
                    "https://qusdt.gitbook.io/quantum-whitepaper",
                    "_blank"
                  );
                }}
              >
                Whitepaper
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: "24px",
                color: "#fff",
                backdropFilter: "blur(20px)",
                border: "1px solid #6effe8",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "18px", sm: "24px", md: "30px" },
                  fontFamily: "plus jakarta sans",

                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(-90deg, #1de9b6 0%, #6effe8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",

                    width: "max-content",
                  }}
                >
                  Quantum
                </span>{" "}
                - qUSDT
              </Typography>
              <Typography variant="p" sx={{ mb: 1 }}>
                Presale Ends In :
              </Typography>
              {/* presale timer to display  */}
              <CountdownTimer />

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  // mb: 1,
                }}
              >
                <span style={{ fontWeight: "bold" }}>1 qUSDT =</span> ${" "}
                {tokenPrice}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  mb: 1,
                }}
              >
                <span style={{ fontWeight: "bold" }}>Launch Price =</span> ${" "}
                {import.meta.env.VITE_LAUNCH_PRICE}
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 15,
                  borderRadius: 4,
                  bgcolor: "#ffffff20",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    right: 0,
                    height: "100%",
                    fontSize: "10px",
                  }}
                >
                  100B $qUSDT
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${progress}%`,
                    borderRadius: 4,
                    background:
                      "linear-gradient(-90deg, #1de9b6 0%, #6effe8 100%)",
                    fontSize: "10px",
                    fontWeight: 900,
                    pr: 1,
                    textAlign: "right",
                    verticalAlign: "middle",
                  }}
                >
                  {progress}%
                </Box>
              </Box>

              {/* Amount Input */}
              <Box sx={{ my: 1, textAlign: "left" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
                >
                  You Pay:
                </Typography>
                <StyledTextField
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={`Amount in ETH`}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          onClick={handleMaxClick}
                          sx={{
                            minWidth: "auto",
                            px: 2,
                            py: 0.5,
                          }}
                        >
                          Max
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {/* Amount to Receive */}
              <Box sx={{ mb: 2, textAlign: "left" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
                >
                  {/* Amount in $qUSDT */}
                  You Receive:
                </Typography>
                <StyledTextField
                  fullWidth
                  value={`${Receive} qUSDT`}
                  readOnly
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component="img"
                          src="/logo.png"
                          alt="qUSDT"
                          sx={{ width: "35px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {isConnected ? (
                <>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Token size={20} />}
                    onClick={() => handleBuyTokens()}
                    // disabled={true}
                    sx={{
                      py: 1.5,
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Purchase Tokens
                  </Button>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
                  >
                    Referrer will receive {referralPercent}% of your purchase
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Box sx={{ textAlign: "left" }}>
                      Your referral link:
                      <Typography
                        variant="subtitle2"
                        sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
                      >
                        {`${window.location.origin}/?ref=${address.slice(
                          0,
                          6
                        )}...${address.slice(-4)}`}
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${window.location.origin}/?ref=${address}`
                        );
                        toast.success("Referral link copied!");
                      }}
                    >
                      <CopyAll sx={{ color: "#fff" }} />
                    </IconButton>
                  </Box>
                </>
              ) : (
                <>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Wallet size={20} />}
                    onClick={() => open()}
                    sx={{
                      py: 1.5,
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Connect Wallet
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
